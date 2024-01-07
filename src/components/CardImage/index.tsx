import React, {ReactNode} from 'react';
import {ImageBackground, View} from 'react-native';

import {colors} from '../../utils/colors';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  children: ReactNode;
  color?: string;
};

const CardImage = (props: TProps) => {
  const {children, color} = props;

  return (
    <ImageBackground
      source={require('../../assets/images/card-bg.png')}
      imageStyle={{borderRadius: 12}}
      style={[globalStyles.card, {padding: 0}]}>
      <View
        style={[
          {
            padding: 12,
            borderRadius: 12,
            backgroundColor: color ?? colors.purple[500],
          },
          globalStyles['flex-1'],
        ]}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default CardImage;
