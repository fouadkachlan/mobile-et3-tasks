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
import WelcomingLoginButton from './LoginButton/WelcomingLoginButton';

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
        <WelcomingLoginButton />
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
