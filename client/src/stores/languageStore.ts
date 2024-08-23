import { observable, runInAction } from "mobx";
import i18next from '../../../services/i18next';
import { run } from "jest";

class LanguageStore
{
    isLanguageModalVisible = observable.box<boolean>(false);
    language = observable.box<string>("en");
    setLanguage = (language : string) => {
        runInAction(() => {
            this.language.set(language);
        })
    }

    getLanguage = ()  => {
        runInAction(() => {
          this.language.get();
        })
    }
    setIsLanguageModalVisibleToTrue(){
        runInAction(() => {
            this.isLanguageModalVisible.set(true);
        })
    }
    setIsLanguageModalVisibleToFalse(){
        runInAction(() => {
            this.isLanguageModalVisible.set(false);
        })
    }
    changeLng = (lng : string) => {
        i18next.changeLanguage(lng)
        this.setIsLanguageModalVisibleToFalse();
      };
}
const languageStore = new LanguageStore();
export const getLanguageStore = () => languageStore;
export default getLanguageStore;