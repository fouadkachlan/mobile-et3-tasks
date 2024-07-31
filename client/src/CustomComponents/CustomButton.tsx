import { View, Text, Button, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import { CustomButtonProps } from '../types/CustomButtonType'

const CustomButton : React.FC<CustomButtonProps>= ({style , children , height , width , onPress}) => {
    const basicStyles  = {
        style,
        height,
        width,
    }
    const finalizedStyles = {
        ...basicStyles,
        ...style as object
    }
  return (
    <TouchableOpacity 
        style={finalizedStyles}
        onPress={onPress}
     >
        <Text>{children}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton