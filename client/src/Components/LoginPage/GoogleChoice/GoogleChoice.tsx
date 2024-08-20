import { Image, Alert } from 'react-native'
import React from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomButton from '../../../CustomComponents/CustomButton'
import CustomText from '../../../CustomComponents/CustomText'
import { googleText } from '../../Constant/constants'
import getDimensionsStore from '../../../stores/dimensionsStore'
const googleImage = require('../../../../../assets/google-symbol.png');

const GoogleChoice = () => {
  return (
    <CustomView style={{}}>
         <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomButton
          onPress={() => {
            Alert.alert(googleText.Fail.googleNotActivated);
          }}
          style={{
            backgroundColor: 'grey',
            borderRadius: 30,
          }}
          height={60}
          width={getDimensionsStore().windowWidth  * 0.85}
        >
          <CustomView style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft : getDimensionsStore().windowWidth * 0.03
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
                marginRight: getDimensionsStore().windowWidth  * 0.05,
                marginTop: getDimensionsStore().windowWidth * 0.01
              }}
              source={googleImage}
            />
            <CustomText
              style={{
                color: 'white',
                marginLeft: getDimensionsStore().windowWidth * 0.1,
                marginTop: getDimensionsStore().windowWidth * 0.040
                
              }}
              fontSize={17}
              fontWeight="300"
            >
              Continue With Google
            </CustomText>
          </CustomView>
        </CustomButton>
      </CustomView>
    </CustomView>
  )
}

export default GoogleChoice