import { View, Text } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react-lite'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import CustomInput from '../../../CustomComponents/CustomInput'
import getLoginStore from '../../../stores/loginStore'
import getThemeStore from '../../../stores/themeStore'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

const CreateAccountEmailInput: React.FC= observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation()
    return (
        <CustomView style={{width: getDimensionsStore().windowWidth * 0.9}}>
            <CustomText
        style={{
          color: theme.fontColor,
          marginTop: getDimensionsStore().windowHeight  * 0.02,
          marginBottom: getDimensionsStore().windowHeight  * 0.01,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.05}
        fontWeight={'500'}
      >
        {t("email")}
      </CustomText>

      <CustomInput
        style={{
          width: '100%',
          borderColor: theme.borderColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.02,
          borderRadius: 10,
          borderWidth: 2,
          padding: getDimensionsStore().windowWidth * 0.02,
        }}
        height={getDimensionsStore().windowHeight  * 0.06}
        value={getLoginStore().user_email.get()}
        onChangeText={(email: string) => getLoginStore().setEmail(email)}
        placeholder="hello@example.com"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType="email-address"
        secureTextEntry={false}
      />
        </CustomView>
    )
})

export default CreateAccountEmailInput