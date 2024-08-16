import React, { useContext } from 'react';
import { Switch } from 'react-native';
import CustomView from '../../CustomComponents/CustomView';
import CustomText from '../../CustomComponents/CustomText';
import getThemeStore from '../../stores/themeStore';
import { observer } from 'mobx-react-lite';
import { mmkv } from '../MmkvStorage/mmkv';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { settingsText } from '../Constant/constants';
import getDimensionsStore from '../../stores/dimensionsStore';
import ChangeProfile from './ChangeProfile/Button/ChangeProfileButton';
import ChangeProfileButton from './ChangeProfile/Button/ChangeProfileButton';


const Settings: React.FC = observer(() => {
  const {theme } = useContext(ThemeContext);
  const toggleSwitch = () => {    
    const currentValue = getThemeStore().isDarkThemeEnabled.get();
    const newValue = !currentValue;
    getThemeStore().toggleTheme()
    console.log('Toggling switch:', newValue);
    getThemeStore().setThemeEnabled(newValue ? 'dark' : 'light');
    mmkv.set('themeEnabled', newValue);
    console.log('Stored themeEnabled:', mmkv.getBoolean('themeEnabled'));
};
 
  return (
    <CustomView style={{
        backgroundColor: theme.backGroundColor,
        height: '100%',
        gap: getDimensionsStore().windowWidth * 0.155,
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
            color: theme.borderColor
            }}
            fontSize={50}
            fontWeight="bold"
            >
          {settingsText.settingTitle}
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
          borderColor: theme.borderColor,
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
          {settingsText.changeThemeText}
        </CustomText>
        <CustomView
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: getDimensionsStore().windowWidth * 0.8,
            marginTop: 40,

          }}
        >
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={getThemeStore().isDarkThemeEnabled.get() ? '#FFFFFF' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={getThemeStore().isDarkThemeEnabled.get()}
          />
        </CustomView>
        
      </CustomView>
      <ChangeProfileButton />
    </CustomView>
  );
})

export default Settings;
