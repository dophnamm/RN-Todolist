import React from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import {TUser} from '../../../models/user.type';

import {pathFolderUsers, pathFolderTasks} from '../../../utils/constant';
import {TPayloadTask} from '../../../models/task.type';

export const useGetUsers = () => {
  const [users, setUsers] = React.useState<TUser[]>([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await firestore()
        .collection(pathFolderUsers)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            return;
          }
          const data: TUser[] = [];

          snapshot.forEach(item => {
            data.push(item.data() as TUser);
          });

          setUsers(data);
        });
    } catch (error) {
      return error;
    }
  };

  return {users};
};

export const useUploadFile = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onUploadFile = async (path: string, uri: string): Promise<string> => {
    try {
      setIsLoading(true);
      await storage().ref(path).putFile(uri);
      const currentUrl = await storage()
        .ref(path)
        .getDownloadURL()
        .then(url => url);

      setIsLoading(false);
      return currentUrl;
    } catch (error) {
      setIsLoading(false);
      return error as string;
    }
  };

  return {onUploadFile, isUpdating: isLoading};
};

export const useCreateTask = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onCreateTask = async (tasks: TPayloadTask) => {
    try {
      setIsLoading(true);

      await firestore()
        .collection(pathFolderTasks)
        .add(tasks)
        .then(() => console.log('Added task successfully!'));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  return {onCreateTask, isCreatingTasks: isLoading};
};
