import { IMPACT_TYPE } from "./ActionSubent"

export type EmanationSubentity = {
   icon: string,
   title: string,
   description: string,
   duration: number,
   distance: number,
   impact: IMPACT_TYPE,
   link: string,
}