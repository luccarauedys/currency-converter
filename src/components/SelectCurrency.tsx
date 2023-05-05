import { Autocomplete, Grid, TextField } from "@mui/material";
import countries from "../data/countries.json";

type SelectCurrencyProps = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectCurrency(props: SelectCurrencyProps) {
  const { label, value, setValue } = props;

  return (
    <Grid item xs={12}>
      <Autocomplete
        value={value}
        onChange={(_event, newValue) => newValue && setValue(newValue)}
        disableClearable
        options={countries}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
}
