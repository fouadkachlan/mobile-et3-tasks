import { TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import CustomText from '../../../../CustomComponents/CustomText'
import CustomView from '../../../../CustomComponents/CustomView'
import { settingsText } from '../../../Constant/constants'
import getNavigationStore from '../../../../stores/navigationStore'
import { useTheme } from '../../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

const ChangeCountryButton = () => {
    const {theme} = useTheme();
    const {t} = useTranslation()
  return (
    <TouchableOpacity onPress={() => getNavigationStore().navigateToChangeCountry()}>
        <CustomView
        style={{
          display: 'flex',
          height: getDimensionsStore().windowHeight * 0.15,
          justifyContent: 'center',
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: theme.fontColor,
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
          {t("changeCountry")}
        </CustomText>
      </CustomView>
    </TouchableOpacity>
  )
}

export default ChangeCountryButton