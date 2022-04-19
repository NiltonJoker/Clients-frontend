import { Box } from "@mui/material";

import { Navbar, Sidebar } from "../ui";



export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Navbar/>

      <Sidebar/>

      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
