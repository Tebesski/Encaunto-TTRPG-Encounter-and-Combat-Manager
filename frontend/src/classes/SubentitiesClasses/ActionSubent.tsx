export enum IMPACT_TYPE {
   "SET_BUFF",
   "REMOVE_BUFF",
   "GIVE_RESOURCE",
   "TAKE_RESOURCE",
   "ATTACK",
   "DEFENSE",
   "SET_EMANATION",
   "REMOVE_EMANATION",
   "MODIFY_ATTRIBUTE"
}

export type ActionSubentity = {
   icon: string,
   title: string,
   description: string,
   impact: IMPACT_TYPE,
   impactType: 1,
   link: string,
}