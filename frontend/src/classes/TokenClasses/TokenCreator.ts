import { WorkshopTokenDataType } from "./WorkshopToken"
import { InitiativeTokenDataType } from "./InitiativeToken"
import { BattlefieldTokenDataType } from "./BattlefieldToken"

import { BattlefieldToken } from "./BattlefieldToken"
import { InitiativeToken } from "./InitiativeToken"
import { WorkshopToken } from "./WorkshopToken"

import { EntityData } from "../EntitiesClasses/EntityCreator"

export interface TokenData {
   tokenTrueName: string,
   tokenLabel: string | null,
   tokenId: string,
   tokenType: TOKEN_TYPE,
   tokenLabelColor: string,
   tokenStatusColor: string,
   linkedTo: string | null,

   assembleToken(): JSX.Element
}

export enum TOKEN_TYPE {
   "BATTLEFIELD_TOKEN",
   "INITIATIVE_TOKEN",
   "WORKSHOP_TOKEN"
}

export type TokensType = WorkshopTokenDataType | BattlefieldTokenDataType | InitiativeTokenDataType

export class TokenCreator {

  static createBattlefieldToken(entityParameters: EntityData): BattlefieldToken {
    return new BattlefieldToken(entityParameters)
  }
  static createInitiativeToken(entityParameters: EntityData): InitiativeToken {
    return new InitiativeToken(entityParameters)
  }
  static createWorkshopToken(entityParameters: EntityData): WorkshopToken {
    return new WorkshopToken(entityParameters)
  }

}