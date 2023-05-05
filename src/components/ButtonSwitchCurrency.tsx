import { Button, Grid } from "@mui/material";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

export default function ButtonSwitchCurrency() {
  // TODO: Pegar fromCurrency, setFromCurrency, toCurrency e setToCurrency do contexto.

  const handleSwitch = () => {
    // setFromCurrency(toCurrency);
    // setToCurrency(fromCurrency);
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
