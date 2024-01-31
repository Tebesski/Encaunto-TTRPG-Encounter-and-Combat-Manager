import "./InitiativeComponent.scss";
import React, { useState } from "react";

import {
  DndContext,
  closestCenter,
  DragOverEvent,
  useSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { TokenData } from "../../../classes/TokenClasses/TokenCreator";
import { InitiativeTokenComponent } from "../../TokenComponents/InitiativeTokenComponent/InitiativeTokenComponent";

export type tokensArrayT = { data: TokenData; id: number }[];

export function InitiativeComponent() {
  const [initiativeTokens, setInitiativeTokens] = useState<tokensArrayT>([]);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 200,
      tolerance: 5,
    },
  });

  function onDragOver(event: DragOverEvent, tokenType: string) {
    const { active, over } = event;

    if (active.id !== over!.id) {
    }
  }

  return (
    <div className="initiativeZone">
      <div className="initiativeCol">
        <header>
          <h3>INITIATIVE</h3>
        </header>

        <DndContext
          collisionDetection={closestCenter}
          onDragOver={(e) => onDragOver(e, "creatures")}
          modifiers={[restrictToVerticalAxis]}
          sensors={[mouseSensor]}
        >
          <main className="battlefieldRow">
            <SortableContext
              items={initiativeTokens}
              strategy={verticalListSortingStrategy}
            >
              {initiativeTokens.map((tokenData) => (
                <InitiativeTokenComponent
                  tokenData={tokenData.data}
                  key={tokenData.data.tokenId}
                />
              ))}
            </SortableContext>
          </main>
        </DndContext>
      </div>
    </div>
  );
}
