import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import getLoginStore from '../../../stores/loginStore'
import { userProfileText } from '../../Constant/constants'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'
const Email = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation()
  return (
    <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height:  getDimensionsStore().windowHeight * 0.07,
          borderWidth: 2,
          borderColor: theme.borderColor,
          margin: getDimensionsStore().windowWidth * 0.05,
        }}
      >
        <CustomText
          style={{
            color: theme.fontColor,
          }}
          fontSize={15}
          fontWeight="300"
        >
          {t("email")} {getLoginStore().user_email.get()}
        </CustomText>
      </CustomView>

  )
})

export default Email