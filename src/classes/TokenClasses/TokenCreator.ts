import { EntityData } from "../EntitiesClasses/EntityCreator";

export interface TokenData {
  data: {
    tokenTrueName: string;
    tokenAlias: string | null;
    tokenInitiative: number;
    tokenHP: string;
    tokenDefense: string;
    tokenSpeed: string;
    tokenType: string | undefined;
    tokenLabelColor: string;
    tokenStatusColor: string;
    isEliminated: boolean;
    linkedTo: string | null;
    isActive: boolean;
  };
  id: string;
}

export enum COLUMN_TYPE {
  "BATTLEFIELD_TOKEN",
  "INITIATIVE_TOKEN",
  "WORKSHOP_TOKEN",
}
