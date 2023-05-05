import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { Box, Container, Grid, Typography } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCurrency from "./SelectCurrency";
import SwitchCurrency from "./SwitchCurrency";
import FinalResult from "./FinalResult";

export default function Main() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedValue,
  } = useContext(CurrencyContext);

  const containerStyles = {
    width: "90%",
    backgroundColor: "#fdfdfd",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative",
    display: "grid",
    gap: "2rem",
  };

  const h1Styles = {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#0d22b9",
  };

  const pStyles = {
    fontSize: "1.25rem",
    fontWeight: "400",
    marginBottom: "1rem",
  };

  return (
    <Container maxWidth="md" sx={containerStyles}>
      <Box>
        <Typography variant="h1" sx={h1Styles}>
          XE Currency
        </Typography>
        <Typography sx={pStyles}>
          Bem-vindo à ferramenta mais precisa de conversão de moedas.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <InputAmount />
        <SelectCurrency
          label="De"
          value={fromCurrency}
          setValue={setFromCurrency}
        />
        <SwitchCurrency />
        <SelectCurrency
          label="Para"
          value={toCurrency}
          setValue={setToCurrency}
        />
      </Grid>

      {convertedValue ? <FinalResult /> : ""}
    </Container>
  );
}
