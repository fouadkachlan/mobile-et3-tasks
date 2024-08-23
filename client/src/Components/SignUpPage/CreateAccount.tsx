import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomView from '../../CustomComponents/CustomView';
import CustomText from '../../CustomComponents/CustomText';
import CustomInput from '../../CustomComponents/CustomInput';
import getLoginStore from '../../stores/loginStore';
import getThemeStore from '../../stores/themeStore';
import { createAccountText, emailAddressText } from '../Constant/constants';
import getDimensionsStore from '../../stores/dimensionsStore';
import CreateAccountHeader from './Header/CreateAccountHeader';
import { useTheme } from '../ThemeContext/ThemeContext';
import { useTranslation } from 'react-i18next';
import CreateAccountEmailInput from './createAccountEmailInput/CreateAccountEmailInput';
import CreateAccountUsernameInput from './CreateAccountUsernameInput/CreateAccountUsernameInput';
import CreateAccountPasswordInput from './createAccountPasswordInput/CreateAccountPasswordInput';
import CreateAccountNumberAndCountryInput from './createAccountNumberAndCountryInput/CreateAccountNumberAndCountryInput';
import SignUpButton from './SignUpButton/SignUpButton';


const CreateAccount: React.FC = observer(() => {

  

  const { theme } = useTheme()
  const {t} = useTranslation()
  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: getDimensionsStore().windowWidth * 0.05,
        backgroundColor: theme.backGroundColor,
      }}
    >
      <CreateAccountHeader />
      <CreateAccountEmailInput />
      <CreateAccountUsernameInput />
      <CreateAccountPasswordInput />
      <CreateAccountNumberAndCountryInput />
      <SignUpButton />
    </CustomView>
  );
});

export default CreateAccount;
