import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AttachSquare} from 'iconsax-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import documentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import dayjs from 'dayjs';

import {TRootStackParamList} from '../../routes';

import {TPayloadTask} from '../../models/task.type';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/Container';
import RowSystem from '../../components/RowSystem';
import Paragraph from '../../components/Paragraph';
import Datepicker from '../../components/Datepicker';
import SectionContainer from '../../components/SectionContainer';
import Dropdown, {TDropdownItem} from '../../components/Dropdown';

import {useGetUsers, useUploadFile, useCreateTask} from './hooks';

import {colors} from '../../utils/colors';
import {STRING_EMPTY, pathFolderDocs, timeFormat} from '../../utils/constant';

import {globalStyles} from '../../styles/globalStyles';

type TProps = {
  navigation: NativeStackNavigationProp<TRootStackParamList, 'AddNewTask'>;
};

const AddNewTask = (props: TProps) => {
  const {navigation} = props;

  const [task, setTask] = React.useState<TPayloadTask>({});
  const [attachments, setAttachments] =
    React.useState<DocumentPickerResponse[]>();

  const {users} = useGetUsers();
  const {onUploadFile, isUpdating} = useUploadFile();
  const {onCreateTask, isCreatingTasks} = useCreateTask();

  const handleFieldChange = (key: keyof TPayloadTask, value?: string) => {
    const values = {
      ...task,
      [key]: value,
    };

    setTask(values);
  };

  const handleDateChange = (value: string | null) => {
    const newValues: TPayloadTask = {
      ...task,
      dueDate: value,
    };

    setTask(newValues);
  };

  const handleSelectMember = (values: string[]) => {
    const newValues: TPayloadTask = {
      ...task,
      members: values,
    };

    setTask(newValues);
  };

  const handlePickDocument = () => {
    documentPicker
      .pick({})
      .then(res => setAttachments(res))
      .catch(err => console.log(err));
  };

  const handleUploadDocument = async (values: DocumentPickerResponse) => {
    try {
      const fileName =
        values.name ?? dayjs().format(timeFormat.FULL_DAY_FORMAT);
      const path = `${pathFolderDocs}/${fileName}`;
      const url = await onUploadFile(path, values.uri);
      return url;
    } catch (error) {
      return error;
    }
  };

  const handleDeleteDocument = (fileCopyUri: string) => {
    const newAttachments =
      attachments?.filter(item => item.fileCopyUri !== fileCopyUri) ?? [];

    setAttachments(newAttachments);
  };

  const handleCreateTask = async () => {
    try {
      const urlAttachments = [] as string[];

      if (attachments) {
        for (const attachment of attachments) {
          const url = await handleUploadDocument(attachment);
          urlAttachments.push(url as string);
        }
      }

      const newTasks = {
        ...task,
        attachments: urlAttachments,
      };

      await onCreateTask(newTasks);
      navigation.navigate('Home');
    } catch (error) {
      return error;
    }
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

        <View>
          <Paragraph
            text="Attachments"
            size={12}
            style={globalStyles['mb-2']}
          />

          <TouchableOpacity
            onPress={handlePickDocument}
            style={[globalStyles.inputContainer]}>
            <RowSystem style={{gap: 8}} alignItems="center">
              <AttachSquare size={18} color={colors.white} />
              <Paragraph text="Select" color={colors.gray[150]} />
            </RowSystem>
          </TouchableOpacity>

          {attachments ? (
            <RowSystem style={{flexDirection: 'column', gap: 8, marginTop: 8}}>
              {attachments.map(attachment => {
                return (
                  <View key={attachment.fileCopyUri}>
                    <RowSystem
                      justifyContent="space-between"
                      alignItems="center">
                      <Paragraph text={attachment.name ?? STRING_EMPTY} />

                      <TouchableOpacity
                        onPress={() =>
                          handleDeleteDocument(attachment.fileCopyUri as string)
                        }>
                        <AntDesign
                          name="close"
                          size={14}
                          color={colors.white}
                        />
                      </TouchableOpacity>
                    </RowSystem>
                  </View>
                );
              })}
            </RowSystem>
          ) : null}
        </View>
      </RowSystem>

      <SectionContainer>
        <Button
          text="Save"
          isLoading={isUpdating || isCreatingTasks}
          onPress={handleCreateTask}
        />
      </SectionContainer>
    </Container>
  );
};

export default AddNewTask;
