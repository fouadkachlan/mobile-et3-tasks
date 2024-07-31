import { KeyboardTypeOptions, ViewStyle } from "react-native";


export type CustomInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    height: number | 50;
    margin: number | 12;
    marginRight: number | 30;
    borderRadius: number | 10;
    borderWidth: number | 1;
    padding:number | 10;
    placeholder: string;
    placeholderTextColor?: string;
    style: ViewStyle;
    keyboardType:  'default' | 'email-address' | 'numeric' | 'phone-pad' | 'password '| KeyboardTypeOptions  ;
    secureTextEntry: boolean;
}
