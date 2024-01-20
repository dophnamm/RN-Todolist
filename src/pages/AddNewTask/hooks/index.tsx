import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {TUser} from '../../../models/user.type';

export const useGetUsers = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await firestore()
      .collection('users')
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
  };

  return {users};
};
