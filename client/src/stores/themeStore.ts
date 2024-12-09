import {observable, runInAction} from "mobx";
import { mmkv } from "../Components/MmkvStorage/mmkv";

class ThemeStore {
    isDarkThemeEnabled = observable.box<boolean>(false);
    theme = observable.box<"dark" | "light">("light");


    
    toggleTheme = () => {
        runInAction(() => {
            const currentValue = this.isDarkThemeEnabled.get();
            this.isDarkThemeEnabled.set(!currentValue);
            this.theme.set(!currentValue ? 'dark' : 'light')
        })
    }
    setThemeEnabled = (value : 'dark' | 'light' )  : ("dark" | "light") => {
        return runInAction(() => {
            this.isDarkThemeEnabled.set(this.isDarkThemeEnabled.get());
            this.theme.set(value);
            return this.theme.get();
        });
    }
    get themeMode() {
        return this.isDarkThemeEnabled.get() ? "dark" : "light";
    }
    toggleSettingsSwitch = () => {    
        const currentValue = getThemeStore().isDarkThemeEnabled.get();
        const newValue = !currentValue;
        getThemeStore().toggleTheme()
        console.log('Toggling switch:', newValue);
        getThemeStore().setThemeEnabled(newValue ? 'dark' : 'light');
        mmkv.set('themeEnabled', newValue);
        console.log('Stored themeEnabled:', mmkv.getBoolean('themeEnabled'));
    };
}

const themeStore = new ThemeStore();
export const getThemeStore = () => themeStore;
export default getThemeStore;
