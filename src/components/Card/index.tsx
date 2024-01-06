import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {globalStyles} from '../../styles/globalStyles';
import {colors} from '../../utils/colors';

type TProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
};

const Card = (props: TProps) => {
  const {children, backgroundColor = colors.purple[100]} = props;

  return (
    <View style={[globalStyles.card, {backgroundColor: backgroundColor}]}>
      {children}
    </View>
  );
};

export default Card;
