import React, {useMemo} from 'react';
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
  size?: 'small' | 'medium' | 'large';
};

const CircularChart = (props: TProps) => {
  const {value, color, size} = props;

  const currentSize = useMemo(() => {
    switch (size) {
      case 'medium':
        return 44;
      case 'large':
        return 52;
      default:
        return 36;
    }
  }, [size]);

  return (
    <View>
      <CircularProgress
        title={`${value}%`}
        showProgressValue={false}
        value={value}
        radius={currentSize}
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
