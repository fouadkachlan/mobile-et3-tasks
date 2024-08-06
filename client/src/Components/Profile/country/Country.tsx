import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { userProfileText } from '../../Constant/constants'
import getLoginStore from '../../../stores/loginStore'
import { ThemeContext } from '../../ThemeContext/ThemeContext'

const Country = observer(() => {
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
          {userProfileText.userCountry} {getLoginStore().user_country.get()}
        </CustomText>
      </CustomView>
    )
})

export default Country