import { View, Text } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react-lite'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import CustomInput from '../../../CustomComponents/CustomInput'
import getDimensionsStore from '../../../stores/dimensionsStore'
import getLoginStore from '../../../stores/loginStore'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../ThemeContext/ThemeContext'
import getThemeStore from '../../../stores/themeStore'

const CreateAccountUsernameInput : React.FC = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation()
    return (
        <CustomView style={{width: getDimensionsStore().windowWidth * 0.9}}>
             <CustomText 
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.01,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.05}
        fontWeight={'500'}
      >
        {t("username")}
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
        value={getLoginStore().user_name.get()}
        onChangeText={(username: string) => getLoginStore().setUsername(username)}
        placeholder="myapp"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType='default'
        secureTextEntry={false}
      />

        </CustomView>
    )
})

export default CreateAccountUsernameInput