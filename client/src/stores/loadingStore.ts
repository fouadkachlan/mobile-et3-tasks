import { observable, runInAction } from "mobx";
class LoadingStore
{
    loading = observable.box<boolean>(false);
    setLoadingToFalse = () => {
        runInAction(() => {
            this.loading.set(false)
        })
    }
    setLoadingToTrue = () => {
        runInAction(() => {
            this.loading.set(true)
        })
    }

}


const loadingStore = new LoadingStore();
export const getLoadingStore = () => loadingStore;
export default getLoadingStore;