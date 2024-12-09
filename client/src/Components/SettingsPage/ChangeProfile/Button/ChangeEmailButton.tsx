import { TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import CustomText from '../../../../CustomComponents/CustomText'
import CustomView from '../../../../CustomComponents/CustomView'
import { settingsText } from '../../../Constant/constants'
import { useTheme } from '../../../ThemeContext/ThemeContext'
import getNavigationStore from '../../../../stores/navigationStore'
import { useTranslation } from 'react-i18next'

const ChangeEmailButton = () => {
    const {theme} = useTheme()
    const {t} = useTranslation()
  return (
    <TouchableOpacity  onPress={() => getNavigationStore().navigateToChangeEmail()}>
        <CustomView
        style={{
          display: 'flex',
          height: getDimensionsStore().windowHeight * 0.15,
          justifyContent: 'center',
          alignItems : 'center',
          borderWidth: 2,
          borderColor: theme.fontColor,
          borderRadius : getDimensionsStore().windowWidth * 0.1,
          margin: getDimensionsStore().windowWidth * 0.025,
          width: getDimensionsStore().windowWidth * 0.9,
        }}
      >
        <CustomText style={{
            color: theme.fontColor
            }}
            fontSize={20}
            fontWeight="300">
          {t("changeEmail")}
        </CustomText>
      </CustomView>
    </TouchableOpacity>
  )
}

export default ChangeEmailButton