import { EntityData } from "../EntitiesClasses/EntityCreator";
import { COLUMN_TYPE } from "./TokenCreator";
import { TokenData } from "./TokenCreator";
import { v4 as uuidv4 } from "uuid";

export type WorkshopTokenDataType = TokenData & {
  tokenType: COLUMN_TYPE.WORKSHOP_TOKEN;
};

export class WorkshopToken implements WorkshopTokenDataType {
  tokenTrueName: string;
  tokenAlias: string | null;
  tokenId: string;
  tokenType: COLUMN_TYPE.WORKSHOP_TOKEN;
  tokenLabelColor: string;
  tokenStatusColor: string;
  linkedTo: string | null;
  tokenInitiative: number;
  tokenHP: string;
  tokenDefense: string;
  tokenSpeed: string;

  constructor(gatheredData: EntityData) {
    this.tokenTrueName = gatheredData.entityName;
    this.tokenAlias = gatheredData.entityName;
    this.tokenId = uuidv4();
    this.tokenType = COLUMN_TYPE.WORKSHOP_TOKEN;
    this.tokenLabelColor = "red";
    this.tokenStatusColor = "blue";
    this.linkedTo = null;
    this.tokenInitiative = 1;
    this.tokenHP = "1";
    this.tokenDefense = "1";
    this.tokenSpeed = "Fast";
  }
}
