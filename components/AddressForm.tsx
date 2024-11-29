import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import ImageUploader from './ImageUploader';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="city" required>
          Fecha y hora del registro de datos
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker defaultValue={dayjs()} />{' '}
        </LocalizationProvider>
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel control={<Switch />} label="Comienzo de ciclo" />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          °C Ambiente
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="Temperatura"
          autoComplete="City"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          °C Compostera
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="state"
          placeholder="Temperatura"
          autoComplete="State"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Nivel llenado
          </InputLabel>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Selecciona nivel de llenado</option>
            <option value={0}>0%</option>
            <option value={12}>12,5%</option>
            <option value={25}>25%</option>
            <option value={37}>37,5%</option>
            <option value={50}>50%</option>
            <option value={60}>62,5%</option>
            <option value={75}>75%</option>
            <option value={87}>87,5%</option>
            <option value={100}>100%</option>
          </NativeSelect>
        </FormControl>
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Olor
          </InputLabel>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Selecciona un olor</option>
            <option value={20}>Agradable</option>
            <option value={30}>Amoníaco</option>
            <option value={40}>Poddrido</option>
            <option value={50}>Sin olor malo</option>
            <option value={60}>Otro</option>
          </NativeSelect>
        </FormControl>
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Humedad
          </InputLabel>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Selecciona humedad</option>
            <option value={20}>Demasiado húmedo</option>
            <option value={30}>Húmedo</option>
            <option value={40}>Algo seco</option>
            <option value={50}>Muy seco</option>
          </NativeSelect>
        </FormControl>
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel control={<Switch />} label="Presencia de insectos" />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="file-upload">Subir imagen</FormLabel>
        <ImageUploader />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <TextField
          id="standard-multiline-flexible"
          label="Observaciones"
          multiline
          maxRows={4}
          variant="standard"
        />
      </FormGrid>
    </Grid>
  );
}
