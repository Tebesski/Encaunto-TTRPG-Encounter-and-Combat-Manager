import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { TokenData } from "../../../classes/TokenClasses/TokenCreator";
import "./InitiativeTokenComponent.scss";

export interface InitiativeTokenData {
  tokenData: TokenData;
}

export function InitiativeTokenComponent(props: InitiativeTokenData) {
  const [tokenEliminated, setTokenEliminate] = useState(false);

  const { tokenLabelColor, tokenAlias, tokenInitiative, tokenType, id } =
    props.tokenData;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    backgroundColor: `${tokenEliminated ? "gray" : tokenLabelColor}`,
  };

  function killToken() {
    setTokenEliminate((prev) => !prev);
  }

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`tokenLabel battlefieldToken
        ${tokenEliminated ? "isDead" : ""}`}
      id="initiativeToken"
      data-type={tokenType}
    >
      <span className="tokenInitiative">{tokenInitiative}</span>
      <span
        className={`${tokenEliminated ? "isDead" : ""}`}
        onClick={killToken}
      >
        <i className={`fa-solid fa-skull deathStatusIcon`}></i>
      </span>
      <span className="tokenName">{tokenAlias}</span>
    </div>
  );
}
