import {observable, runInAction} from "mobx";

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
}

const themeStore = new ThemeStore();
export const getThemeStore = () => themeStore;
export default getThemeStore;
