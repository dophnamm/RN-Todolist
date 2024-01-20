import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {TRootStackParamList} from '../../routes';

import Input from '../../components/Input';
import Container from '../../components/Container';
import RowSystem from '../../components/RowSystem';
import Paragraph from '../../components/Paragraph';
import Datepicker from '../../components/Datepicker';
import SectionContainer from '../../components/SectionContainer';
import Dropdown, {TDropdownItem} from '../../components/Dropdown';

import {globalStyles} from '../../styles/globalStyles';

import {useGetUsers} from './hooks';

type TProps = {
  navigation: NativeStackNavigationProp<TRootStackParamList, 'AddNewTask'>;
};

type TFormTask = {
  title?: string;
  description?: string;
  dueDate?: string | null;
  members?: string[];
};

const AddNewTask = (props: TProps) => {
  const {navigation} = props;

  const [task, setTask] = React.useState<TFormTask>({});

  const {users} = useGetUsers();

  const handleFieldChange = (key: keyof TFormTask, value?: string) => {
    const values = {
      ...task,
      [key]: value,
    };

    setTask(values);
  };

  const handleDateChange = (value: string | null) => {
    const newValues: TFormTask = {
      ...task,
      dueDate: value,
    };

    setTask(newValues);
  };

  const handleSelectMember = (values: string[]) => {
    const newValues: TFormTask = {
      ...task,
      members: values,
    };

    setTask(newValues);
  };

  const usersOption: TDropdownItem[] = React.useMemo(() => {
    if (!users.length) {
      return [];
    }

    return users.map(user => ({
      label: user.name,
      value: user.id,
    }));
  }, [users]);

  const userSelected = usersOption
    .filter(user => task.members && task.members.includes(user.value))
    .map(item => item.label);

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

        <Datepicker
          type="date"
          label="Due date"
          placeholder="Choice"
          selected={task.dueDate}
          onSelect={handleDateChange}
        />

        <Dropdown
          multiple
          label="Members"
          items={usersOption}
          selected={task.members}
          placeholder={userSelected.join(', ')}
          onSelect={handleSelectMember}
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
