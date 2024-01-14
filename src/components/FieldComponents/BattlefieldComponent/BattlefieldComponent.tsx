import "./BattlefieldComponent.scss";
import TokenModal from "../../UIComponents/AddTokenModal/TokenModal";
import { useState } from "react";
import { TokenData } from "../../../classes/TokenClasses/TokenCreator";

export function BattlefieldComponent() {
  const [creaturesTokens, setCreaturesToken] = useState<
    { content: JSX.Element }[]
  >([]);

  const [objectsTokens, setdObjectsToken] = useState<
    { content: JSX.Element }[]
  >([]);

  const [environmentTokens, setEnvironmentToken] = useState<
    { content: JSX.Element }[]
  >([]);

  function dispatchTokens(currentTokenType: string) {
    switch (currentTokenType) {
      case "creaturesToken":
        return creaturesTokens.map((element) => element.content);
      case "objectsToken":
        return objectsTokens.map((element) => element.content);
      case "environmentToken":
        return environmentTokens.map((element) => element.content);
    }
  }

  return (
    <div className="battlefieldZone">
      <div className="battlefieldCol" id="creaturesCol">
        <header>
          <h3>CREATURES</h3>
        </header>

        <main className="battlefieldRow">
          {creaturesTokens.length < 2 ? null : dispatchTokens("creaturesToken")}
        </main>

        <TokenModal
          tokenType="creaturesToken"
          addToken={setCreaturesToken}
          tokenArray={creaturesTokens}
          key="creaturesTokenModal"
        />
      </div>

      <div className="battlefieldCol" id="objectsCol">
        <header>
          <h3>OBJECTS</h3>
        </header>

        <main className="battlefieldRow">
          {objectsTokens.length < 2 ? null : dispatchTokens("objectsToken")}
        </main>

        <TokenModal
          tokenType="objectsToken"
          addToken={setdObjectsToken}
          tokenArray={objectsTokens}
          key="objectsTokenModal"
        />
      </div>

      <div className="battlefieldCol" id="environmentCol">
        <header>
          <h3>ENVIRONMENT</h3>
        </header>

        <main className="battlefieldRow">
          {environmentTokens.length < 2
            ? null
            : dispatchTokens("environmentToken")}
        </main>

        <TokenModal
          tokenType="environmentToken"
          addToken={setEnvironmentToken}
          tokenArray={environmentTokens}
          key="environmentTokenModal"
        />
      </div>
    </div>
  );
}
