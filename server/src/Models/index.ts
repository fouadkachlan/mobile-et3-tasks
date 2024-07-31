import {userSignUp} from "./userInsert";
import {newsModel} from './newsModel';
import { userUpdateModels } from "./userUpdate";
import { getUserModel } from "./userSelect";
export const userModels = {
    insert : userSignUp,
    update: userUpdateModels,
    select : getUserModel
}