import React from 'react'
import { observer } from 'mobx-react-lite'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import getLoginStore from '../../../stores/loginStore'
import getThemeStore from '../../../stores/themeStore'
import CustomInput from '../../../CustomComponents/CustomInput'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

const CreateAccountNumberAndCountryInput :React.FC = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation();
    return (
        <CustomView style={{}}>
            <CustomView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: getDimensionsStore().windowHeight  * 0.01,
        }}
      >
        <CustomText
          style={{
            color: theme.fontColor,
          }}
          fontSize={getDimensionsStore().windowWidth * 0.05}
          fontWeight={'500'}
        >
          {t("country")}
        </CustomText>

        <CustomText 
          style={{
            color: theme.fontColor,
            marginRight : getDimensionsStore().windowWidth * 0.1
          }}
          fontSize={getDimensionsStore().windowWidth * 0.05}
          fontWeight={'500'}
        >
          {t("phone-number")}
        </CustomText>
      </CustomView>
      <CustomView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: getDimensionsStore().windowHeight  * 0.03,
      }}
    >
      <CustomInput 
        style={{
          width: '48%',
          borderColor: theme.borderColor,
          borderRadius: 10,
          borderWidth: 2,
          padding: getDimensionsStore().windowWidth * 0.02,
        }}
        height={getDimensionsStore().windowHeight  * 0.06}
        placeholder="example: Lebanon"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        value={getLoginStore().user_country.get()}
        onChangeText={(country: string) => getLoginStore().setUserCountry(country)}
        keyboardType="default"
        secureTextEntry={false}
      />

      <CustomInput 
        style={{
          width: '48%',
          borderColor: theme.borderColor,
          borderRadius: 10,
          borderWidth: 2,
          padding: getDimensionsStore().windowWidth * 0.02,
        }}
        height={getDimensionsStore().windowHeight  * 0.06}
        placeholder="+961-XXX-XXX => "
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        value={getLoginStore().user_phone_number.get()}
        onChangeText={(number: string) => getLoginStore().setPhoneNumber(number)}
        keyboardType="number-pad"
        secureTextEntry={false}
      />
    </CustomView>
        </CustomView>
    )
})

export default CreateAccountNumberAndCountryInput