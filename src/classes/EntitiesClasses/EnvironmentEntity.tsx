import { ActionSubentity } from "../SubentitiesClasses/ActionSubent";
import { AttributesSubentity } from "../SubentitiesClasses/AttributesSubent";
import { BuffSubentity } from "../SubentitiesClasses/BuffSubent";
import { EmanationSubentity } from "../SubentitiesClasses/EmanationSubent";
import { ResourceSubentity } from "../SubentitiesClasses/ResourceSubent";
import { EntityData, ENTITY_TYPE } from "./EntityCreator";

// export class EnvironmentEntityCreator extends BaseEntityCreator {
//    public setEntity(params: EntityData): EntityData {
//       return new EnvironmentEntity(params)
//    }
// }

export type EnvironmentEntityType = EntityData & {entityType: ENTITY_TYPE.ENVIRONMENT}

export class EnvironmentEntity implements EnvironmentEntityType {
   entityName: string;
   entityId: number;
   entityType: ENTITY_TYPE.ENVIRONMENT;
   isEmanating: boolean;
   hasActions: boolean;
   hasBuffs: boolean;
   hasResources: boolean;
   hasAttributes: boolean;
   
   actions: ActionSubentity[] | null;
   resources: ResourceSubentity[] | null;
   emanations: EmanationSubentity[] | null;
   buffs: BuffSubentity[] | null;
   attributes: AttributesSubentity[] | null;

  constructor(entityParameters: EntityData) {
    this.entityName = entityParameters.entityName;
    this.entityId = entityParameters.entityId;
    this.entityType = ENTITY_TYPE.ENVIRONMENT;

    this.isEmanating = entityParameters.isEmanating;
    this.hasActions = entityParameters.hasActions;
    this.hasBuffs = entityParameters.hasBuffs;
    this.hasResources = entityParameters.hasResources;
    this.hasAttributes = entityParameters.hasAttributes;

    this.actions = entityParameters.actions;
    this.resources = entityParameters.resources;
    this.emanations = entityParameters.emanations;
    this.buffs = entityParameters.buffs;
    this.attributes = entityParameters.attributes;
  }
   
}