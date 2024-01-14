import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../routes';

import Input from '../../components/Input';
import Container from '../../components/Container';
import RowSystem from '../../components/RowSystem';
import Paragraph from '../../components/Paragraph';
import SectionContainer from '../../components/SectionContainer';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddNewTask'>;
};

type TFormTask = {
  title?: string;
  description?: string;
};

const AddNewTask = (props: TProps) => {
  const {navigation} = props;

  const [task, setTask] = React.useState<TFormTask>({});

  const handleFieldChange = (key: keyof TFormTask, value?: string) => {
    const values = {
      ...task,
      [key]: value,
    };

    setTask(values);
  };

  return (
    <Container title="Add new task" goBack={navigation.goBack}>
      <RowSystem
        style={[{flexDirection: 'column', gap: 16}, globalStyles['mb-6']]}>
        <Input
          allowClear
          label="Title"
          placeholder="Enter your title"
          value={task.title}
          onChange={value => handleFieldChange('title', value)}
        />

        <Input
          allowClear
          label="Description"
          placeholder="Enter your description"
          multiple
          numberOfLine={4}
          value={task.description}
          onChange={value => handleFieldChange('description', value)}
        />
      </RowSystem>

      <SectionContainer>
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.buttonPrimary]}>
          <Paragraph
            text="Save"
            size={16}
            style={globalStyles['text-center']}
          />
        </TouchableOpacity>
      </SectionContainer>
    </Container>
  );
};

export default AddNewTask;
