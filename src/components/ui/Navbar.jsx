import { AppBar, Toolbar, IconButton, Typography, Link } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>

        <Link underline="none" color="white" href="#">
          <Typography variant="h6"> Clients </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
