import { Container, Typography } from "@mui/material";

import DrawerAppBar from "./components/DrawerAppBar";
import Main from "./components/Main";

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
      <Main />
      <Typography>Footer</Typography>
    </Container>
  );
}
