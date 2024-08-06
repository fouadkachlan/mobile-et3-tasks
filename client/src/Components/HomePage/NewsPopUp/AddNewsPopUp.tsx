import { observer } from 'mobx-react-lite';
import { NavigationProp, ThemeProvider, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation';
import CustomView from '../../../CustomComponents/CustomView';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import NewsPopUpInput from './PopUpInput/NewsPopUpInput';
import SubmitButton from './Submit/SubmitButton';

const AddNewsPopUp : React.FC = observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {theme} = useContext(ThemeContext);

  

  

   return (
         <CustomView
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.backGroundColor,
                height: '100%'
            }}
        >
            <NewsPopUpInput />
            <SubmitButton />
         </CustomView>
   )
})

export default AddNewsPopUp
