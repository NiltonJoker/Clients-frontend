import { Grid, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../context/client/ClientContext";
import { AgeCard } from "../ui/AgeCard";

export const AverageAge = () => {
  const { getAVGAge } = useContext(ClientContext);

  useEffect(() => {
    getAVGAge();

    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ marginTop: 10 }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "calc(100vh - 180px)" }}
      >
        <Grid item xs={12} sm={10} md={5}>
          <AgeCard />
        </Grid>
      </Grid>
    </Box>
  );
};
