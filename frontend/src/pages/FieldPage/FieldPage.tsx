import {BattlefieldComponent} from "../../components/FieldComponents/BattlefieldComponent/BattlefieldComponent"
import { TokenCreator } from "../../classes/TokenClasses/TokenCreator"
import { gatherUserEntityDataInput } from "../../ad-hoc-functions/gatherUserEntityDataInput"

export const FieldPage = () =>  {

  // TEST TOKEN CREATOR
  const params = gatherUserEntityDataInput()
  const token = TokenCreator.createInitiativeToken(params)
  token.assembleToken()
  console.log(token.assembleToken());

    return (
      <div>
        <BattlefieldComponent />
      </div>
    )   
  }