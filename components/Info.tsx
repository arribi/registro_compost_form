import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const products = [
  {
    name: 'Centro',
    desc: 'Info del centro',
    price: 'IES San Diego de Alcalá',
  },
  {
    name: 'Compostera',
    desc: 'Tipo',
    price: 'Aporte',
  },
  {
    name: 'Estado',
    desc: 'Ciclo iniciado',
    price: 'Sí',
  },
  {
    name: 'Usuario',
    desc: 'Info de usuario',
    price: 'Federico',
  },
];

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Información
      </Typography>
      <Typography variant="h4" gutterBottom>
        {/* {totalPrice} */}
        Detalles de la compostera
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
