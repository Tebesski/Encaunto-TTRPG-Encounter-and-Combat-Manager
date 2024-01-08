import "./BattlefieldComponent.scss"
import TokenModal from "../../UIComponents/AddTokenModal/TokenModal"

export type battlefieldRowType = {

}

export enum BATTLEFIELD_ROW_TYPE {
  "creature",
  "object",
  "environment"
}

export const BattlefieldComponent = () => {

  const battlefieldCol = () => {
    
    return (
      <div className="battlefieldCol" id="battlefield">
        <div className="battlefieldRow" id="creatures_row">
          <h3>CREATURES</h3>

          <TokenModal fieldType={BATTLEFIELD_ROW_TYPE.creature} />
        </div>
        
        <div className="battlefieldRow" id="objects_row">
          <h3>OBJECTS</h3>

          <TokenModal fieldType={BATTLEFIELD_ROW_TYPE.object} />
        </div>

        <div className="battlefieldRow" id="environment_row">
          <h3>ENVIRONMENT</h3>

          <TokenModal fieldType={BATTLEFIELD_ROW_TYPE.environment} />
        </div>
      </div>
    )
  }

  const initiativeCol = () => {
    return (
      <div className="initiativeCol">
        <div className="initiativeRow">TEST1</div>
        <div className="initiativeRow">TEST1</div>
        <div className="initiativeRow">TEST1</div>
      </div>
    )
  }

  const workshopCol = () => {
      return (
        <div className="workshopCol">
        </div>
      )
  }

    return (
      <div className="fieldContainer">

        <div className="initiativeField">
          {initiativeCol()}
        </div>

        <div className="battlefieldZone">
          {battlefieldCol()}
        </div>

        <div className="workshopField">
          {workshopCol()}
        </div>

      </div>
    );
  }