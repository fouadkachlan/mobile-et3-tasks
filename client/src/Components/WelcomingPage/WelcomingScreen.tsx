import {  Image, ActivityIndicator , TouchableOpacity, Alert } from 'react-native'
import {useNavigation , NavigationProp} from "@react-navigation/native";
import CustomButton from '../../CustomComponents/CustomButton';
import CustomText from '../../CustomComponents/CustomText';
import CustomView from '../../CustomComponents/CustomView';
import { RootStackParamList } from '../../types/navigation';
import getThemeStore from '../../stores/themeStore';
import { darkMode, lightMode } from '../colors/colors';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { mmkv } from '../SettingsPage/Settings';

const welcomingImage = require("../../../../assets/welcome.png");




const WelcomingScreen : React.FC= observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode ;
    useEffect(() => {
        try {
          const storedTheme = mmkv.getBoolean('themeEnabled');
          console.log('Retrieved storedTheme:', storedTheme);
          if (storedTheme !== undefined) {
            getThemeStore().setThemeEnabled(storedTheme);
          } else {
            console.log('No stored theme found, defaulting to false');
          }
        } catch (error) {
          console.error('Error retrieving themeEnabled from MMKV:', error);
          Alert.alert('Error', 'Failed to retrieve theme setting.');
        }
      }, []);
 
  return (
    <CustomView
    
        style={{ 
            display : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.backGroundColor,
            height: "100%"
        }}
    >
        <Image style={{
            width: 400,
            height: 250,
            borderRadius: 950
            }} 
            source={welcomingImage} />
        <CustomView style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            <CustomText
                style={{
                    color:theme.fontColor
                }}
                fontSize={30}
                fontWeight='bold'
            >Welcome to the news reader app</CustomText>
            <CustomText
                style={{
                    paddingTop: 30,
                    color: theme.fontColor
                }}
                fontSize={15}
                fontWeight='400'
            >We're excited to introduce you our news paper reader app.</CustomText>
            <ActivityIndicator
            style={{
                marginTop: 20
            }}
                size={100}
                color="#77E4C8"
            ></ActivityIndicator>
            <CustomButton onPress={() => navigation.navigate("Login")}
                style={{
                     backgroundColor: theme.borderColor,
                     marginTop: 30 , 
                     borderRadius: 30,
                     width: 300

                    }}
                height={60}
                width={400}
                
            >
                <CustomView 
                    style={{
                        display:'flex' ,
                        justifyContent:'center' ,
                         alignItems:'center',
                        }}
                >
                    <CustomText
                        style={{color: 'black' , marginTop:13, marginLeft:125}}
                        fontSize={20}
                        fontWeight='300'
                    >Login</CustomText>
                </CustomView>
            </CustomButton>
            <TouchableOpacity onPress={()=>navigation.navigate("CreateAccount")}>
                <CustomText 
                    style={{
                        color:theme.fontColor,
                        paddingTop:30
                    }}
                    fontSize={16}
                    fontWeight='500'
                 >Create an account</CustomText>
            </TouchableOpacity>
        </CustomView>
    </CustomView>
  )
})

export default WelcomingScreen