import { useState, useEffect } from "react";

import { BattlefieldComponent } from "../../components/FieldComponents/BattlefieldComponent/BattlefieldComponent";
import { InitiativeComponent } from "../../components/FieldComponents/InitiativeComponent/InitiativeComponent";
import { WorkshopComponent } from "../../components/FieldComponents/WorkshopComponent/WorkshopComponent";
import { useAuth } from "../../contexts/AuthContext";

import "./FieldPage.scss";
import { TokenData } from "../../classes/TokenClasses/TokenCreator";

export function FieldPage() {
  const [isLoading, setIsLoading] = useState(true);

  const [fetchedCreaturesTokens, setFetchedCreaturesTokens] =
    useState<TokenData[]>();

  const auth = useAuth();

  async function fetchTokensData() {
    const creaturesTokens = await fetch(
      "http://localhost:9000/creaturesTokens",
    );
    const tokenData = await creaturesTokens.json();
    setIsLoading(false);
    return tokenData;
  }

  useEffect(() => {
    if (isLoading) {
      fetchTokensData().then((tokens) => setFetchedCreaturesTokens(tokens));
    }
  }, [fetchedCreaturesTokens]);

  return (
    <div className="fieldContainer">
      <InitiativeComponent />
      <BattlefieldComponent
        isLoading={isLoading}
        fetchedTokens={fetchedCreaturesTokens}
      />
      <WorkshopComponent />
    </div>
  );
}
