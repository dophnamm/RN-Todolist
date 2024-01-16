import React, {ReactNode} from 'react';
import {
  ScrollView,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';

import RowSystem from '../RowSystem';

import Paragraph from '../Paragraph';

import {colors} from '../../utils/colors';

import {globalStyles} from '../../styles/globalStyles';
import Space from '../Space';

type TProps = {
  children: ReactNode;
  title?: string;
  right?: ReactNode;
  left?: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  goBack?: () => void;
};

const Container = (props: TProps) => {
  const {children, title, style, contentContainerStyle, goBack} = props;

  return (
    <View style={[globalStyles.container, style]}>
      <RowSystem alignItems="center" style={[globalStyles['px-2']]}>
        {goBack ? (
          <TouchableOpacity onPress={goBack}>
            <ArrowLeft2 size="24" color={colors.white} />
          </TouchableOpacity>
        ) : null}

        {title ? (
          <View style={[globalStyles['flex-1']]}>
            <Paragraph
              size={16}
              text={title}
              style={[globalStyles['text-center'], globalStyles['flex-0']]}
            />
          </View>
        ) : null}
      </RowSystem>

      {goBack || title ? <Space height={16} /> : null}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={[globalStyles['px-5']]}
        contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
};

export default Container;
