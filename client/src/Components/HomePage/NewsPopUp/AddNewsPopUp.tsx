import { observer } from 'mobx-react-lite';
import CustomView from '../../../CustomComponents/CustomView';
import { useContext } from 'react';
import { useTheme } from '../../ThemeContext/ThemeContext';
import NewsPopUpInput from './PopUpInput/NewsPopUpInput';
import SubmitButton from './Submit/SubmitButton';

const AddNewsPopUp : React.FC = observer(() => {
    const {theme} = useTheme();
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
