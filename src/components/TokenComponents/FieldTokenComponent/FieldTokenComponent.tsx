import { TokenData } from "../../../classes/TokenClasses/TokenCreator";
import React from "react";

export interface IFieldTokenComponent {
   baseTokenData: TokenData;
}

export interface FieldTokenState {
   state: number
}

export default class FieldTokenComponent extends React.Component<IFieldTokenComponent> {
   
   render() {
      const {baseTokenData:{tokenLabelColor, tokenAlias, tokenDefense, tokenHP, tokenId, tokenInitiative, tokenSpeed, tokenStatusColor, tokenTrueName, tokenType}} = this.props
      
      return (
         <div className="fieldTokenComponent"
         style={{backgroundColor: `${tokenLabelColor}`}}>

            <p>{tokenAlias}</p>
            <span>{tokenInitiative}</span>
            <p>{tokenHP}</p>
            <span>{tokenDefense}</span>
            <p>{tokenSpeed}</p>

         </div>
         
      )
   }

}