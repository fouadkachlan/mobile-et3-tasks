import React from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomButton from '../../../CustomComponents/CustomButton'
import getDimensionsStore from '../../../stores/dimensionsStore'
import CustomText from '../../../CustomComponents/CustomText'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'
import getNavigationStore from '../../../stores/navigationStore'

const WelcomingLoginButton : React.FC = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation()
  return (
    <CustomView style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: getDimensionsStore().windowWidth * 0.1

    }}>
        <CustomButton onPress={() =>getNavigationStore().navigateToLogin()} style={{
          backgroundColor: theme.borderColor,
          borderRadius: getDimensionsStore().windowWidth * 0.3,
          justifyContent: 'center',
          alignItems: 'center'
          }} 
          height={getDimensionsStore().windowHeight * 0.1}
          width={getDimensionsStore().windowWidth * 0.9}>
            <CustomText style={{}} fontSize={20} fontWeight='bold'>
              {t("login")}
            </CustomText>
        </CustomButton>
    </CustomView>
  )
})

export default WelcomingLoginButton

