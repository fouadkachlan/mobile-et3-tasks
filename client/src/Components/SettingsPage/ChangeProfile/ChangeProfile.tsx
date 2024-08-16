import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../types/navigation'
import ChangeUserNameButton from './Button/ChangeUserNameButton'
import ChangeEmailButton from './Button/ChangeEmailButton'
import ChangeCountryButton from './Button/ChangeCountryButton'
import ChangePhoneNumberButton from './Button/ChangePhoneNumberButton'
import CustomText from '../../../CustomComponents/CustomText'
import { settingsText } from '../../Constant/constants'

const ChangeProfile = () => {
    const {theme} = useContext(ThemeContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const handleProfileChange = () => {
        navigation.navigate("ChangeProfile" , "ChangeProfile")
    }
  return (
    <CustomView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: getDimensionsStore().windowHeight ,
        width: getDimensionsStore().windowWidth ,
        backgroundColor: theme.backGroundColor,
    }}>
        <CustomText style={{
            color: theme.fontColor,
            marginBottom: getDimensionsStore().windowWidth * 0.1
        }} fontSize={30} fontWeight='bold'>
           {settingsText.changeProfile}
        </CustomText>
        <ChangeUserNameButton />
        <ChangeEmailButton />
        <ChangeCountryButton />
        <ChangePhoneNumberButton />
    </CustomView>
  )
}

export default ChangeProfile