import { IMPACT_TYPE } from "./ActionSubent"

export type ResourceSubentity = {
   icon: string,
   description: string,
   amount: number | null,
   link: string,
   impact: IMPACT_TYPE,
}