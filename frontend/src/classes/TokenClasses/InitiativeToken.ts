import { EntityData } from "../EntitiesClasses/EntityCreator";
import { TOKEN_TYPE } from "./TokenCreator";
import { TokenData } from "./TokenCreator";
import { v4 as uuidv4 } from "uuid"
import { assembleToken as assembleTokenAdHoc } from "../../ad-hoc-functions/assembleToken";

export type InitiativeTokenDataType = TokenData & {
   tokenType: TOKEN_TYPE.INITIATIVE_TOKEN
}

export class InitiativeToken implements InitiativeTokenDataType {
   tokenTrueName: string;
   tokenLabel: string | null;
   tokenId: string;
   tokenType: TOKEN_TYPE.INITIATIVE_TOKEN;
   tokenLabelColor: string;
   tokenStatusColor: string;
   linkedTo: string | null;

   constructor(gatheredData: EntityData){
      this.tokenTrueName = gatheredData.entityName
      this.tokenLabel = gatheredData.entityName
      this.tokenId = uuidv4()
      this.tokenType = TOKEN_TYPE.INITIATIVE_TOKEN
      this.tokenLabelColor = "red"
      this.tokenStatusColor = "blue"
      this.linkedTo = null
   }

   assembleToken(): JSX.Element {
      return assembleTokenAdHoc(this)
   }

}