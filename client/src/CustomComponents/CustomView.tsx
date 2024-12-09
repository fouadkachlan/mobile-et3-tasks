import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { CustomViewProps } from '../types/CustomViewType'




const CustomView : React.FC<CustomViewProps> = ({children , style}) => {
  const basicStyles : StyleProp<ViewStyle> = {
    margin : 0
  }
  const finalizedStyles  = {
    ...basicStyles ,...style as object
    };
    return (
    <View style={finalizedStyles}>
      {children}
    </View>
  )
}

export default CustomView