import {Alert } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomButton from '../../../CustomComponents/CustomButton'
import getDimensionsStore from '../../../stores/dimensionsStore'
import getLoginStore from '../../../stores/loginStore'
import { loginMessage } from '../../Constant/constants'
import CustomText from '../../../CustomComponents/CustomText'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'

const LoginButton : React.FC = observer(() => {
    const {theme} = useTheme();
    
  return (
    <CustomView style={{}}>
        <CustomView
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: getDimensionsStore().windowHeight * 0.05,
        }}
      >
        <CustomButton
          onPress={getLoginStore().handleLoginPress}
          style={{
            backgroundColor: theme.borderColor,
            borderRadius: 30,
          }}
          height={60}
          width={getDimensionsStore().windowWidth  * 0.85}
        >
          <CustomView style={{
            display : 'flex' ,
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <CustomText
              style={{
                color: 'black',
                textAlign: 'center',
                marginTop:20,
                marginLeft: getDimensionsStore().windowWidth * 0.3333


              }}
              fontSize={20}
              fontWeight="300"
            >
              {loginMessage}
            </CustomText>
          </CustomView>
        </CustomButton>
      </CustomView>
    </CustomView>
  )
})

export default LoginButton

