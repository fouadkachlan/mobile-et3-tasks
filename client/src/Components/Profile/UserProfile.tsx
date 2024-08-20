import { Image, RefreshControl } from 'react-native';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CustomText from '../../CustomComponents/CustomText';
import CustomView from '../../CustomComponents/CustomView';
import getLoginStore from '../../stores/loginStore';
import getRefreshStore from '../../stores/refreshStore';
import getRequestStore from '../../stores/requestsStore';
import { userProfileText } from '../Constant/constants';
import getDimensionsStore from '../../stores/dimensionsStore';
import Username from './Username/Username';
import Email from './UserEmail/Email';
import PhoneNumber from './phoneNumber/PhoneNumber';
import Country from './country/Country';
import { useTheme } from '../ThemeContext/ThemeContext';
const userImage = require("../../../../assets/userImage.png");


const UserProfile: React.FC = observer(() => {
 

  React.useEffect(() => {
    getLoginStore().handleProfileFetch();
  }, []);
  const onRefresh = React.useCallback(() => {
    getRefreshStore().setRefreshToTrue();
    setTimeout(() => {
    getRefreshStore().setRefreshToFalse();
    }, 2000)
  } , [])
  const { theme } = useTheme();

  return (
      <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.backGroundColor,
      }}
    >    
    <RefreshControl refreshing={getRefreshStore().refresh.get()} onRefresh={onRefresh}>

      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomText
          style={{
            color: theme.fontColor,
            marginBottom: getDimensionsStore().windowHeight * 0.06,
          }}
          fontSize={30}
          fontWeight="bold"
        >
          {userProfileText.myAccount}
        </CustomText>
      </CustomView>

      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            height: getDimensionsStore().windowWidth * 0.5, 
            width: getDimensionsStore().windowWidth * 0.5,
            margin: getDimensionsStore().windowWidth * 0.05, 
          }}
          source={userImage}
        />
        </CustomView>

        <Username />

        <Email />

        <PhoneNumber />

        <Country />
      </RefreshControl>
      </CustomView>

  );
});

export default UserProfile;
