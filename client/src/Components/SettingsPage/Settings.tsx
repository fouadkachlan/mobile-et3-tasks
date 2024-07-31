import React, { useEffect, useState } from 'react';
import { Switch, Alert } from 'react-native';
import CustomView from '../../CustomComponents/CustomView';
import CustomText from '../../CustomComponents/CustomText';
import { MMKV } from 'react-native-mmkv';
import getThemeStore from '../../stores/themeStore';
import { observer } from 'mobx-react-lite';
import { darkMode, lightMode } from '../colors/colors';

export const mmkv = new MMKV();

const Settings: React.FC = observer(() => {

  const toggleSwitch = () => {    
    console.log('store value : ' , getThemeStore().isDarkThemeEnabled)
    const newValue = !(getThemeStore().isDarkThemeEnabled.get());
    console.log('Toggling switch:', newValue);
    getThemeStore().setThemeEnabled(newValue);
    mmkv.set('themeEnabled', newValue);
    console.log('Stored themeEnabled:', mmkv.getBoolean('themeEnabled'));
  };


  const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode;
  return (
    <CustomView style={{
        backgroundColor: getThemeStore().isDarkThemeEnabled.get() ? darkMode.backGroundColor : lightMode.backGroundColor,
        height: '100%'
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
          Settings
        </CustomText>
      </CustomView>
      <CustomView
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: theme.borderColor,
          paddingBottom: 50,
        }}
      >
        <CustomText style={{
            marginTop: 50,
            color: theme.fontColor
            }}
            fontSize={20}
            fontWeight="300">
          Change Theme
        </CustomText>
        <CustomView
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: 400,
            marginTop: 40,
          }}
        >
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={getThemeStore().isDarkThemeEnabled.get() ? 'white' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={getThemeStore().isDarkThemeEnabled.get()}
          />
        </CustomView>
      </CustomView>
    </CustomView>
  );
})

export default Settings;
