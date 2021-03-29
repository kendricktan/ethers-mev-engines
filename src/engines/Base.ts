import { BigNumber, Contract } from "ethers";
import { FlashbotsBundleTransaction } from "@flashbots/ethers-provider-bundle";
import { TransactionRequest } from "@ethersproject/abstract-provider";

import { MevBriber } from "../typechain/MevBriber";
import { ERC20 } from "../typechain/ERC20";

import { abi as ERC20Abi } from "../abi/ERC20";
import { abi as MEVBriberAbi } from "../abi/MEVBriber";

export const MEV_BRIBER_ADDRESS = "0x5B7ED1Fe918EF0f627343f12E2279FDB4E1558f2";
export const WETH_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

export abstract class Base {

  protected static mevBriberContract = new Contract(
    MEV_BRIBER_ADDRESS,
    MEVBriberAbi
  ) as MevBriber;

  protected static wethContract = new Contract(WETH_ADDRESS, ERC20Abi) as ERC20;

  abstract getZeroGasPriceTx(): Promise<Array<FlashbotsBundleTransaction>>;

  abstract getDonorTx(minerReward: BigNumber): Promise<FlashbotsBundleTransaction>;

  abstract getDescription(): Promise<string>;
}
