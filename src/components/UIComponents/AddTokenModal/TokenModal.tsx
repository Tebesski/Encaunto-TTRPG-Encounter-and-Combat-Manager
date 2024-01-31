import * as React from "react";
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

type TokenModalProps = {
  tokenType: string;
  addToken: Function;
};

export default function TokenModal(props: TokenModalProps) {
  const { addToken } = props;
  const [open, setOpen] = React.useState(false);

  const [currentTokenType, setCurrentTokenType] = React.useState("");

  const [tokenData, setTokenData] = React.useState<TokenData>({
    data: {
      tokenTrueName: "",
      tokenAlias: null,
      tokenType: "",
      tokenLabelColor: "",
      tokenStatusColor: "",
      linkedTo: null,
      tokenInitiative: 0,
      tokenHP: "",
      tokenDefense: "",
      tokenSpeed: "",
      isEliminated: false,
      isActive: false,
    },
    id: "",
  });

  const [token, setNewToken] = React.useState(tokenData);
  const [tokenAdded, setTokenAdded] = React.useState(false);

  // USE EFFECT NEW TOKEN
  React.useEffect(() => {
    if (tokenData.id.length > 0) {
      setNewToken(tokenData);

      setTokenData({
        data: {
          tokenTrueName: "",
          tokenAlias: null,
          tokenType: "",
          tokenLabelColor: "",
          tokenStatusColor: "",
          linkedTo: null,
          tokenInitiative: 0,
          tokenHP: "",
          tokenDefense: "",
          tokenSpeed: "",
          isEliminated: false,
          isActive: false,
        },
        id: "",
      });
    }
  }, [tokenData]);

  // USE EFFECT ADD TOKEN
  React.useEffect(() => {
    if (tokenAdded) {
      addToken((tokenArray: TokenData[]) => [...tokenArray, token]);

      setTokenAdded(false);
    }
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
          data: {
            ...tokenData.data,
            tokenTrueName: value,
            tokenAlias: value,
          },
          id: "",
        });
        break;
      case "creatureInitiative":
        setTokenData({
          data: {
            ...tokenData.data,
            tokenInitiative: Number(value),
          },
          id: "",
        });
        break;
      case "creatureHP":
        setTokenData({
          data: {
            ...tokenData.data,
            tokenHP: value,
          },
          id: "",
        });
        break;
      case "creatureDefense":
        setTokenData({
          data: {
            ...tokenData.data,
            tokenDefense: value,
          },
          id: "",
        });
        break;
      case "creatureSpeed":
        setTokenData({
          data: {
            ...tokenData.data,
            tokenSpeed: value,
          },
          id: "",
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

  // HANDLE SET NEW TOKEN
  function handleAddToken() {
    if (tokenData.data.tokenTrueName.length < 1) return;
    setTokenData({
      data: {
        ...tokenData.data,
        tokenType: currentTokenType,
        tokenLabelColor: randomColor(),
        tokenStatusColor: "gray",
        linkedTo: null,
      },
      id: uuidv4(),
    });

    if (!tokenAdded) {
      setTokenAdded(true);
    }
    setOpen(false);
  }

  // ADD TOKEN TO DB
  async function addTokenToDataBase(creaturesToken: TokenData) {
    const creaturesTokensJson = JSON.stringify(creaturesToken);
    const postTokens = await fetch("http://localhost:9000/creaturesTokens", {
      method: "POST",
      body: creaturesTokensJson,
    });
  }

  React.useEffect(() => {
    if (tokenAdded) {
      addTokenToDataBase(token);
    }
  }, [token]);

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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddToken}>ADD CREATURE TO BATTLEFIELD</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
