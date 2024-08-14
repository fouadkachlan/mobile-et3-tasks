import React, { useContext } from 'react'
import CustomInput from '../../../../CustomComponents/CustomInput'
import CustomView from '../../../../CustomComponents/CustomView'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import getNewsStore from '../../../../stores/newsStore'
import getThemeStore from '../../../../stores/themeStore'
import { observer } from 'mobx-react-lite'


const NewsPopUpInput = observer(() => {
    const {theme} = useContext(ThemeContext);
  return (
    <CustomView style={{
        display: 'flex'
        
    }}>
        <CustomInput 
            style={{
                width: 350,
                borderColor: theme.borderColor,
            }}
            height={200}
            margin={30}
            marginRight={30}
            borderRadius={10}
            borderWidth={5}
            padding={10}
            value={getNewsStore().news.get()}
            onChangeText={(news : string) => getNewsStore().setNews(news)}
            placeholder="Enter your news" 
            placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
            keyboardType="default"  
            secureTextEntry={false}
        />
    </CustomView>
  )
})

export default NewsPopUpInput