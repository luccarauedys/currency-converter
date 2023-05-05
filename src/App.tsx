import { Container } from "@mui/material";
import DrawerAppBar from "./components/DrawerAppBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
      <Footer />
    </Container>
  );
}
