import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { createAccountText, welcomingMessage } from '../../Constant/constants'
import { observer } from 'mobx-react-lite'
import { useTheme } from '../../ThemeContext/ThemeContext'

const CreateAccountHeader = observer(() => {
    const {theme} = useTheme();
  return (
    <CustomView style = {{}}>
        <CustomText 
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.02,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.1}
        fontWeight={'bold'}
      >
        {createAccountText.signUp}
      </CustomText>

      <CustomText
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.02,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.05}
        fontWeight={'400'}
      >
        {welcomingMessage}
      </CustomText>
    </CustomView>

  )
})

export default CreateAccountHeader