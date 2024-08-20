import React, { useContext } from 'react'
import CustomView from "../../../CustomComponents/CustomView"
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { loginMessage, welcomingMessage } from '../../Constant/constants'
import { useTheme } from '../../ThemeContext/ThemeContext'

const LoginHeader : React.FC = () => {
  const {theme} = useTheme();
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
        {loginMessage}
      </CustomText>

      <CustomText
        style={{
          color: theme.fontColor,
          textAlign: 'center',
          marginBottom: getDimensionsStore().windowHeight * 0.05,
        }}
        fontSize={20}
        fontWeight={'400'}
      >
        {welcomingMessage}
      </CustomText>

    </CustomView>
  )
}

export default LoginHeader