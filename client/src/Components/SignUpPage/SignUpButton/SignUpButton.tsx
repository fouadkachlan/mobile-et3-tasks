import React from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomButton from '../../../CustomComponents/CustomButton'
import getDimensionsStore from '../../../stores/dimensionsStore'
import getLoginStore from '../../../stores/loginStore'
import CustomText from '../../../CustomComponents/CustomText'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

const SignUpButton : React.FC = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation()
  return (
    <CustomView style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
        <CustomButton onPress={getLoginStore().handleCreateAccountPress} style={{
          backgroundColor: theme.borderColor,
          borderRadius: getDimensionsStore().windowWidth * 0.3,
          justifyContent: 'center',
          alignItems: 'center'
          }} 
          height={getDimensionsStore().windowHeight * 0.1}
          width={getDimensionsStore().windowWidth * 0.9}>
            <CustomText style={{}} fontSize={15} fontWeight='bold'>
              {t("sign-up")}
            </CustomText>
        </CustomButton>
    </CustomView>
  )
})

export default SignUpButton
