import { BigNumber, Contract } from "ethers";
import { TransactionRequest } from "@ethersproject/abstract-provider";
import { MevBriber } from "../typechain/MevBriber";

import { abi as MEVBriberAbi } from "../abi/MEVBriber";

export const MEV_BRIBER_ADDRESS = "MEVBriber";

export abstract class Base {
  protected static mevBriberContract = new Contract(
    MEV_BRIBER_ADDRESS,
    MEVBriberAbi
  ) as MevBriber;
  abstract getZeroGasPriceTx(): Promise<Array<TransactionRequest>>;

  abstract getDonorTx(minerReward: BigNumber): Promise<TransactionRequest>;

  abstract description(): Promise<string>;
}
