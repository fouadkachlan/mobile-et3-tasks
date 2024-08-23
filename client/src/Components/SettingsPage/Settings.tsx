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
          justifyContent: 'center',
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
      <CustomView
        style={{
          display: 'flex',
          height: getDimensionsStore().windowHeight * 0.15,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: theme.fontColor,
          borderRadius : getDimensionsStore().windowWidth * 0.1,
          margin: getDimensionsStore().windowWidth * 0.025
        }}
      >
        <CustomText style={{
            marginTop: getDimensionsStore().windowWidth * 0.1,
            marginLeft: 10,
            color: theme.fontColor
            }}
            fontSize={20}
            fontWeight="300">
          {t("change-theme")}
        </CustomText>
        <CustomView
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: getDimensionsStore().windowWidth * 0.6,
            marginTop: 40,

          }}
        >
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={getThemeStore().isDarkThemeEnabled.get() ? '#FFFFFF' : '#f4f3f4'}
            onValueChange={getThemeStore().toggleSettingsSwitch}
            value={getThemeStore().isDarkThemeEnabled.get()}
          />
        </CustomView>
        
      </CustomView>
      <ChangeProfileButton />
      <ChangeLanguage />
    </CustomView>
  );
})

export default Settings;
