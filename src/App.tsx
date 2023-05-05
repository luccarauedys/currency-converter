import { Container, Grid } from "@mui/material";

import DrawerAppBar from "./components/DrawerAppBar";
import InputAmount from "./components/InputAmount";

export default function App() {
  const containerStyles = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Container maxWidth={false} disableGutters sx={containerStyles}>
      <DrawerAppBar />

      <Grid container>
        <InputAmount />
      </Grid>
    </Container>
  );
}
