import { BigNumber, Contract, providers } from "ethers";
import { isAddress } from "ethers/lib/utils";
import { TransactionRequest } from "@ethersproject/abstract-provider";
import { Base } from "./Base";
import { IERC20 } from "../typechain/IERC20";

import { abi as ERC20Abi } from "../abi/ERC20";

export class TransferERC20 extends Base {
  private _provider: providers.JsonRpcProvider;
  private _sender: string;
  private _recipient: string;
  private _tokenContract: Contract;

  constructor(
    provider: providers.JsonRpcProvider,
    sender: string,
    recipient: string,
    _tokenAddress: string
  ) {
    super();
    if (!isAddress(sender)) throw new Error("Bad Address");
    if (!isAddress(recipient)) throw new Error("Bad Address");
    this._sender = sender;
    this._provider = provider;
    this._recipient = recipient;
    this._tokenContract = new Contract(
      _tokenAddress,
      ERC20Abi,
      provider
    ) as IERC20;
  }

  async description(): Promise<string> {
    return (
      "Transfer ERC20 balance " +
      (await this.getTokenBalance(this._sender)).toString() +
      " @ " +
      this._tokenContract.address +
      " from " +
      this._sender +
      " to " +
      this._recipient
    );
  }

  async getZeroGasPriceTx(): Promise<Array<TransactionRequest>> {
    const tokenBalance = await this.getTokenBalance(this._sender);
    if (tokenBalance.eq(0)) {
      throw new Error(
        `No Token Balance: ${this._sender} does not have any balance of ${this._tokenContract.address}`
      );
    }
    return [
      {
        ...(await this._tokenContract.populateTransaction.transfer(
          this._recipient,
          tokenBalance
        )),
        gasPrice: BigNumber.from(0),
        gasLimit: BigNumber.from(120000),
      },
    ];
  }

  private async getTokenBalance(tokenHolder: string): Promise<BigNumber> {
    return (await this._tokenContract.functions.balanceOf(tokenHolder))[0];
  }

  async getDonorTx(minerReward: BigNumber): Promise<TransactionRequest> {
    const checkTargets = [this._tokenContract.address];
    const checkPayloads = [
      this._tokenContract.interface.encodeFunctionData("balanceOf", [
        this._recipient,
      ]),
    ];
    // recipient might ALREADY have a balance of these tokens. checkAndSend only checks the final state, so make sure the final state is precalculated
    const expectedBalance = (await this.getTokenBalance(this._sender)).add(
      await this.getTokenBalance(this._recipient)
    );
    const checkMatches = [
      this._tokenContract.interface.encodeFunctionResult("balanceOf", [
        expectedBalance,
      ]),
    ];
    return {
      ...(await Base.mevBriberContract.populateTransaction.check32BytesAndSendMulti(
        checkTargets,
        checkPayloads,
        checkMatches
      )),
      value: minerReward,
      gasPrice: BigNumber.from(0),
      gasLimit: BigNumber.from(400000),
    };
  }
}
