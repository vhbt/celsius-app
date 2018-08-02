import axios from 'axios';
import qs from 'qs';
import apiUrl from './api-url';
import cryptoUtil from '../utils/crypto-util';

const walletService = {
  getWalletDetails,
  getCoinAddress,
  getCoinOriginatingAddress,
  setCoinWithdrawalAddress,
  getCoinTransactions,
  getCoinGraphData,
  getAllTransactions,
  withdrawCrypto,
  getTransaction,
};

function getWalletDetails() {
  const params = { supported_coins: cryptoUtil.getEligibleCoins() };
  return axios.get(`${apiUrl}/wallet?${qs.stringify(params)}`);
}

function getCoinAddress(coin) {
  return axios.get(`${apiUrl}/wallet/${coin.toLowerCase()}/address`);
}

function getCoinOriginatingAddress(coin) {
  return axios.get(`${apiUrl}/wallet/${coin.toLowerCase()}/originating_address`);
}

/**
 * @param {string} coin
 * @param {string} address
 * @returns {AxiosPromise<any>}
 */
function setCoinWithdrawalAddress(coin, address) {
  return axios.post(`${apiUrl}/wallet/${coin.toLowerCase()}/originating_address`, {
    address,
  });
}

function getCoinTransactions(coin) {
  return axios.get(`${apiUrl}/wallet/${coin.toLowerCase()}/transactions`);
}

function getCoinGraphData(coin, time = '7d') {
  return axios.get(`${apiUrl}/wallet/${coin.toLowerCase()}/graph/${time}`);
}

function getAllTransactions() {
  return axios.get(`${apiUrl}/wallet/transactions`);
}

function withdrawCrypto(coin, amount, pin) {
  return axios.post(`${apiUrl}/wallet/${coin.toLowerCase()}/withdraw`, { amount: amount.toFixed(5), pin });
}

function getTransaction(transactionId) {
  return axios.get(`${apiUrl}/wallet/transactions/${transactionId}`);
}

export default walletService;
