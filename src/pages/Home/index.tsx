import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {SearchNormal} from 'iconsax-react-native';

import Card from '../../components/Card';
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
        <Paragraph text="Hi, Jason" color={colors.gray[100]} />
        <Paragraph
          size={16}
          font={fontFamily.semibold}
          text="Be productive today"
        />
      </SectionContainer>

      <SectionContainer>
        <TouchableOpacity style={globalStyles.inputContainer}>
          <RowSystem justifyContent="space-between">
            <Paragraph text="Search" color={colors.gray[100]} />

            <SearchNormal size={24} color={colors.gray[100]} />
          </RowSystem>
        </TouchableOpacity>
      </SectionContainer>

      <SectionContainer>
        <Card>
          <RowSystem justifyContent="space-between">
            <View>
              <Paragraph text="Task Progress" />
              <Paragraph text="30/40 tasks" />
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
