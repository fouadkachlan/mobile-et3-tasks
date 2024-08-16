import { TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import CustomText from '../../../../CustomComponents/CustomText'
import CustomView from '../../../../CustomComponents/CustomView'
import { settingsText } from '../../../Constant/constants'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../../types/navigation'

const ChangeEmailButton = () => {
    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity  onPress={() => navigation.navigate("ChangeEmailAddress" , "ChangeEmailAddress") }>
        <CustomView
        style={{
          display: 'flex',
          height: getDimensionsStore().windowHeight * 0.15,
          justifyContent: 'center',
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: theme.borderColor,
          borderRadius : getDimensionsStore().windowWidth * 0.1,
          margin: getDimensionsStore().windowWidth * 0.025,
          width: getDimensionsStore().windowWidth * 0.9,
        }}
      >
        <CustomText style={{
            marginTop: getDimensionsStore().windowWidth * 0.1,
            marginLeft: 10,
            color: theme.fontColor
            }}
            fontSize={20}
            fontWeight="300">
          {settingsText.changeEmail}
        </CustomText>
      </CustomView>
    </TouchableOpacity>
  )
}

export default ChangeEmailButton