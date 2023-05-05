import { useContext } from "react";
import { Button, Grid } from "@mui/material";
import { CurrencyContext } from "../contexts/CurrencyContext";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

export default function ButtonSwitchCurrency() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const buttonStyles = {
    borderRadius: 1,
    height: "100%",
  };

  return (
    <Grid item xs={12}>
      <Button onClick={handleSwitch} sx={buttonStyles}>
        <SwapVerticalCircleIcon sx={{ fontSize: 50, color: "#0d22b9" }} />
      </Button>
    </Grid>
  );
}
