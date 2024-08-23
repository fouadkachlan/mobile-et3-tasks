import { ActivityIndicator, Image, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import CustomText from '../../CustomComponents/CustomText';
import CustomView from '../../CustomComponents/CustomView';
import getLoginStore from '../../stores/loginStore';
import getRefreshStore from '../../stores/refreshStore';
import getDimensionsStore from '../../stores/dimensionsStore';
import Username from './Username/Username';
import Email from './UserEmail/Email';
import PhoneNumber from './phoneNumber/PhoneNumber';
import Country from './country/Country';
import { useTheme } from '../ThemeContext/ThemeContext';
import { useTranslation } from 'react-i18next';
import getLoadingStore from '../../stores/loadingStore';
const userImage = require("../../../../assets/userImage.png");

const UserProfile: React.FC = observer(() => {
  
  React.useEffect(() => {
    getLoginStore().handleProfileFetch();
  }, []);
  const loadingState = getLoadingStore().loading.get();
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.backGroundColor,
      }}
    >
      {loadingState ? (
        <ActivityIndicator size="large" color={theme.borderColor} />
      ) : (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          
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
              {t("profile-title")}
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
        </ScrollView>
      )}
    </CustomView>
  );
});

export default UserProfile;
