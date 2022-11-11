import BigNumber from "bignumber.js";
import { scriptFunctions } from "./index";
import moment from "moment";
import { ApiPromise, WsProvider } from '@polkadot/api';


const main = async () => {
  const npmConfigArgv: { [key: string]: string[] } = JSON.parse(`${process.env.npm_config_argv}`);
  const [npmScriptCommand, chain] = npmConfigArgv.original;
  const chainConfig = require(`../networks/${chain}`);
  const nodeUrl = chainConfig.NodeUrl[chainConfig.Network[chain.toUpperCase()]];
  console.log(`Going to connect ${nodeUrl} ... `);
  // initialise a provider with a specific endpoint
  const provider = new WsProvider('wss://example.com:9944')
  // initialise via isReady & new with specific provider
  const api = await new ApiPromise({ provider }).isReady;
  
  const inputs = process.env.INPUTS ? process.env.INPUTS.split(",") : [];
  const targetScriptFunction: string = `${process.env.FUNCTION}`;
  console.log(`Going to ${targetScriptFunction} ... with inputs`, inputs);
  await scriptFunctions[targetScriptFunction](inputs, api, { chain });
};

main();
