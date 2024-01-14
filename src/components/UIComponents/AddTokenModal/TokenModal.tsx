import * as React from "react";
import { assembleToken } from "../../../ad-hoc-functions/assembleToken";
import { TokenData } from "../../../classes/TokenClasses/TokenCreator";

import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import DialogTitle from "@mui/material/DialogTitle";

import CustomizedAccordions from "./TokenModalAccordion";

type tokenModalProps = {
  tokenType: string;
  addToken: Function;
  tokenArray: { content: JSX.Element }[];
};

export default function TokenModal(props: tokenModalProps) {
  const [open, setOpen] = React.useState(false);

  const [currentTokenType, setCurrentTokenType] = React.useState("");

  const [tokenData, setTokenData] = React.useState<TokenData>({
    tokenTrueName: "",
    tokenAlias: null,
    tokenId: "",
    tokenType: "",
    tokenLabelColor: "",
    tokenStatusColor: "",
    linkedTo: null,
    tokenInitiative: 0,
    tokenHP: "",
    tokenDefense: "",
    tokenSpeed: "",
    isEliminated: false,
  });

  const [token, setNewToken] = React.useState({ content: <></> });

  // USE EFFECT NEW TOKEN
  React.useEffect(() => {
    if (tokenData.tokenId.length > 0) {
      setNewToken(assembleToken(tokenData as TokenData));

      setTokenData({
        tokenTrueName: "",
        tokenAlias: null,
        tokenId: "",
        tokenType: "",
        tokenLabelColor: "",
        tokenStatusColor: "",
        linkedTo: null,
        tokenInitiative: 0,
        tokenHP: "",
        tokenDefense: "",
        tokenSpeed: "",
        isEliminated: false,
      });
    }
  }, [tokenData]);

  // USE EFFECT ADD TOKEN
  React.useEffect(() => {
    props.addToken([...props.tokenArray, token]);
  }, [token]);

  // ON CHANGE
  function handleOnChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    const value = event.target.value;
    const fieldId = event.target.id;

    switch (fieldId) {
      case "creatureName":
        setTokenData({
          ...tokenData,
          tokenTrueName: value,
          tokenAlias: value,
        });
        break;
      case "creatureInitiative":
        setTokenData({
          ...tokenData,
          tokenInitiative: Number(value),
        });
        break;
      case "creatureHP":
        setTokenData({
          ...tokenData,
          tokenHP: value,
        });
        break;
      case "creatureDefense":
        setTokenData({
          ...tokenData,
          tokenDefense: value,
        });
        break;
      case "creatureSpeed":
        setTokenData({
          ...tokenData,
          tokenSpeed: value,
        });
        break;

      default:
        break;
    }
  }

  // HANDLE OPEN MODAL
  const handleClickOpen = () => {
    setCurrentTokenType(props.tokenType);
    setOpen(true);
  };

  // HANDLE CLOSE MODAL WITHOUT ADDING TOKEN
  function handleClose() {
    setOpen(false);
  }

  // HANDLE ADD TOKEN
  function handleAddToken() {
    if (tokenData.tokenTrueName.length < 1) return;

    setTokenData({
      ...tokenData,
      tokenId: uuidv4(),
      tokenType: currentTokenType,
      tokenLabelColor: randomColor(),
      tokenStatusColor: "gray",
      linkedTo: null,
    });

    setOpen(false);
  }

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        id="creature_add_button"
      >
        <AddIcon fontSize="large" />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>DESCRIBE THE CREATURE</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", width: 1 / 3 }}
        >
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
