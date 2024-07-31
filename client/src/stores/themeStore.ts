import {observable, runInAction} from "mobx";

class ThemeStore {
    isDarkThemeEnabled = observable.box<boolean>(false);

    
    toggoleTheme = () => {
        runInAction(() => {
            this.isDarkThemeEnabled.set(!this.isDarkThemeEnabled.get());
        })
    }
    setThemeEnabled(value : boolean) {
        runInAction(() => {
            this.isDarkThemeEnabled.set(value);
        })
    }
}

const themeStore = new ThemeStore();
export const getThemeStore = () => themeStore;
export default getThemeStore;
