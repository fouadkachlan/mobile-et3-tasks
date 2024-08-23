import React, { useContext } from 'react';
import { Switch } from 'react-native';
import CustomView from '../../CustomComponents/CustomView';
import CustomText from '../../CustomComponents/CustomText';
import getThemeStore from '../../stores/themeStore';
import { observer } from 'mobx-react-lite';
import { settingsText } from '../Constant/constants';
import getDimensionsStore from '../../stores/dimensionsStore';
import ChangeProfileButton from './ChangeProfile/Button/ChangeProfileButton';
import { useTheme } from '../ThemeContext/ThemeContext';
import ChangeLanguage from './ChangeLanguage/ChangeLanguage';
import { useTranslation } from 'react-i18next';
import ChangeTheme from './changeTheme/ChangeTheme';


const Settings: React.FC = observer(() => {
  const {theme } = useTheme();
  const {t} = useTranslation();

  
 
  return (
    <CustomView style={{
        backgroundColor: theme.backGroundColor,
        height: '100%',
        gap: getDimensionsStore().windowWidth * 0.15,
        display: 'flex',
        justifyContent: 'center',
        }}>
          <CustomView
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <CustomText style={{
            color: theme.fontColor
            }}
            fontSize={25}
            fontWeight="bold"
            >
          {t("settings-title")}
        </CustomText>
      </CustomView>
      <ChangeTheme />
      <ChangeProfileButton />
      <ChangeLanguage />
    </CustomView>
  );
})

export default Settings;
