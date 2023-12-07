import { ObjectEntity } from "./ObjectEntity";
import { EnvironmentEntity } from "./EnvironmentEntity";
import { CreatureEntity } from "./CreatureEntity";

import { ActionSubentity } from "../SubentitiesClasses/ActionSubent";
import { AttributesSubentity } from "../SubentitiesClasses/AttributesSubent";
import { BuffSubentity } from "../SubentitiesClasses/BuffSubent";
import { ResourceSubentity } from "../SubentitiesClasses/ResourceSubent";
import { EmanationSubentity } from "../SubentitiesClasses/EmanationSubent";

export type EntityData = {
  entityId: number,
  entityName: string,
  entityType: ENTITY_TYPE,

  isEmanating: boolean,
  hasActions: boolean,
  hasBuffs: boolean,
  hasResources: boolean,
  hasAttributes: boolean,

  actions: ActionSubentity[] | null,
  resources: ResourceSubentity[] | null,
  emanations: EmanationSubentity[] | null,
  buffs: BuffSubentity[] | null,
  attributes: AttributesSubentity[] | null,
}

export enum ENTITY_TYPE {
  "CREATURE",
  "OBJECT",
  "ENVIRONMENT"
}

export interface IEntityCreator {
  createCreatureEntity(entityParameters: EntityData): CreatureEntity
  createEnvironmentEntity(entityParameters: EntityData): EnvironmentEntity
  createObjectEntity(entityParameters: EntityData): ObjectEntity
}

export type EntitiesType = CreatureEntity | EnvironmentEntity | ObjectEntity

export class EntityCreator implements IEntityCreator {

  createCreatureEntity(entityParameters: EntityData): CreatureEntity {
    return new CreatureEntity(entityParameters)
  }
  createEnvironmentEntity(entityParameters: EntityData): EnvironmentEntity {
    return new EnvironmentEntity(entityParameters)
  }
  createObjectEntity(entityParameters: EntityData): ObjectEntity {
    return new ObjectEntity(entityParameters)
  }

}