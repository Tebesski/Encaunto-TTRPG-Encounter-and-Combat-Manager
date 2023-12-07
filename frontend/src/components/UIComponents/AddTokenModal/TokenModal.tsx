import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AddIcon from '@mui/icons-material/Add';
import DialogTitle from '@mui/material/DialogTitle';

import CustomizedAccordions from './TokenModalAccordion'

export default function TokenModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon
        fontSize='large'/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>DESCRIBE THE CREATURE</DialogTitle>
        <DialogContent sx={{display: 'flex', flexDirection: 'column', width: 1/3}}>
          <TextField
            autoFocus
            margin="dense"
            id="entityName"
            label="NAME *"
            type="text"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="INITIATIVE"
            type="number"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="HP"
            type="number"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="DEFENSE"
            type="number"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="SPEED"
            type="number"
            variant="standard"
          />

          <CustomizedAccordions />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ADD CREATURE TO BATTLEFIELD</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}