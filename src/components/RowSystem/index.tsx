import React, {ReactNode} from 'react';
import {FlexAlignType, StyleProp, View, ViewStyle} from 'react-native';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  children: ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?: FlexAlignType;
  style?: StyleProp<ViewStyle>;
};

const RowSystem = (props: TProps) => {
  const {children, justifyContent, alignItems, style} = props;

  return (
    <View
      style={[
        globalStyles.row,
        {
          justifyContent,
          alignItems,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default RowSystem;
