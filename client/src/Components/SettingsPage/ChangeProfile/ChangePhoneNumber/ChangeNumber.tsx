import React, { useContext } from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomText from '../../../../CustomComponents/CustomText'
import CustomInput from '../../../../CustomComponents/CustomInput'
import getDimensionsStore from '../../../../stores/dimensionsStore'
import { settingsText } from '../../../Constant/constants'
import getLoginStore from '../../../../stores/loginStore'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../../ThemeContext/ThemeContext'
import SubmitChangeNumber from './SubmitChangeNumberButton/SubmitChangeNumber'


const ChangeNumber = observer(() => {
    const {theme} = useTheme()
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
        {settingsText.changeNumber}
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
        value={getLoginStore().user_phone_number.get()}
        onChangeText={getLoginStore().setPhoneNumber}
        placeholderTextColor={theme.fontColor}
        placeholder="Enter new Phone Number"
        keyboardType="default"
        secureTextEntry={false}
      />
      <SubmitChangeNumber />

     </CustomView>
    )
})

export default ChangeNumber