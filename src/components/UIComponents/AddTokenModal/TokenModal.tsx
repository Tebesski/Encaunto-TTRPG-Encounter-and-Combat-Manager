import * as React from 'react';
import { assembleToken as assembleTokenAdHoc } from '../../../ad-hoc-functions/assembleToken';
import { TokenData } from '../../../classes/TokenClasses/TokenCreator';
import { TOKEN_TYPE } from '../../../classes/TokenClasses/TokenCreator';
import { BATTLEFIELD_ROW_TYPE } from '../../FieldComponents/BattlefieldComponent/BattlefieldComponent';

import { v4 as uuidv4 } from 'uuid';
import randomColor from 'randomcolor';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddIcon from '@mui/icons-material/Add';
import DialogTitle from '@mui/material/DialogTitle';

import CustomizedAccordions from './TokenModalAccordion'

export default function TokenModal<BATTLEFIELD_ROW_TYPE>(fieldType: BATTLEFIELD_ROW_TYPE) {
  const [open, setOpen] = React.useState(false);
  const [fieldRowType, setFieldRowType] = React.useState<BATTLEFIELD_ROW_TYPE>()

  const [tokenData, setTokenData] = React.useState<TokenData>({
    tokenTrueName: "",
    tokenAlias: null,
    tokenId: "",
    tokenType: null,
    tokenLabelColor: "",
    tokenStatusColor: "",
    linkedTo: null,
    tokenInitiative: 0,
    tokenHP: "",
    tokenDefense: "",
    tokenSpeed: "",

    assembleToken(): JSX.Element {
      return assembleTokenAdHoc(tokenData)
   }
  })

  React.useEffect(() => {
    if(tokenData.tokenId.length > 0) {
      const token = tokenData.assembleToken()
      
    }
  }, [tokenData, fieldRowType])

  function handleOnChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const value = event.target.value
    const fieldId = event.target.id

    switch (fieldId) {
      case "creatureName":
        setTokenData({
          ...tokenData,
          tokenTrueName: value,
          tokenAlias: value,
        })   
        break;
      case "creatureInitiative":
        setTokenData({
          ...tokenData,
          tokenInitiative: Number(value),
        })   
        break;
      case "creatureHP":
        setTokenData({
          ...tokenData,
          tokenHP: value,
        }) 
        break;
      case "creatureDefense":
        setTokenData({
          ...tokenData,
        tokenDefense: value,
        }) 
        break;
      case "creatureSpeed":
        setTokenData({
          ...tokenData,
        tokenSpeed: value,
        }) 
        break;
    
      default:
        break;
    }
  }

  const handleClickOpen = () => {
    setFieldRowType(fieldType)
    setOpen(true);
  };

  // HANDLE CLOSE MODAL WITHOUT ADDING TOKEN
  function handleClose() {
    setOpen(false);
  }

  // HANDLE ADD TOKEN
  function handleAddToken () {

    if(tokenData.tokenTrueName.length < 1) return

    setTokenData({
      ...tokenData,
      tokenId: uuidv4(),
      tokenType: TOKEN_TYPE.BATTLEFIELD_TOKEN,
      tokenLabelColor: randomColor(),
      tokenStatusColor: "gray",
      linkedTo: null,
    })

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} id="creature_add_button">
        <AddIcon
        fontSize='large'/>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>DESCRIBE THE CREATURE</DialogTitle>
        <DialogContent sx={{display: 'flex', flexDirection: 'column', width: 1/3}}>
          <TextField
            autoFocus
            margin="dense"
            id="creatureName"
            label="NAME *"
            type="text"
            variant="standard"
            onChange={handleOnChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="creatureInitiative"
            label="INITIATIVE"
            type="number"
            variant="standard"
            onChange={handleOnChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="creatureHP"
            label="HP"
            type="text"
            variant="standard"
            onChange={handleOnChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="creatureDefense"
            label="DEFENSE"
            type="text"
            variant="standard"
            onChange={handleOnChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="creatureSpeed"
            label="SPEED"
            type="text"
            variant="standard"
            onChange={handleOnChange}
          />

          <CustomizedAccordions />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddToken}>ADD CREATURE TO BATTLEFIELD</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}