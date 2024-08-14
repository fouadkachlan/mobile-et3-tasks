import React, { useContext } from 'react'
import CustomButton from '../../../../CustomComponents/CustomButton'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomText from '../../../../CustomComponents/CustomText'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import { submitText } from '../../../Constant/constants'

const SubmitForgotButton = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <CustomView 
          style={{
            paddingBottom:0,
            marginLeft:5
          }}
        >
            <CustomButton 
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

export default SubmitForgotButton