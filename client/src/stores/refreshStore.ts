import { observable, runInAction } from "mobx";
import React from "react";

class RefreshStore
{
    refresh = observable.box<boolean>(false);
    toggleRefresh = () => {
        runInAction(() => {
            this.refresh.set(!this.refresh.get());
        })
    }
    setRefreshToTrue = () => {
        runInAction(() => {
            this.refresh.set(true);
        })
    }
    setRefreshToFalse = () => {
        runInAction(() => {
            this.refresh.set(false);
        })
    }

}
const refreshStore = new RefreshStore();
export const getRefreshStore = () => refreshStore;
export default getRefreshStore;