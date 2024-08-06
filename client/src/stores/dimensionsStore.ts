import { Dimensions } from "react-native";



class DimensionStore {
    windowWidth : number = Dimensions.get("window").width;
    windowHeight : number =Dimensions.get("window").height;
}






const dimensionsStore = new DimensionStore();
export const getDimensionsStore = () => dimensionsStore;
export default getDimensionsStore;