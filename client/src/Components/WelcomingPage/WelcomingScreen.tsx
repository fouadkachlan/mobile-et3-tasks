import React, { useContext } from 'react';
import { Image, ActivityIndicator, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { observer } from 'mobx-react-lite';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomText from '../../CustomComponents/CustomText';
import CustomView from '../../CustomComponents/CustomView';
import { createAccountText, firstWelcoming, introducingNewsReaderApp, loginMessage } from '../Constant/constants';
import getDimensionsStore from '../../stores/dimensionsStore';
import getNavigationStore from '../../stores/navigationStore';
import { useTheme } from '../ThemeContext/ThemeContext';
import { useTranslation } from 'react-i18next';

const welcomingImage = require("../../../../assets/welcome.png");


const WelcomingScreen: React.FC = observer(() => {
  
  const {theme} = useTheme();
  const {t} = useTranslation()

  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backGroundColor,
      }}
    >
      <Image
        style={{
          width: getDimensionsStore().windowWidth * 0.8,
          height: getDimensionsStore().windowHeight  * 0.3,
          borderRadius: (getDimensionsStore().windowWidth * 0.8) / 2,
        }}
        source={welcomingImage}
      />
      <CustomView
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: getDimensionsStore().windowWidth * 0.05,
        }}
      >
        <CustomText
          style={{
            color: theme.fontColor,
            marginVertical: getDimensionsStore().windowHeight  * 0.02,
          }}
          fontSize={getDimensionsStore().windowWidth * 0.08}
          fontWeight='bold'
        >
          {t("welcoming-screen")}
        </CustomText>
        <CustomText
          style={{
            paddingTop: getDimensionsStore().windowHeight  * 0.03,
            color: theme.fontColor,
          }}
          fontSize={getDimensionsStore().windowWidth * 0.04}
          fontWeight='400'
        >
          {t("welcoming-introduced-text")}
        </CustomText>
        <ActivityIndicator
          style={{
            marginTop: getDimensionsStore().windowHeight  * 0.02,
            marginBottom: getDimensionsStore().windowHeight * 0.02
          }}
          size={getDimensionsStore().windowWidth * 0.15}
          color={theme.navigationColor}
        />
      <CustomView
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: getDimensionsStore().windowHeight * 0.05,
        }}
      >
        <CustomButton
          onPress={() => getNavigationStore().navigateToLogin()}
          style={{
            backgroundColor: theme.borderColor,
            borderRadius: 30,
          }}
          height={60}
          width={getDimensionsStore().windowWidth  * 0.85}
        >
          <CustomView style={{
            display : 'flex' ,
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <CustomText
              style={{
                color: 'black',
                textAlign: 'center',
                marginTop:20,
                marginLeft: getDimensionsStore().windowWidth * 0.3333


              }}
              fontSize={20}
              fontWeight="300"
            >
              {t("login")}
            </CustomText>
          </CustomView>
        </CustomButton>
      </CustomView>
        <TouchableOpacity onPress={() => getNavigationStore().navigateToCreateAccount()}>
          <CustomText
            style={{
              color: theme.fontColor,
              paddingTop: getDimensionsStore().windowHeight * 0.03,
            }}
            fontSize={getDimensionsStore().windowWidth * 0.04}
            fontWeight='500'
          >
            {t("create-account")}
          </CustomText>
        </TouchableOpacity>
      </CustomView>
    </CustomView>
  );
});

export default WelcomingScreen;
