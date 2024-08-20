import React, { useContext } from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomText from '../../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import { settingsText } from '../../../Constant/constants'
import {useTheme } from '../../../ThemeContext/ThemeContext'
import { TouchableOpacity } from 'react-native'
import getNavigationStore from '../../../../stores/navigationStore'

const ChangeProfileButton = () => {
    const {theme} = useTheme();
    const handleProfileChange = () => {
        getNavigationStore().navigateToChangeProfile()
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