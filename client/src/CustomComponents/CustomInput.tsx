import { View, Text, StyleProp, TextInput, TextStyle } from 'react-native'
import React from 'react'
import { CustomInputProps } from '../types/CustomInputProps'

const CustomInput : React.FC<CustomInputProps>= ({value , height , margin , marginRight , borderRadius , borderWidth , padding , onChangeText , placeholderTextColor , placeholder , style , keyboardType , secureTextEntry }) => {

    const basicStyles : StyleProp<TextStyle>= {
        height,
        margin,
        marginRight,
        borderRadius,
        borderWidth,
        padding,
        ...style 
    }

    const finalizedStyles = {
        ...basicStyles,...style as object
    }
    
  return (
    <TextInput
        style={finalizedStyles}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
    />

  )
}

export default CustomInput

