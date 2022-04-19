import { Grid, Box, Typography } from "@mui/material";
import { ListClients } from "../ui/ListClients";

export const Clients = () => {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Typography sx={{ textAlign: "center", marginBottom: 10 }} variant="h3" >
        Lista de Clientes
      </Typography>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 5, sm: 2, md: 3 }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={10} md={6}>
          <ListClients />
        </Grid>
      </Grid>
    </Box>
  );
};
