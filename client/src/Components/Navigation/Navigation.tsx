import { Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import CustomView from '../../CustomComponents/CustomView';
import { observer } from 'mobx-react-lite';
import getLoginStore from '../../stores/loginStore';
import getAuthStore from '../../stores/authenticationStore';
import getDimensionsStore from '../../stores/dimensionsStore';
import getNavigationStore from '../../stores/navigationStore';
import { useTheme } from '../ThemeContext/ThemeContext';
const userImage = require("../../../../assets/userImage.png");
const settingImage = require("../../../../assets/settings.png");
const logoutImage = require("../../../../assets/logout.png");


const Navigation: React.FC = observer(() => {
 
  const { theme } = useTheme();

  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin : 10
      }}
    >
      <CustomView
        style={{
          backgroundColor: theme.navigationColor,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 10,
          width: '90%',
          borderRadius: getDimensionsStore().windowWidth * 0.5

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

        <TouchableOpacity onPress={getLoginStore().handleNavigationLogout}>
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
