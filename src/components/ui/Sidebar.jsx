import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Drawer,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';
import { UIContext } from "../../context/ui/UIContext";
import { Link } from "wouter";

const MenuItems = [
  {
    text: "Crear Clientes",
    icon: <AddBoxOutlinedIcon />,
    route: "/"
  },
  {
    text: "Todos los Clientes",
    icon: <FormatListBulletedOutlinedIcon />,
    route: "/allClients"
  },
  {
    text: "Promedio por Fecha",
    icon: <FunctionsOutlinedIcon />,
    route: "/avgAge"
  },
];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
      anchor="left"
      open={sidemenuOpen}
      onClose={closeSideMenu}
      // variant="temporary"
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Clients App
          </Typography>
        </Box>

        <List>
          {MenuItems.map((item, index) => (
            <Link href={item.route} key={index} >
              <ListItem button >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
