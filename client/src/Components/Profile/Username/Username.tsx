import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import { userProfileText } from '../../Constant/constants'
import getLoginStore from '../../../stores/loginStore'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import { observer } from 'mobx-react-lite'

const Username = observer(() => {
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
      {userProfileText.username} {getLoginStore().user_name.get()}
    </CustomText>
  </CustomView>
  )
})

export default Username