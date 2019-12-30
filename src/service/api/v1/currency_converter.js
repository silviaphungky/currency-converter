import axios from "axios";

const API_ROOT = "https://free.currconv.com/api/v7"

export async function getResultCurrencyConverter(currency) {
  const endpoint = `${API_ROOT}/convert?q=${currency}&compact=ultra&apiKey=e9d495ef5fd75783cc7e`
  const response = await axios.get(endpoint)
  return response
};

export async function getCurrencyDetails() {
  const endpoint = `${API_ROOT}/countries?apiKey=e9d495ef5fd75783cc7e`
  const response = await axios.get(endpoint)
  return response
};