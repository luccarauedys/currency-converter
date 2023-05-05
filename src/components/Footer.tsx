import { Container, Typography } from "@mui/material";

export default function Footer() {
  const containerStyles = {
    backgroundColor: "#0d22b9",
    height: { xs: "56px", sm: "64px" },
    display: "flex",
    alignItems: "center",
  };

  const pStyles = { width: "100%", textAlign: "center", color: "white" };

  return (
    <Container maxWidth={false} sx={containerStyles}>
      <Typography sx={pStyles}>
        Projeto desenvolvido por <strong>Lucca Rauédys</strong>.
      </Typography>
    </Container>
  );
}
