import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useContext } from "react";
import { ClientContext } from "../../context/client/ClientContext";

export const AgeCard = () => {

  const { avgAge } = useContext(ClientContext)

  return (
    <Card
      sx={{
        padding: "30px",
        margin: "0 auto",
        minHeight: 400,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <CardHeader
        title="Promedio de Edad"
        titleTypographyProps={{ variant: "h4" }}
        subheaderTypographyProps={{ variant: "h5" }}
        subheader="Todos los Clientes"
        sx={{ textAlign: "center" }}
      />
      <CardContent>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          { avgAge  || 'Sin Calcular los ' } años
        </Typography>
      </CardContent>
    </Card>
  );
};
