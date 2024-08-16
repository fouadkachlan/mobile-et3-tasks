import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import CustomView from '../../../../CustomComponents/CustomView';
import CustomText from '../../../../CustomComponents/CustomText';
import CustomInput from '../../../../CustomComponents/CustomInput';
import getLoginStore from '../../../../stores/loginStore';
import getThemeStore from '../../../../stores/themeStore';
import { ThemeContext } from '../../../ThemeContext/ThemeContext';
import { settingsText } from '../../../Constant/constants';
import getDimensionsStore from '../../../../stores/dimensionsStore';
import SubmitChangeUsername from './SubmitChangeUsername/SubmitChangeUsername';

const ChangeUsername: React.FC = observer(() => {
  const { theme } = useContext(ThemeContext);

  return (
    <CustomView
      style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.backGroundColor,
        }}
    >
      <CustomText
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowWidth * 0.05,
        }}
        fontSize={25}
        fontWeight={'bold'}
      >
        {settingsText.changeUsernameText}
      </CustomText>


      <CustomInput
        style={{
          borderColor: theme.fontColor,
          width: getDimensionsStore().windowWidth * 0.8,
          maxWidth: 400,
          marginBottom: 30,
        }}
        height={getDimensionsStore().windowHeight * 0.1}
        borderRadius={8}
        borderWidth={2}
        padding={10}
        value={getLoginStore().user_name.get()}
        onChangeText={getLoginStore().setUsername}
        placeholderTextColor={theme.fontColor}
        placeholder="Enter new username"
        keyboardType="default"
        secureTextEntry={false}
      />

      <SubmitChangeUsername />
    </CustomView>
  );
});

export default ChangeUsername;
