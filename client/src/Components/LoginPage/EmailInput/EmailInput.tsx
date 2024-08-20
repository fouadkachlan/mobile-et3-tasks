import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import CustomInput from '../../../CustomComponents/CustomInput'
import { emailAddressText } from '../../Constant/constants'
import getLoginStore from '../../../stores/loginStore'
import getThemeStore from '../../../stores/themeStore'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'

const EmailInput : React.FC = observer(() => {
    const {theme} = useTheme();
    return (
        <CustomView style={{}}>
        <CustomText
        style={{
          color: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth * 0.1,
          marginTop: getDimensionsStore().windowHeight * 0.05,
        }}
        fontSize={20}
        fontWeight={'500'}
      >
        {emailAddressText}
      </CustomText>

      <CustomInput
        style={{
          borderColor: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth  * 0.1,
          marginVertical: getDimensionsStore().windowHeight * 0.01,
          borderRadius: 10,
          borderWidth: 2,
          padding: 10,
        }}
        height={50}
        value={getLoginStore().user_email.get()}
        onChangeText={getLoginStore().setEmail}
        placeholder="hello@example.com"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? 'white' : 'black'}
        keyboardType="email-address"
        secureTextEntry={false}
      />
    </CustomView>
    )
})


export default EmailInput