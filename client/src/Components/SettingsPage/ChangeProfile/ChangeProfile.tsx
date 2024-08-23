import React from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import getDimensionsStore from '../../../stores/dimensionsStore'
import {  useTheme } from '../../ThemeContext/ThemeContext'
import ChangeUserNameButton from './Button/ChangeUserNameButton'
import ChangeEmailButton from './Button/ChangeEmailButton'
import ChangeCountryButton from './Button/ChangeCountryButton'
import ChangePhoneNumberButton from './Button/ChangePhoneNumberButton'
import CustomText from '../../../CustomComponents/CustomText'
import { useTranslation } from 'react-i18next'

const ChangeProfile = () => {
    const {theme} = useTheme();
    const {t} = useTranslation();
  return (
    <CustomView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: getDimensionsStore().windowHeight ,
        width: getDimensionsStore().windowWidth ,
        backgroundColor: theme.backGroundColor,
      }}>
        <CustomText style={{
            color: theme.fontColor,
        }} fontSize={30} fontWeight='bold'>
           {t("change-profile")}
        </CustomText>
        <ChangeUserNameButton />
        <ChangeEmailButton />
        <ChangeCountryButton />
        <ChangePhoneNumberButton />
    </CustomView>
  )
}

export default ChangeProfile