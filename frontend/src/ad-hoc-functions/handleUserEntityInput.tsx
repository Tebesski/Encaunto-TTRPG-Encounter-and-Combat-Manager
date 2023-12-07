import { EntitiesType } from "../classes/EntitiesClasses/EntityCreator";
import { EntityData } from "../classes/EntitiesClasses/EntityCreator";

type handleUserEntityInput = () => {
   gatherUserEntityDataInput(userEntityDataInput: EntityData): EntityData
   pushEntityDataToDB(gatheredData: EntitiesType): void
   
   createBattlefieldTokenFromInput(gatheredData: EntitiesType): void
   createInitiativeTokenFromInput(gatheredData: EntitiesType): void
   createWorkshopTokenFromInput(gatheredData: EntitiesType): void
}

export function handleUserEntityInput() {
   
}