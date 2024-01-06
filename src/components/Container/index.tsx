import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  title?: string;
  goBack?: boolean;
  right?: ReactNode;
  left?: ReactNode;
  children: ReactNode;
};

const Container = (props: TProps) => {
  const {children} = props;

  return <ScrollView style={globalStyles.container}>{children}</ScrollView>;
};

export default Container;
