import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CustomView from '../../CustomComponents/CustomView';
import CustomText from '../../CustomComponents/CustomText';
import getDimensionsStore from '../../stores/dimensionsStore';
import {useTheme } from '../ThemeContext/ThemeContext';
import {signInChoice} from '../Constant/constants';
import LoginHeader from './LoginHeader/LoginHeader';
import EmailInput from './EmailInput/EmailInput';
import PasswordInput from './PasswordInput/PasswordInput';
import LoginButton from './LoginButton/LoginButton';
import GoogleChoice from './GoogleChoice/GoogleChoice';
import CreateAccountChoice from './CreateAccountChoice/CreateAccountChoice';
import { useTranslation } from 'react-i18next';
const Login: React.FC = observer(() => {
  
  const { theme } = useTheme();
  const {t} = useTranslation()
  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: theme.backGroundColor,
      }}
    >
      <LoginHeader />
      <EmailInput />
      <PasswordInput />
      <LoginButton />
      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomText
          style={{
            color: theme.fontColor,
            marginBottom: getDimensionsStore().windowHeight * 0.02,
          }}
          fontSize={15}
          fontWeight="600"
        >
          {t("or-sign-in")}
        </CustomText>
      </CustomView>
      <GoogleChoice />
      <CreateAccountChoice />
    </CustomView>
  );
});

export default Login;
