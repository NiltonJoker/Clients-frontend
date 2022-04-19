import { Grid, Box } from "@mui/material";
import { NewClient } from "../ui/NewClient";
import { ListClients } from "../ui/ListClients";

export const CreateClient = () => {

  return (
    <Box sx={{ marginTop: 10 }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 5, sm: 2, md: 3 }} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <NewClient />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ListClients/>
        </Grid>
      </Grid>
    </Box>
  );
};
