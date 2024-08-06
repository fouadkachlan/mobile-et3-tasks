import { Image } from 'react-native';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CustomText from '../../CustomComponents/CustomText';
import CustomView from '../../CustomComponents/CustomView';
import getLoginStore from '../../stores/loginStore';
import getThemeStore from '../../stores/themeStore';
import getRequestStore from '../../stores/requestsStore';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { userProfileText } from '../Constant/constants';
import getDimensionsStore from '../../stores/dimensionsStore';
import Username from './Username/Username';
import Email from './UserEmail/Email';
import PhoneNumber from './phoneNumber/PhoneNumber';
import Country from './country/Country';

const userImage = require("../../../../assets/userImage.png");


const UserProfile: React.FC = observer(() => {
  const handleProfileFetch = async (): Promise<void> => {
    try {
      await getRequestStore().profileFetchRequest();
      const data = (await getRequestStore().profileFetchRequest()).data;
      getLoginStore().setProfileData(data.user_email, data.user_name, data.user_phone_number, data.user_country);
    } catch (error) {
      console.error("Error fetching profile,", error);
    }
  };

  React.useEffect(() => {
    handleProfileFetch();
  }, []);

  const { theme } = useContext(ThemeContext);

  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.backGroundColor,
      }}
    >
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
    </CustomView>
  );
});

export default UserProfile;
