import {TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import getDimensionsStore from '../../../stores/dimensionsStore'
import CustomText from '../../../CustomComponents/CustomText'
import getNavigationStore from '../../../stores/navigationStore'
import { createAccountText } from '../../Constant/constants'
import { useTheme } from '../../ThemeContext/ThemeContext'
const CreateAccountChoice : React.FC = () => {
    const {theme} = useTheme();
  return (
    <CustomView style={{}}>
        <TouchableOpacity onPress={() => getNavigationStore().navigateToCreateAccount()}>
        <CustomView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: getDimensionsStore().windowHeight * 0.05,
          }}
        >
          <CustomText
            style={{
              color: theme.fontColor,
              paddingBottom: getDimensionsStore().windowWidth * 0.015
            }}
            fontSize={16}
            fontWeight="500"
          >
            {createAccountText.createAccountMessage}
          </CustomText>
        </CustomView>
      </TouchableOpacity>
    </CustomView>
  )
}

export default CreateAccountChoice