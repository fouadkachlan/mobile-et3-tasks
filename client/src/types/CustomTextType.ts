import { StyleProp, TextStyle, ViewStyle } from "react-native";


export type CustomTextProps =
{
    children : React.ReactNode;
    style: TextStyle,
    fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
    fontSize: number
}