import { View, Text, Switch } from 'react-native'
import React from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import getDimensionsStore from '../../../stores/dimensionsStore'
import { useTheme } from '../../ThemeContext/ThemeContext'
import getThemeStore from '../../../stores/themeStore'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'

const ChangeTheme : React.FC = observer(() => {
    const {theme} = useTheme();
    const {t} = useTranslation();
  return (
    <CustomView style={{
        display: 'flex',
        justifyContent: 'space-between',
    }}>
      <CustomView
        style={{
          display: 'flex',
          height: getDimensionsStore().windowHeight * 0.15,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: theme.fontColor,
          borderRadius : getDimensionsStore().windowWidth * 0.1,
          margin: getDimensionsStore().windowWidth * 0.05,
          width: getDimensionsStore().windowWidth * 0.9
        }}
      >
        <CustomText style={{
            color: theme.fontColor
            }}
            fontSize={20}
            fontWeight="300">
          {t("change-theme")}
        </CustomText>
        <CustomView
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: getDimensionsStore().windowWidth * 0.3,
          }}
        >
          <Switch style={{
            marginLeft: getDimensionsStore().windowWidth * 0.3
          }}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={getThemeStore().isDarkThemeEnabled.get() ? '#FFFFFF' : '#f4f3f4'}
            onValueChange={getThemeStore().toggleSettingsSwitch}
            value={getThemeStore().isDarkThemeEnabled.get()}
          />
        </CustomView>
      </CustomView>
    </CustomView>
  )
})

export default ChangeTheme