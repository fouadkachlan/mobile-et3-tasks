import { Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import CustomView from '../../CustomComponents/CustomView';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { observer } from 'mobx-react-lite';
import getLoginStore from '../../stores/loginStore';
import getThemeStore from '../../stores/themeStore';
import getAuthStore from '../../stores/authenticationStore';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import getDimensionsStore from '../../stores/dimensionsStore';

const userImage = require("../../../../assets/userImage.png");
const settingImage = require("../../../../assets/settings.png");
const logoutImage = require("../../../../assets/logout.png");


const Navigation: React.FC = observer(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleLogout = () => {
    getLoginStore().resetCredentials();
    getAuthStore().logout();
    navigation.navigate("Login", "Login");
  };
  const { theme } = useContext(ThemeContext);

  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <CustomView
        style={{
          backgroundColor: theme.navigationColor,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 10,
          width: '100%',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("userProfile", "userProfile")}>
          <Image
            style={{
              height: getDimensionsStore().windowWidth * 0.1,
              width: getDimensionsStore().windowWidth * 0.1,
              marginVertical: 10,
            }}
            source={userImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Settings", "Settings")}>
          <Image
            style={{
              height: getDimensionsStore().windowWidth * 0.1,
              width: getDimensionsStore().windowWidth * 0.1,
              marginVertical: 10,
            }}
            source={settingImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
          <Image
            style={{
              height: getDimensionsStore().windowWidth * 0.1,
              width: getDimensionsStore().windowWidth * 0.1,
              marginVertical: 10,
            }}
            source={logoutImage}
          />
        </TouchableOpacity>
      </CustomView>
    </CustomView>
  );
});

export default Navigation;
