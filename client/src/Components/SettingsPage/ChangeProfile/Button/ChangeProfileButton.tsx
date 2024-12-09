import React, { useContext } from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomText from '../../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import { settingsText } from '../../../Constant/constants'
import {useTheme } from '../../../ThemeContext/ThemeContext'
import { TouchableOpacity } from 'react-native'
import getNavigationStore from '../../../../stores/navigationStore'
import { useTranslation } from 'react-i18next'

const ChangeProfileButton = () => {
    const {theme} = useTheme();
    const {t} = useTranslation();
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
          alignItems: 'center',
          borderWidth: 2,
          borderColor: theme.fontColor,
          borderRadius : getDimensionsStore().windowWidth * 0.1,
          margin: getDimensionsStore().windowWidth * 0.05
        }}
      >
        <CustomText style={{
            color: theme.fontColor
            }}
            fontSize={20}
            fontWeight="300">
          {t("change-profile")}
        </CustomText>
      </CustomView>
    </TouchableOpacity>
  )
}

export default ChangeProfileButton