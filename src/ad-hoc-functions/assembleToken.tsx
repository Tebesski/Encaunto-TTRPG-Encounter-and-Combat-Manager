import FieldTokenComponent from "../components/TokenComponents/FieldTokenComponent/FieldTokenComponent"
import { TokenData } from "../classes/TokenClasses/TokenCreator";

export function assembleToken(tokenData: TokenData) {
   return (
      <FieldTokenComponent baseTokenData={tokenData} />
   )
}