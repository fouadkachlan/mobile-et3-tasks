import React, { useContext } from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomText from '../../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import { settingsText } from '../../../Constant/constants'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import { TouchableOpacity } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../../types/navigation'

const ChangeProfileButton = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const {theme} = useContext(ThemeContext);
    const handleProfileChange = () => {
        navigation.navigate("ChangeProfile" , "ChangeProfile")
    }
  return (
    <TouchableOpacity onPress={handleProfileChange}>
        <CustomView
        style={{
          display: 'flex',
          height: getDimensionsStore().windowHeight * 0.15,
          justifyContent: 'center',
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: theme.borderColor,
          borderRadius : getDimensionsStore().windowWidth * 0.1,
          margin: getDimensionsStore().windowWidth * 0.025
        }}
      >
        <CustomText style={{
            marginTop: getDimensionsStore().windowWidth * 0.1,
            marginLeft: 10,
            color: theme.fontColor
            }}
            fontSize={20}
            fontWeight="300">
          {settingsText.changeProfile}
        </CustomText>
      </CustomView>
    </TouchableOpacity>
  )
}

export default ChangeProfileButton