import {Platform, StyleSheet} from 'react-native';

import {colors} from '../utils/colors';
import {fontFamily} from '../utils/constant';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black[100],
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 56 : 32,
  },

  section: {
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },

  inputContainer: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.purple[100],
  },

  card: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.purple[100],
  },

  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    backgroundColor: colors.blue[100],
    width: 'auto',
  },
});
