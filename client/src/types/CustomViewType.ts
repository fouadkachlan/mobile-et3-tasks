import { ReactNode } from "react"
import { StyleProp, ViewStyle } from "react-native";

export type CustomViewProps = 
{
    children :ReactNode;
    style : StyleProp<ViewStyle>;
}