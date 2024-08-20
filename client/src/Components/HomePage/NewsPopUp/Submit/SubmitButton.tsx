import { Alert } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomButton from '../../../../CustomComponents/CustomButton'
import { submitText } from '../../../Constant/constants'
import CustomText from '../../../../CustomComponents/CustomText'
import getNewsStore from '../../../../stores/newsStore';
import getLoginStore from '../../../../stores/loginStore'
import {NewsItem} from "../../../../types/NewsItem"
import getRequestStore from '../../../../stores/requestsStore'
import { observer } from 'mobx-react-lite'
import getNavigationStore from '../../../../stores/navigationStore'
import { useTheme } from '../../../ThemeContext/ThemeContext'

const SubmitButton = observer(() => {
    const {theme} = useTheme();
    
  return (
    <CustomView 
          style={{}}
        >
            <CustomButton onPress={getNewsStore().handleSubmit}
                style={{ 
                        backgroundColor: theme.borderColor,
                        borderRadius: 30,
                        width: 300
                    }}
                height={60}
                width={400}
                
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
                            color: 'black',
                            marginTop:15,
                            marginLeft:115
                        }}
                        fontSize={20}
                        fontWeight='300'
                    >{submitText}</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
  )
})

export default SubmitButton