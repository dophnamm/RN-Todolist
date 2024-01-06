import React from 'react';
import {StyleProp, ViewStyle, TouchableOpacity, TextStyle} from 'react-native';

import Paragraph from '../Paragraph';

import {colors} from '../../utils/colors';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  text: string;
  color?: string;
  tagStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const Tag = (props: TProps) => {
  const {text, tagStyle, color, textStyle, onPress} = props;

  return (
    <TouchableOpacity
      style={[
        globalStyles.tag,
        tagStyle,
        {backgroundColor: color ?? colors.blue[100]},
      ]}
      onPress={onPress}
      disabled={!onPress}>
      <Paragraph text={text} style={textStyle} />
    </TouchableOpacity>
  );
};

export default Tag;
