import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';

import Paragraph from '../Paragraph';

import {globalStyles} from '../../styles/globalStyles';
import {colors} from '../../utils/colors';

type TProps = {
  text: string;
  isLoading?: boolean;
  onPress?: () => void;
};

const Button = (props: TProps) => {
  const {text, isLoading, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        globalStyles.buttonPrimary,
        globalStyles.itemsCenter,
        isLoading && {backgroundColor: colors.purple['100']},
      ]}>
      {!isLoading ? <Paragraph text={text} size={16} /> : <ActivityIndicator />}
    </TouchableOpacity>
  );
};

export default Button;
