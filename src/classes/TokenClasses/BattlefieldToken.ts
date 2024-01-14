import { EntityData } from "../EntitiesClasses/EntityCreator";
import { COLUMN_TYPE } from "./TokenCreator";
import { TokenData } from "./TokenCreator";
import { v4 as uuidv4 } from "uuid";

export type BattlefieldTokenDataType = TokenData & {
  tokenType: COLUMN_TYPE.BATTLEFIELD_TOKEN;
};

export class BattlefieldToken implements BattlefieldTokenDataType {
  tokenTrueName: string;
  tokenAlias: string | null;
  tokenId: string;
  tokenType: COLUMN_TYPE.BATTLEFIELD_TOKEN;
  tokenLabelColor: string;
  tokenStatusColor: string;
  linkedTo: string | null;
  tokenHP: string;
  tokenDefense: string;
  tokenSpeed: string;
  tokenInitiative: number;

  constructor(gatheredData: EntityData) {
    this.tokenTrueName = gatheredData.entityName;
    this.tokenAlias = gatheredData.entityName;
    this.tokenId = uuidv4();
    this.tokenType = COLUMN_TYPE.BATTLEFIELD_TOKEN;
    this.tokenLabelColor = "red";
    this.tokenStatusColor = "blue";
    this.linkedTo = null;
    this.tokenInitiative = 1;
    this.tokenHP = "1";
    this.tokenDefense = "1";
    this.tokenSpeed = "Fast";
  }
}
