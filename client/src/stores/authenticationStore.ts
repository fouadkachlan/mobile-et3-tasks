import {observable, runInAction} from "mobx";
import {MMKV} from "react-native-mmkv";
 

const mmkvAuth = new MMKV();

class AuthStore {
    isAuthenticated = observable.box<boolean>(false);
    token = observable.box<string>('')
    checkAuthorization = () => {
        runInAction(() => {
            const token = mmkvAuth.getString("authToken");
            if (token) {
                this.isAuthenticated.set(true);
            }
        })
    };
    login = (token : string) => {
        runInAction(() => {
            mmkvAuth.set("authToken", token);
            this.isAuthenticated.set(true);
        })
    };
    logout = () => {
        runInAction(() => {
            mmkvAuth.delete("authToken");
            this.isAuthenticated.set(false);
        })
    }
}

const authStore = new AuthStore();
export const getAuthStore = () => authStore;
export default getAuthStore;

