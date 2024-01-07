import React from 'react';
import {View, Text} from 'react-native';

import RowSystem from '../RowSystem';

import {globalStyles} from '../../styles/globalStyles';

import {avatarGroup} from './styles';

const AvatarGroup = () => {
  const images = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'L', 'M'];

  const imagesView = images?.slice(0, 3);
  const moreImages = images?.slice(3);

  return (
    <RowSystem justifyContent="flex-start">
      {imagesView.map((item, index) => {
        const isFirstItem = index === 0;

        return (
          <View
            key={item}
            style={[
              avatarGroup.item,
              !isFirstItem ? globalStyles['-ml-2'] : {},
              globalStyles['flex-center'],
            ]}>
            <Text>{item}</Text>
          </View>
        );
      })}

      {moreImages.length ? (
        <View
          style={[
            avatarGroup.item,
            globalStyles['-ml-2'],
            globalStyles['flex-center'],
          ]}>
          <Text>+{moreImages.length}</Text>
        </View>
      ) : null}
    </RowSystem>
  );
};

export default AvatarGroup;
