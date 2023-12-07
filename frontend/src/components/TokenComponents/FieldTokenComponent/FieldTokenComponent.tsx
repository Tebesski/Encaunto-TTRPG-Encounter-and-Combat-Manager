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
      
      return (
         <div className="fieldTokenComponent" style={{backgroundColor: `${this.props.baseTokenData.tokenLabelColor}`}}>
            <span>{this.props.baseTokenData.tokenTrueName}</span>
            <span>{this.props.baseTokenData.tokenTrueName}</span>
         </div>
         
      )
   }

}