import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Category, Notification, SearchNormal, Edit} from 'iconsax-react-native';

import Card from '../../components/Card';
import Tag from '../../components/Tag';
import Space from '../../components/Space';
import Container from '../../components/Container';
import RowSystem from '../../components/RowSystem';
import Paragraph from '../../components/Paragraph';
import SectionContainer from '../../components/SectionContainer';
import CircularChart from '../../components/CircularChart';
import CardImage from '../../components/CardImage';
import AvatarGroup from '../../components/AvatarGroup';
import ProgressBar from '../../components/ProgressBar';

import {colors} from '../../utils/colors';
import {fontFamily} from '../../utils/constant';

import {globalStyles} from '../../styles/globalStyles';

const Home = () => {
  return (
    <View style={{flex: 1}}>
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
            <RowSystem justifyContent="space-between" alignItems="center">
              <View>
                <Paragraph
                  size={18}
                  text="Task Progress"
                  font={fontFamily.semibold}
                />

                <Space height={4} />

                <Paragraph
                  size={16}
                  text="30/40 tasks done"
                  color={colors.gray[150]}
                />

                <Space height={16} />

                <RowSystem justifyContent="flex-start">
                  <Tag text="March 22" />
                </RowSystem>
              </View>

              <View>
                <CircularChart value={80} size="medium" />
              </View>
            </RowSystem>
          </Card>
        </SectionContainer>

        <SectionContainer>
          <RowSystem>
            <View style={[globalStyles['flex-1']]}>
              <CardImage>
                <TouchableOpacity
                  style={[globalStyles.iconContainer, globalStyles['mb-3']]}>
                  <Edit size={24} color={colors.white} />
                </TouchableOpacity>

                <Paragraph
                  size={20}
                  text="UX Design"
                  font={fontFamily.semibold}
                  style={globalStyles['mb-1']}
                />

                <Paragraph text="Tasks management mobile app" />

                <View style={globalStyles['my-6']}>
                  <AvatarGroup />
                </View>

                <View style={globalStyles['mb-3']}>
                  <ProgressBar percent={66} />
                </View>

                <Paragraph size={12} text="Due, 2023 March 03" />
              </CardImage>
            </View>

            <Space width={16} />

            <View style={[globalStyles['flex-1']]}>
              <CardImage color={colors.blue[500]}>
                <TouchableOpacity
                  style={[globalStyles.iconContainer, globalStyles['mb-3']]}>
                  <Edit size={24} color={colors.white} />
                </TouchableOpacity>

                <Paragraph
                  size={20}
                  text="API Payment"
                  font={fontFamily.semibold}
                  style={globalStyles['mb-1']}
                />

                <View style={globalStyles['my-6']}>
                  <AvatarGroup />
                </View>

                <View>
                  <ProgressBar percent={66} color={colors.green[100]} />
                </View>
              </CardImage>

              <Space height={16} />

              <CardImage color={colors.green[500]}>
                <TouchableOpacity
                  style={[globalStyles.iconContainer, globalStyles['mb-3']]}>
                  <Edit size={24} color={colors.white} />
                </TouchableOpacity>

                <Paragraph
                  size={20}
                  text="Update Work"
                  font={fontFamily.semibold}
                  style={globalStyles['mb-1']}
                />

                <Paragraph text="Revision home page" />
              </CardImage>
            </View>
          </RowSystem>
        </SectionContainer>

        <SectionContainer>
          <Paragraph size={24} text="Urgent tasks" font={fontFamily.semibold} />

          <Space height={16} />

          <Card>
            <RowSystem alignItems="center">
              <CircularChart value={50} />

              <Space width={16} />

              <View>
                <Paragraph
                  text="Title of task"
                  size={18}
                  font={fontFamily.semibold}
                />
              </View>
            </RowSystem>
          </Card>
        </SectionContainer>

        <Space height={64} />
      </Container>

      <View style={globalStyles.floatButton}>
        <TouchableOpacity>
          <Tag
            text="Add new task +"
            tagStyle={[globalStyles['px-4'], globalStyles['py-3']]}
            textStyle={[
              globalStyles['text-md'],
              globalStyles['text-center'],
              {fontFamily: fontFamily.medium},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
