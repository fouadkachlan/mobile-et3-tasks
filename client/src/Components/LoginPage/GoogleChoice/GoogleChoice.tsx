import { Image, Alert } from 'react-native'
import React from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomButton from '../../../CustomComponents/CustomButton'
import CustomText from '../../../CustomComponents/CustomText'
import { googleText } from '../../Constant/constants'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../ThemeContext/ThemeContext'
const googleImage = require('../../../../../assets/google-symbol.png');

const GoogleChoice = () => {
  const {t} = useTranslation()
  const {theme} = useTheme()
  return (
    <CustomView style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
         <CustomButton onPress={() => Alert.alert(t("error"),t("google-choice-not-activated"))} 
         style={{
          backgroundColor: "#808080",
          borderRadius: getDimensionsStore().windowWidth * 0.3,
          justifyContent: 'center',
          alignItems: 'center'
          }} 
          height={getDimensionsStore().windowHeight * 0.1}
          width={getDimensionsStore().windowWidth * 0.9}>
            <CustomView style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Image style={{
              width: getDimensionsStore().windowWidth * 0.1,
              height: getDimensionsStore().windowWidth * 0.1
            }}
            source={googleImage} />
            <CustomText style={{}} fontSize={getDimensionsStore().windowWidth * 0.06} fontWeight='bold'>
              {t("continue-with-google")}
            </CustomText>
            </CustomView>
        </CustomButton>
    </CustomView>
  )
}

export default GoogleChoice

