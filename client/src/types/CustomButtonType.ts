import { GestureResponderEvent, ViewStyle } from "react-native";

export type CustomButtonProps = {
    children : React.ReactNode;
    style : ViewStyle;
    height : number;
    width : number;
    onPress?: ()=>GestureResponderEvent | string | void | Promise<void> ;
}