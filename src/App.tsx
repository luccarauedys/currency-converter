import { Container, Grid, Typography } from "@mui/material";
import DrawerAppBar from "./components/DrawerAppBar";
import InputAmount from "./components/InputAmount";
import SelectCurrency from "./components/SelectCurrency";
import ButtonSwitchCurrency from "./components/ButtonSwitchCurrency";
import { useContext } from "react";
import { CurrencyContext } from "./contexts/CurrencyContext";

export default function App() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  const containerStyles = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Container maxWidth={false} disableGutters sx={containerStyles}>
      <DrawerAppBar />

      <Container maxWidth="md">
        <Grid container spacing={2}>
          <InputAmount />
          <SelectCurrency
            label="De"
            value={fromCurrency}
            setValue={setFromCurrency}
          />
          <ButtonSwitchCurrency />
          <SelectCurrency
            label="Para"
            value={toCurrency}
            setValue={setToCurrency}
          />
        </Grid>
      </Container>

      <Typography>Footer</Typography>
    </Container>
  );
}
