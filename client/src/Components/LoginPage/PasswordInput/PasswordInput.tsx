import { TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import getDimensionsStore from '../../../stores/dimensionsStore'
import getLoginStore from '../../../stores/loginStore'
import CustomText from '../../../CustomComponents/CustomText'
import { createAccountText, forgotPasswordMessage } from '../../Constant/constants'
import CustomInput from '../../../CustomComponents/CustomInput'
import getNavigationStore from '../../../stores/navigationStore'
import getThemeStore from '../../../stores/themeStore'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

const PasswordInput : React.FC = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation();
    return (
        <CustomView style={{}}>
        <CustomText
        style={{
          color: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth  * 0.1,
          marginTop: getDimensionsStore().windowHeight * 0.02,
        }}
        fontSize={20}
        fontWeight={'500'}
      >
        {t("password")}
      </CustomText>

      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: getDimensionsStore().windowWidth  * 0.1,
        }}
      >
        <TouchableOpacity onPress={() => getNavigationStore().navigateToForgotPassword()}>
          <CustomText
            style={{
              color: theme.fontColor,
            }}
            fontSize={16}
            fontWeight="500"
          >
            {t("forgot-pass")}?
          </CustomText>
        </TouchableOpacity>
      </CustomView>

      <CustomInput
        style={{
          borderColor: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth  * 0.1,
          marginVertical: getDimensionsStore().windowHeight * 0.01,
          borderRadius: 10,
          borderWidth: 2,
          padding: 10,
          marginBottom: getDimensionsStore().windowHeight * 0.05,
        }}
        height={50}
        value={getLoginStore().user_password.get()}
        onChangeText={getLoginStore().setPassword}
        placeholder="*********"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? 'white' : 'black'}
        keyboardType="default"
        secureTextEntry={true}
      />

    </CustomView>
    )
})

export default PasswordInput