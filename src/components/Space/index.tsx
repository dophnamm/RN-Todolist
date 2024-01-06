import React from 'react';
import {View} from 'react-native';

type TProps = {
  width?: number;
  height?: number;
};

const Space = (props: TProps) => {
  const {width, height} = props;

  return <View style={{width, height}} />;
};

export default Space;
