import React, { useContext } from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomText from '../../../../CustomComponents/CustomText'
import CustomInput from '../../../../CustomComponents/CustomInput'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import { settingsText } from '../../../Constant/constants'
import getLoginStore from '../../../../stores/loginStore'
import { observer } from 'mobx-react-lite'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import ChangeCountrySubmitButton from './ChangeCountrySubmitButton/ChangeCountrySubmitButton'


const ChangeCountry = observer(() => {
    const {theme} = useContext(ThemeContext)
    return (
        <CustomView
      style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.backGroundColor,
        }}
    >
      <CustomText
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowWidth * 0.05,
        }}
        fontSize={25}
        fontWeight={'bold'}
      >
        {settingsText.changeCountry}
      </CustomText>


      <CustomInput
        style={{
          borderColor: theme.fontColor,
          width: getDimensionsStore().windowWidth * 0.8,
          maxWidth: 400,
          marginBottom: 30,
        }}
        height={getDimensionsStore().windowHeight * 0.1}
        borderRadius={8}
        borderWidth={2}
        padding={10}
        value={getLoginStore().user_country.get()}
        onChangeText={getLoginStore().setUserCountry}
        placeholderTextColor={theme.fontColor}
        placeholder="Enter new Country"
        keyboardType="default"
        secureTextEntry={false}
      />
        <ChangeCountrySubmitButton />
     </CustomView>
    )
})

export default ChangeCountry