import React, { useContext } from 'react'
import CustomView from '../../../../../CustomComponents/CustomView'
import CustomText from '../../../../../CustomComponents/CustomText'
import CustomButton from '../../../../../CustomComponents/CustomButton'
import { ThemeContext } from '../../../../ThemeContext/ThemeContext'
import { changeProfile, submitText } from '../../../../Constant/constants'
import getLoginStore from '../../../../../stores/loginStore'
import { Alert } from 'react-native'
import getNavigationStore from '../../../../../stores/navigationStore'
submitText
const ChangeCountrySubmitButton = () => {
    const {theme} = useContext(ThemeContext);
    const handleChangeEmail = async () : Promise<void> => {
        try 
        {
             getLoginStore().handleCountryChange();
             getNavigationStore().navigateToUserProfile();
        } catch ( error ) {
            console.error(changeProfile.Fail);
            Alert.alert(changeProfile.Fail.toString());
        }
        }
  return (
    <CustomView 
          style={{}}
        >
            <CustomButton onPress={handleChangeEmail}
                style={{
                  backgroundColor: theme.borderColor,
                  marginBottom :'30%' ,
                  borderRadius: 30
                }}
                height={60}
                width={350}
                
            >
                <CustomView 
                    style={{
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center'
                    }}
                >
                    <CustomText
                        style={{
                          
                          color: theme.backGroundColor,
                          marginTop:15,
                          marginLeft:135
                        }}
                        fontSize={20}
                        fontWeight='300'
                    >{submitText}</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
  )
}

export default ChangeCountrySubmitButton