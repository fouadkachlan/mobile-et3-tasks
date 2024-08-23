import { View, Text } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react-lite'
import CustomView from '../../../CustomComponents/CustomView'
import CustomButton from '../../../CustomComponents/CustomButton'
import getDimensionsStore from '../../../stores/dimensionsStore'
import CustomText from '../../../CustomComponents/CustomText'
import getLoginStore from '../../../stores/loginStore'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../ThemeContext/ThemeContext'

const SignUpButton :React.FC = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation();
    return (
        <CustomView 
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <CustomButton
          onPress={getLoginStore().handleCreateAccountPress}
          style={{
            backgroundColor: theme.borderColor,
            borderRadius: 30,
          }}
          height={getDimensionsStore().windowHeight * 0.08}
          width={getDimensionsStore().windowWidth * 0.9}
        >
          <CustomView style={{ justifyContent: 'center', alignItems: 'center'  }}>
            <CustomText
              style={{
                color: 'black',
                marginLeft: getDimensionsStore().windowWidth * 0.36,
                marginTop: getDimensionsStore().windowWidth * 0.05
                
              }}
              fontSize={getDimensionsStore().windowWidth * 0.05}
              fontWeight='300'
            >
              {t("sign-up")}
            </CustomText>
          </CustomView>
        </CustomButton>
      </CustomView>
    )
})

export default SignUpButton