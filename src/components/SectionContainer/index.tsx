import React from 'react';
import {View} from 'react-native';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  children: React.ReactNode;
};

const SectionContainer = (props: TProps) => {
  const {children} = props;

  return <View style={[globalStyles.section]}>{children}</View>;
};

export default SectionContainer;
