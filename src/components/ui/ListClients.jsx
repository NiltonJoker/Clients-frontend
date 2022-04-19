import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ClientContext } from "../../context/client/ClientContext";
import moment from "moment";

export const ListClients = () => {
  const { clients } = useContext(ClientContext);

  return (
    <>
      {
        clients.length === 0 
        ? 
        (
          <Typography variant="h4" sx={{ textAlign: 'center' }}> 😱 No hay clientes, intenta crear alguno  </Typography>
        )
        : 
        (

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Fecha de Nacimiento</TableCell>
              <TableCell>Edad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.nombre}</TableCell>
                <TableCell>{client.apellido}</TableCell>
                <TableCell>
                  {moment(client.fecha_nacimiento).format("YYYY-MM-DD")}
                </TableCell>
                <TableCell>
                  {moment().diff(client.fecha_nacimiento, "years", false)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        )
      }
    </>
  );
};
