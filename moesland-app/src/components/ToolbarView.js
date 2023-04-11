import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { MOESLAND_GREEN, COLOR_WHITE } from '../constants/colors';

const ToolbarView = ({ showBackButton, onPressMenu, onPressCamera }) => {
  const navigation = useNavigation();

  const menuIcon = (
    <Icon
      name="menu"
      onPress={onPressMenu}
      color={COLOR_WHITE}
    />
  );

  const backButton = (
    <Icon
      name="arrow-back"
      onPress={() => navigation.goBack()}
      color={COLOR_WHITE}
    />
  );

  const cameraIcon = (
    <Icon
      name="camera"
      type="font-awesome-5"
      onPress={onPressCamera}
      color={COLOR_WHITE}
    />
  );

  return (
    <Header
      backgroundColor={MOESLAND_GREEN}
      leftComponent={showBackButton ? backButton : menuIcon}
      rightComponent={cameraIcon}
    />
  );
};

export default ToolbarView;