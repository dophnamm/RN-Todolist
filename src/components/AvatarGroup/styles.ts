import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export const avatarGroup = StyleSheet.create({
  item: {
    borderRadius: 100,
    width: 36,
    height: 36,
    backgroundColor: colors.blue[100],
    borderColor: colors.white,
    borderWidth: 2,
  },
});
