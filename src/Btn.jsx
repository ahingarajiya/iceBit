import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Btn({child , click}) {
  return (
    <Stack spacing={2} direction="row">
   
    <Button onClick={click} variant="outlined">{child}</Button>
  </Stack>
  )
}



