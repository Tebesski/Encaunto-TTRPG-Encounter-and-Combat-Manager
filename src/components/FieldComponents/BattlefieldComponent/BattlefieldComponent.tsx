import "./BattlefieldComponent.scss";
import { useEffect, useState } from "react";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { DndContext, DragOverEvent, MouseSensor } from "@dnd-kit/core";
import { closestCenter, useSensor } from "@dnd-kit/core";
import { TokenData } from "../../../classes/TokenClasses/TokenCreator";
import FieldTokenComponent from "../../TokenComponents/FieldTokenComponent/FieldTokenComponent";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import TokenModal from "../../UIComponents/AddTokenModal/TokenModal";
import { tokensArrayT } from "../InitiativeComponent/InitiativeComponent";

// const BASE_URL = "http://localhost:9000";

type BattlefieldComponentT = {
  fetchedTokens: TokenData[] | undefined;
  isLoading: boolean;
};

export function BattlefieldComponent(props: BattlefieldComponentT) {
  const [creaturesTokens, setCreaturesToken] = useState<TokenData[]>([]);
  const [objectsTokens, setObjectsToken] = useState<TokenData[]>([]);
  const [environmentTokens, setEnvironmentToken] = useState<TokenData[]>([]);

  const { fetchedTokens, isLoading } = props;

  useEffect(() => {
    if (fetchedTokens !== undefined) {
      setCreaturesToken(fetchedTokens);
    }
  }, [isLoading]);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 175,
      tolerance: 5,
    },
  });

  function setArray(tokens: TokenData[], event: DragOverEvent) {
    const newIndex = tokens.findIndex((token) => token.id === event.active.id);
    const oldIndex = tokens.findIndex((token) => token.id === event.over!.id);
    return arrayMove(tokens, oldIndex, newIndex);
  }

  function onDragOver(event: DragOverEvent, tokenType: string) {
    const { active, over } = event;

    if (active.id !== over!.id) {
      switch (tokenType) {
        case "creatures":
          setCreaturesToken((tokens) => {
            return setArray(tokens, event);
          });
          break;

        case "objects":
          setObjectsToken((tokens) => {
            return setArray(tokens, event);
          });
          break;

        case "environment":
          setEnvironmentToken((tokens) => {
            return setArray(tokens, event);
          });
          break;
      }
    }
  }

  return (
    <div className="battlefieldZone">
      <div className="battlefieldCol" id="creaturesCol">
        <header>
          <h3>CREATURES</h3>
        </header>

        <DndContext
          collisionDetection={closestCenter}
          onDragOver={(e) => onDragOver(e, "creatures")}
          modifiers={[restrictToVerticalAxis]}
          sensors={[mouseSensor]}
        >
          <main className="battlefieldRow">
            <SortableContext
              items={creaturesTokens}
              strategy={verticalListSortingStrategy}
            >
              {isLoading
                ? false
                : creaturesTokens.map((tokenData) => (
                    <FieldTokenComponent
                      tokenData={tokenData}
                      key={tokenData.id}
                      tokenArray={creaturesTokens}
                      setTokenArray={setCreaturesToken}
                    />
                  ))}
            </SortableContext>
          </main>
        </DndContext>

        <TokenModal
          tokenType="creaturesToken"
          addToken={setCreaturesToken}
          key="creaturesTokenModal"
        />
      </div>

      {/* OBJECTS: */}

      <div className="battlefieldCol" id="objectsCol">
        <header>
          <h3>OBJECTS</h3>
        </header>

        <DndContext
          collisionDetection={closestCenter}
          onDragOver={(e) => onDragOver(e, "objects")}
          modifiers={[restrictToVerticalAxis]}
          sensors={[mouseSensor]}
        >
          <main className="battlefieldRow">
            <SortableContext
              items={objectsTokens}
              strategy={verticalListSortingStrategy}
            >
              {objectsTokens.map((tokenData) => (
                <FieldTokenComponent
                  tokenData={tokenData}
                  key={tokenData.id}
                  tokenArray={objectsTokens}
                  setTokenArray={setObjectsToken}
                />
              ))}
            </SortableContext>
          </main>
        </DndContext>

        <TokenModal
          tokenType="objectsToken"
          addToken={setObjectsToken}
          key="objectsTokenModal"
        />
      </div>

      {/* ENVIRONMENT: */}

      <div className="battlefieldCol" id="environmentCol">
        <header>
          <h3>ENVIRONMENT</h3>
        </header>

        <DndContext
          collisionDetection={closestCenter}
          onDragOver={(e) => onDragOver(e, "environment")}
          modifiers={[restrictToVerticalAxis]}
          sensors={[mouseSensor]}
        >
          <main className="battlefieldRow">
            <SortableContext
              items={environmentTokens}
              strategy={verticalListSortingStrategy}
            >
              {environmentTokens.map((tokenData) => (
                <FieldTokenComponent
                  tokenData={tokenData}
                  key={tokenData.id}
                  tokenArray={environmentTokens}
                  setTokenArray={setEnvironmentToken}
                />
              ))}
            </SortableContext>
          </main>
        </DndContext>

        <TokenModal
          tokenType="environmentToken"
          addToken={setEnvironmentToken}
          key="environmentTokenModal"
        />
      </div>
    </div>
  );
}
