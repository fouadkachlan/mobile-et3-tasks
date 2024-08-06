import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import getDimensionsStore from '../../../stores/dimensionsStore'
import getLoginStore from '../../../stores/loginStore'
import CustomText from '../../../CustomComponents/CustomText'
import CustomView from '../../../CustomComponents/CustomView'
import { userProfileText } from '../../Constant/constants'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import { observer } from 'mobx-react-lite'

const PhoneNumber = observer(() => {
    const {theme} = useContext(ThemeContext);
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
          {userProfileText.phoneNumber} {getLoginStore().user_phone_number.get()}
        </CustomText>
      </CustomView>
  )
})

export default PhoneNumber