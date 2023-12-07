import { EntityData, ENTITY_TYPE } from "../classes/EntitiesClasses/EntityCreator";
import { IMPACT_TYPE } from "../classes/SubentitiesClasses/ActionSubent";

   export function gatherUserEntityDataInput () {

      const userEntityDataInput: EntityData = {
         entityName: "Test Creature",
         entityId: 1,
         entityType: ENTITY_TYPE.CREATURE,
         isEmanating: false,
         hasActions: true,
         hasBuffs: false,
         hasResources: false,
         hasAttributes: true,
         
         resources: null,
         emanations: null,
         buffs: null,
         actions: [
            {
               icon: "link",
               title: "test title",
               description: "test descr",
               impact: IMPACT_TYPE.ATTACK,
               impactType: 1,
               link: "test creature",
            }
         ],
         attributes: [
            {
               title: "Attributes",
               description: "Creature name",
               hp: {
                  hpIcon: "link",
                  maxHp: 10,
                  currentHp: 9,
                  hpIsModified: false,
                  userHpFields: null
               },
               defense: {
                  defenseIcon: "link",
                  maxdefense: 10,
                  currentdefense: 10,
                  defenseIsModified: false,
                  userdefenseFields: null,
               },
               speed: {
                  speedIcon: "link",
                  maxSpeed: 10,
                  currentSpeed: 10,
                  speedIsModified: false,
                  userSpeedFields: null,
               },
               userFields: null
            }
         ]
      }

      return userEntityDataInput;
   }