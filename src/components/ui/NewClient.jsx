import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";

import moment from "moment";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { useForm } from "../../hooks/useForm";
import { ClientContext } from "../../context/client/ClientContext";
import { useSnackbar } from "notistack";

const INITIAL_DATE = moment().format("YYYY-MM-DD");

export const NewClient = () => {
  const [form, handleChange, cleanInputs] = useForm({
    nombre: "",
    apellido: "",
    fecha_nacimiento: INITIAL_DATE,
  });

  const { enqueueSnackbar } = useSnackbar();

  const { addNewClient } = useContext(ClientContext);

  const { nombre, apellido, fecha_nacimiento } = form;

  const [touched, setTouched] = useState(false);

  const onSave = () => {
    if (nombre.trim().length <= 0 || apellido.trim().length <= 0) {
      return enqueueSnackbar("Ingrese Correctamente el formulario", {
        variant: "error",
        autoHideDuration: 2500,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }

    if (!moment(fecha_nacimiento).isSameOrBefore(INITIAL_DATE)) {
      return enqueueSnackbar("La fecha no puede ser posterior a la actual", {
        variant: "error",
        autoHideDuration: 2500,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }

    addNewClient(form);
    cleanInputs();
    setTouched(false);
  };

  useEffect(() => {
    setTouched(false);
  }, []);

  return (
    <Card
      sx={{
        padding: "30px",
        // minHeight: 450,
        // minWidth: 275,
        // maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <CardHeader
        title="Formulario"
        subheader="Crea un Cliente"
        sx={{ textAlign: "center" }}
      />
      <CardContent>
        <TextField
          fullWidth
          sx={{ marginTop: 2, marginBottom: 1 }}
          placeholder="Ingresa un Nombre"
          autoFocus
          name="nombre"
          label="Nombre"
          helperText={nombre.length <= 0 && touched && "Ingrese el Nombre"}
          error={nombre.length <= 0 && touched}
          value={nombre}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
        />

        <TextField
          fullWidth
          sx={{ marginTop: 2, marginBottom: 1 }}
          placeholder="Ingresa un Apellido"
          label="Apellido"
          name="apellido"
          helperText={apellido.length <= 0 && touched && "Ingrese el Apellido"}
          error={apellido.length <= 0 && touched}
          value={apellido}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
        />

        <TextField
          fullWidth
          type="date"
          label="Fecha de Nacimiento"
          name="fecha_nacimiento"
          helperText={
            fecha_nacimiento.length <= 0 &&
            touched &&
            "Ingrese la fecha de nacimiento"
          }
          error={fecha_nacimiento.length <= 0 && touched}
          value={fecha_nacimiento}
          onChange={handleChange}
          sx={{ marginTop: 2, marginBottom: 1 }}
        />

        <Box sx={{ marginTop: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            startIcon={<SaveOutlinedIcon />}
            onClick={onSave}
          >
            Guardar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
