import React, { useState } from "react";
import "./FieldTokenComponent.scss";
import { TokenData } from "../../../classes/TokenClasses/TokenCreator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface FieldTokenData {
  tokenData: TokenData;
  tokenArray: TokenData[];
  setTokenArray: React.Dispatch<React.SetStateAction<TokenData[]>>;
}

export default function FieldTokenComponent(props: FieldTokenData) {
  const [tokenExpanded, setTokenExpand] = useState(false);
  const [tokenEliminated, setTokenEliminate] = useState(false);

  const { tokenData, tokenArray, setTokenArray } = props;

  const {
    data: {
      tokenLabelColor,
      tokenAlias,
      tokenDefense,
      tokenHP,
      tokenInitiative,
      tokenSpeed,
      tokenType,
    },
    id,
  } = tokenData;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  if (transform) {
    transform.scaleX = 1.02;
    transform.scaleY = 1.02;
  }

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  function expandToken() {
    setTokenExpand((prev) => !prev);
  }

  function killToken() {
    setTokenEliminate((prev) => !prev);
  }

  function deleteToken(tokenArray: TokenData[], e: React.MouseEvent) {
    const index = tokenArray.findIndex(
      (token) => token.id === (e.target as HTMLSpanElement).dataset.index,
    );

    const _tokenArray = tokenArray
      .slice(0, index)
      .concat(tokenArray.slice(index + 1));

    setTokenArray(_tokenArray);
    deleteTokenFromDb((e.target as HTMLSpanElement).dataset.index!);
  }

  async function deleteTokenFromDb(id: string) {
    fetch(`http://localhost:9000/creaturesTokens/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Token deleted successfully!");
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div
        className={`tokenLabel battlefieldToken
        ${tokenExpanded ? "expanded" : ""}
        ${tokenEliminated ? "isDead" : ""}`}
        id="battlefieldToken"
        data-type={tokenType}
        style={{
          backgroundColor: `${tokenEliminated ? "gray" : tokenLabelColor}`,
        }}
      >
        <span className="tokenInitiative">{tokenInitiative}</span>
        <span
          className={`${tokenEliminated ? "isDead" : ""}`}
          onClick={killToken}
        >
          <i className={`fa-solid fa-skull deathStatusIcon`}></i>
        </span>
        <span className="tokenName">{tokenAlias}</span>
        <button onClick={expandToken} className="tokenExpandButton">
          <i className="fa-solid fa-angle-down expandArrow"></i>
        </button>
      </div>

      <div
        style={{ display: `${tokenExpanded ? "flex" : "none"}` }}
        className="tokenPreview"
      >
        <span onClick={(e) => deleteToken(tokenArray, e)}>
          <i className="fa-solid fa-trash-can deleteToken" data-index={id}></i>
        </span>

        <div>
          <span>
            <i className="fa-solid fa-heart-pulse"></i>
            {tokenHP}
          </span>
          <span>
            <i className="fa-solid fa-shield-halved"></i>
            {tokenDefense}
          </span>
          <span>
            <i className="fa-solid fa-person-running"></i>
            {tokenSpeed}
          </span>
        </div>
      </div>
    </div>
  );
}
