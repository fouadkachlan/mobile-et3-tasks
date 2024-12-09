import { KeyboardTypeOptions, ViewStyle } from "react-native";


export type CustomInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    height?: number ;
    margin?: number ;
    marginRight?: number;
    borderRadius?: number ;
    borderWidth?: number;
    padding?:number;
    placeholder?: string;
    placeholderTextColor?: string;
    style?: ViewStyle;
    keyboardType:  KeyboardTypeOptions  ;
    secureTextEntry: boolean;
}
