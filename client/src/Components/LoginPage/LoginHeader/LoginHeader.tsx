import React, { useContext } from 'react'
import CustomView from "../../../CustomComponents/CustomView"
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { loginMessage, welcomingMessage } from '../../Constant/constants'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

const LoginHeader : React.FC = () => {
  const {theme} = useTheme();
  const {t} = useTranslation()
  return (
    <CustomView style={{}}>
       <CustomText
        style={{
          color: theme.fontColor,
          textAlign: 'center',
          marginBottom: getDimensionsStore().windowHeight * 0.02,//noted
        }}
        fontSize={50}
        fontWeight={'bold'}
      >
        {t("login")}
      </CustomText>

      <CustomText
        style={{
          color: theme.fontColor,
          textAlign: 'center',
        }}
        fontSize={20}
        fontWeight={'400'}
      >
        {t("welcome-to-the-app")}
      </CustomText>

    </CustomView>
  )
}

export default LoginHeader