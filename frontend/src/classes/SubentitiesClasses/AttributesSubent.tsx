export type UserAttributeSuperField = {
   name: string
   value: UserAttributeField[],
}

export type UserAttributeField = {
   icon: string,
   name: string,
   description: string | null,
   value: number | string,
}

export type AttributesSubentity = {
   title: string,
   description: string,
   hp: {
      hpIcon: string,
      maxHp: number,
      currentHp: number,
      hpIsModified: boolean,
      userHpFields: UserAttributeField[] | null,
   },
   defense: {
      defenseIcon: string,
      maxdefense: number,
      currentdefense: number,
      defenseIsModified: boolean,
      userdefenseFields: UserAttributeField[] | null,
   },
   speed: {
      speedIcon: string,
      maxSpeed: number,
      currentSpeed: number,
      speedIsModified: boolean,
      userSpeedFields: UserAttributeField[] | null,
   },
   userFields: UserAttributeField[] | UserAttributeSuperField[] | null
}