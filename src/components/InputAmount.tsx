import { useContext } from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { CurrencyContext } from "../contexts/CurrencyContext";

export default function InputAmount() {
  const { amount, setAmount } = useContext(CurrencyContext);

  return (
    <Grid item xs={12}>
      <TextField
        label="Valor"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
}
