import { Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import CustomView from '../../CustomComponents/CustomView';
import { observer } from 'mobx-react-lite';
import getLoginStore from '../../stores/loginStore';
import getAuthStore from '../../stores/authenticationStore';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import getDimensionsStore from '../../stores/dimensionsStore';
import getNavigationStore from '../../stores/navigationStore';

const userImage = require("../../../../assets/userImage.png");
const settingImage = require("../../../../assets/settings.png");
const logoutImage = require("../../../../assets/logout.png");


const Navigation: React.FC = observer(() => {
  const handleLogout = () => {
    getLoginStore().resetCredentials();
    getAuthStore().logout();
    getNavigationStore().navigateToLogin();
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
        <TouchableOpacity onPress={() => getNavigationStore().navigateToUserProfile()}>
          <Image
            style={{
              height: getDimensionsStore().windowWidth * 0.1,
              width: getDimensionsStore().windowWidth * 0.1,
              marginVertical: 10,
            }}
            source={userImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => getNavigationStore().navigateToSettings()}>
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
