import { BattlefieldComponent } from "../../components/FieldComponents/BattlefieldComponent/BattlefieldComponent";
import { InitiativeComponent } from "../../components/FieldComponents/InitiativeComponent/InitiativeComponent";
import { WorkshopComponent } from "../../components/FieldComponents/WorkshopColComponent/WorkshopComponent";

import { TokenCreator } from "../../classes/TokenClasses/TokenCreator";
import { gatherUserEntityDataInput } from "../../ad-hoc-functions/gatherUserEntityDataInput";
import "./FieldPage.scss";

export function FieldPage() {
  return (
    <div className="fieldContainer">
      <InitiativeComponent />
      <BattlefieldComponent />
      <WorkshopComponent />
    </div>
  );
}
