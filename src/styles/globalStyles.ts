import {StyleSheet} from 'react-native';

import {colors} from '../utils/colors';
import {fontFamily} from '../utils/constant';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black[100],
    paddingHorizontal: 20,
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

  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 100,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  floatButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingHorizontal: 56,
  },

  'text-sm': {
    fontSize: 14,
  },

  'text-md': {
    fontSize: 16,
  },

  'text-lg': {
    fontSize: 18,
  },

  'text-center': {
    textAlign: 'center',
  },

  'flex-1': {
    flex: 1,
  },

  'flex-center': {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  'ml-0': {
    marginLeft: 0,
  },

  'ml-1': {
    marginLeft: 4,
  },

  'ml-2': {
    marginLeft: 8,
  },

  'ml-3': {
    marginLeft: 12,
  },

  'ml-4': {
    marginLeft: 16,
  },

  'ml-5': {
    marginLeft: 20,
  },

  'ml-6': {
    marginLeft: 24,
  },

  '-ml-1': {
    marginLeft: -4,
  },
  '-ml-2': {
    marginLeft: -8,
  },
  '-ml-3': {
    marginLeft: -12,
  },
  '-ml-4': {
    marginLeft: -16,
  },
  '-ml-5': {
    marginLeft: -20,
  },
  '-ml-6': {
    marginLeft: -24,
  },

  'mb-0': {
    marginBottom: 0,
  },

  'mb-1': {
    marginBottom: 4,
  },

  'mb-2': {
    marginBottom: 8,
  },

  'mb-3': {
    marginBottom: 12,
  },

  'mb-4': {
    marginBottom: 16,
  },

  'mb-5': {
    marginBottom: 20,
  },

  'mb-6': {
    marginBottom: 24,
  },

  'my-0': {
    marginVertical: 0,
  },

  'my-1': {
    marginVertical: 4,
  },

  'my-2': {
    marginVertical: 8,
  },

  'my-3': {
    marginVertical: 12,
  },

  'my-4': {
    marginVertical: 16,
  },

  'my-5': {
    marginVertical: 20,
  },

  'my-6': {
    marginVertical: 24,
  },

  'py-0': {
    paddingVertical: 0,
  },

  'py-1': {
    paddingVertical: 4,
  },

  'py-2': {
    paddingVertical: 8,
  },

  'py-3': {
    paddingVertical: 12,
  },

  'py-4': {
    paddingVertical: 16,
  },

  'py-5': {
    paddingVertical: 20,
  },

  'py-6': {
    paddingVertical: 24,
  },

  'px-0': {
    paddingHorizontal: 0,
  },

  'px-1': {
    paddingHorizontal: 4,
  },

  'px-2': {
    paddingHorizontal: 8,
  },

  'px-3': {
    paddingHorizontal: 12,
  },

  'px-4': {
    paddingHorizontal: 16,
  },

  'px-5': {
    paddingHorizontal: 20,
  },

  'px-6': {
    paddingHorizontal: 24,
  },
});
