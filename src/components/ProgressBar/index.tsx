import React, {useMemo} from 'react';
import {View} from 'react-native';

import RowSystem from '../RowSystem';
import Paragraph from '../Paragraph';

import {colors} from '../../utils/colors';
import {fontFamily} from '../../utils/constant';

import {globalStyles} from '../../styles/globalStyles';

import {progressBar} from './styles';

type TProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  percent: number;
};

const ProgressBar = (props: TProps) => {
  const {percent, color, size} = props;

  const currentSize = useMemo(() => {
    switch (size) {
      case 'medium':
        return 10;
      case 'large':
        return 12;
      default:
        return 8;
    }
  }, [size]);

  return (
    <View>
      <View
        style={[progressBar.bar, globalStyles['mb-1'], {height: currentSize}]}>
        <View
          style={[
            progressBar.progress,
            {width: `${percent}%`, backgroundColor: color ?? colors.blue[100]},
            {height: currentSize},
          ]}
        />
      </View>

      <RowSystem justifyContent="space-between" alignItems="center">
        <Paragraph text="Progress" />

        <Paragraph text={`${percent}%`} font={fontFamily.semibold} />
      </RowSystem>
    </View>
  );
};

export default ProgressBar;
