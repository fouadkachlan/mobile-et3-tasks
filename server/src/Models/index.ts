import {userInsert} from "./userModels/userInsert";
import { userUpdateModels } from "./userModels/userUpdate";
import {userSelect} from "./userModels/userSelect";
export const userModels = {
    insert : userInsert,
    update: userUpdateModels,
    select : userSelect
}