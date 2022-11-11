import lodash from "lodash";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { GWEI_TO_WEI_MULTIPLIRER, ETH_TO_WEI_MULTIPLIRER } from "../enum";

export const gweiToWei = (gwei: ethers.BigNumber | string | number): ethers.BigNumber => {
  return toSmallerUnit(gwei, GWEI_TO_WEI_MULTIPLIRER);
};

export const weiToGwei = (wei: ethers.BigNumber | string | number): ethers.BigNumber => {
  return toLaggerUnit(wei, GWEI_TO_WEI_MULTIPLIRER);
};

export const ethToWei = (gwei: ethers.BigNumber): ethers.BigNumber => {
  return toSmallerUnit(gwei, ETH_TO_WEI_MULTIPLIRER);
};

export const weiToEth = (wei: ethers.BigNumber | string | number): ethers.BigNumber => {
  return toLaggerUnit(wei, ETH_TO_WEI_MULTIPLIRER);
};

export const toSmallerUnit = (
  amount: ethers.BigNumber | string | number,
  multiplier: ethers.BigNumber | string | number,
): ethers.BigNumber => {
  if (lodash.isNil(multiplier)) {
    throw new Error("[convertToNormalUnit] process.env.BASE_UNIT_TO_NORMAL_UNIT_MULTIPLIER not exist");
  }
  return ethers.BigNumber.from(amount).mul(`1E${multiplier}`);
};

export const toLaggerUnit = (
  amount: ethers.BigNumber | string | number,
  multiplier: ethers.BigNumber | string | number,
): ethers.BigNumber => {
  if (lodash.isNil(multiplier)) {
    throw new Error("[convertToNormalUnit] process.env.BASE_UNIT_TO_NORMAL_UNIT_MULTIPLIER not exist");
  }
  return ethers.BigNumber.from(amount).div(`1E${multiplier}`);
};

export const roundUpNumberToInteger = (amount: ethers.BigNumber | string): ethers.BigNumber => {
  return ethers.BigNumber.from(new BigNumber(amount.toString()).integerValue(BigNumber.ROUND_CEIL));
};
