import { stringifyWithFormat } from "../utils/print-util";
import { IChainInfo } from "../interfaces";
import { ApiPromise } from '@polkadot/api';

/*
  How to call :

  FUNCTION=playground yarn script polkadot
*/
export const playground = async (inputs: string[], api: ApiPromise , chainInfo?: IChainInfo) => {
  const [interval] = inputs;
  const address = "0xc9219731ADFA70645Be14cD5d30507266f2092c5";
  // const nonce = await provider.getTransactionCount(address);
  // console.log(address, "nonce", stringifyWithFormat(nonce));
};
