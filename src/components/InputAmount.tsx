import { Grid, InputAdornment, TextField } from "@mui/material";

export default function InputAmount() {
  // TODO: Pegar amount e setAmount do contexto.

  return (
    <Grid item xs={12}>
      <TextField
        label="Valor"
        value={0}
        // value={amount}
        // onChange={(e) => setAmount(parseFloat(e.target.value))}
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
}
