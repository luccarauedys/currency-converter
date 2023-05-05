import axios from "axios";

export async function getExchangeRate(
  fromCurrencyCode: string,
  toCurrencyCode: string
) {
  const response = await axios.get(import.meta.env.VITE_API_BASE_URL, {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      base_currency: fromCurrencyCode,
      currencies: toCurrencyCode,
    },
  });

  const exchangeRate = response.data.data[`${toCurrencyCode}`];
  return exchangeRate;
}
