import React from 'react';
import {View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../../utils/colors';
import {fontFamily} from '../../utils/constant';

type TProps = {
  color?: string;
  value: number;
  maxValue?: number;
  width?: number;
  height?: number;
};

const CircularChart = (props: TProps) => {
  const {value, width, height, color} = props;

  return (
    <View>
      <CircularProgress
        title={`${value}%`}
        showProgressValue={false}
        value={value}
        activeStrokeColor={color ?? colors.blue[100]}
        inActiveStrokeColor={colors.gray[150]}
        titleFontSize={20}
        titleStyle={{
          fontFamily: fontFamily.semibold,
        }}
      />
    </View>
  );
};

export default CircularChart;
