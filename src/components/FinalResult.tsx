import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { CurrencyContext } from "../contexts/CurrencyContext";

export default function FinalResult() {
  const { amount, fromCurrency, toCurrency, convertedValue } =
    useContext(CurrencyContext);

  const fromCurrencyCode = fromCurrency.split(" ")[1].trim();
  const toCurrencyCode = toCurrency.split(" ")[1].trim();

  const exchangeRate = (convertedValue / amount).toFixed(2);

  return (
    <Box>
      <Typography sx={{ fontSize: "2rem", fontWeight: "500" }}>
        {amount} {fromCurrencyCode} = {convertedValue.toFixed(2)}{" "}
        {toCurrencyCode}
      </Typography>
      <Typography sx={{ opacity: "80%" }}>
        1 {fromCurrencyCode} = {exchangeRate} {toCurrencyCode}
      </Typography>
    </Box>
  );
}
