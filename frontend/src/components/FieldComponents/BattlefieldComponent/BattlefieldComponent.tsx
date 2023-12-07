import "./BattlefieldComponent.scss"
import TokenModal from "../../UIComponents/AddTokenModal/TokenModal"

export const BattlefieldComponent = () => {

  const battlefieldCol = () => {
    return (
      <div className="battlefieldCol" id="battlefield">
        <div className="battlefieldRow" id="">
          <h3>CREATURES</h3>

          <TokenModal />
        </div>
        
        <div className="battlefieldRow">
          <h3>OBJECTS</h3>
        </div>

        <div className="battlefieldRow">
          <h3>ENVIRONMENT</h3>
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