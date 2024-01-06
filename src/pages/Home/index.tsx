import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Category, Notification, SearchNormal} from 'iconsax-react-native';

import Card from '../../components/Card';
import Tag from '../../components/Tag';
import Space from '../../components/Space';
import Container from '../../components/Container';
import RowSystem from '../../components/RowSystem';
import Paragraph from '../../components/Paragraph';
import SectionContainer from '../../components/SectionContainer';

import {colors} from '../../utils/colors';
import {fontFamily} from '../../utils/constant';

import {globalStyles} from '../../styles/globalStyles';

const Home = () => {
  return (
    <Container>
      <SectionContainer>
        <RowSystem justifyContent="space-between">
          <Category size={24} color={colors.white} />

          <Notification size={24} color={colors.white} />
        </RowSystem>
      </SectionContainer>

      <SectionContainer>
        <Paragraph text="Hi, Jason" color={colors.gray[100]} />
        <Paragraph
          size={16}
          font={fontFamily.semibold}
          text="Be productive today"
        />
      </SectionContainer>

      <SectionContainer>
        <TouchableOpacity style={globalStyles.inputContainer}>
          <RowSystem justifyContent="space-between" alignItems="center">
            <Paragraph text="Search task" color={colors.gray[150]} />

            <SearchNormal size={24} color={colors.gray[100]} />
          </RowSystem>
        </TouchableOpacity>
      </SectionContainer>

      <SectionContainer>
        <Card>
          <RowSystem justifyContent="space-between">
            <View>
              <Paragraph
                size={18}
                text="Task Progress"
                font={fontFamily.semibold}
              />

              <Paragraph text="30/40 tasks" color={colors.gray[150]} />

              <Space height={12} />

              <RowSystem justifyContent="flex-start">
                <Tag text="March 22" />
              </RowSystem>
            </View>

            <View>
              <Paragraph text="Circle chart" />
            </View>
          </RowSystem>
        </Card>
      </SectionContainer>
    </Container>
  );
};

export default Home;
