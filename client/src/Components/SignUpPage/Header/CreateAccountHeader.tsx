import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { createAccountText, welcomingMessage } from '../../Constant/constants'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

const CreateAccountHeader = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation();
  return (
    <CustomView style = {{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <CustomText 
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.02,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.1}
        fontWeight={'bold'}
      >
        {t("sign-up")}
      </CustomText>

      <CustomText
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.02,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.05}
        fontWeight={'400'}
      >
        {t("welcome-to-the-app")}
      </CustomText>
    </CustomView>

  )
})

export default CreateAccountHeader