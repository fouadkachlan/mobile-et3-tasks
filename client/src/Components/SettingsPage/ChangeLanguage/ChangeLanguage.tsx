import React from 'react';
import {TouchableOpacity,Modal,} from 'react-native';
import { useTranslation } from 'react-i18next';
import languagesList from '../../../../../services/languagesList.json';
import getLanguageStore from '../../../stores/languageStore';
import { observer } from 'mobx-react-lite';
import CustomView from '../../../CustomComponents/CustomView';
import getDimensionsStore from '../../../stores/dimensionsStore';
import CustomText from '../../../CustomComponents/CustomText';
import { useTheme } from '../../ThemeContext/ThemeContext';
import { setLanguageLocalStorage } from '../../MmkvStorage/mmkv';


const ChangeLanguage : React.FC = observer(() => {
  const { t } = useTranslation();
  const {theme} = useTheme();
  return (
    <CustomView style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.backGroundColor,
    }}>
      <Modal visible={getLanguageStore().isLanguageModalVisible.get()} onRequestClose={() => getLanguageStore().setIsLanguageModalVisibleToFalse()}>
        <CustomView style={{
             flex: 1,
             justifyContent: 'center',
             padding: 10,
             backgroundColor:theme.backGroundColor,
        }}>
          <TouchableOpacity style={{
            padding: 10,
            borderBottomColor: '#dddddd',
            borderBottomWidth: 1,
          }} onPress={() =>{
            getLanguageStore().changeLng("en"),
            setLanguageLocalStorage("en")
          }}>
            <CustomText style={{
              color: theme.fontColor
            }}
            fontSize={20}
            fontWeight='300'
            >
              {languagesList.en.nativeName}
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 10,
            borderBottomColor: '#dddddd',
            borderBottomWidth: 1,
          }} onPress={() => {
            getLanguageStore().changeLng('fr')
            setLanguageLocalStorage("fr")
          }}>
            <CustomText style={{
              color: theme.fontColor
            }}
            fontSize={20}
            fontWeight='300'
            >
              {languagesList.fr.nativeName}
            </CustomText>
          </TouchableOpacity>
        </CustomView>
      </Modal>
      <TouchableOpacity style={{
         backgroundColor: theme.backGroundColor,
         borderWidth: 2,
         borderColor: theme.fontColor,
         padding: 10,
         borderRadius : getDimensionsStore().windowWidth * 0.1,
         height: getDimensionsStore().windowHeight * 0.15,
         width: getDimensionsStore().windowWidth * 0.95
      }} onPress={() => getLanguageStore().setIsLanguageModalVisibleToTrue()}>
        <CustomView style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginTop: '10%',
          }}>
          <CustomText style={{
            color:theme.fontColor,
          }}
          fontWeight='300'
          fontSize={20}
          >{t('change-language')}</CustomText>
        </CustomView>
      </TouchableOpacity>
    </CustomView>
  );

});

export default ChangeLanguage;
