import React, { useState } from 'react';
import LayoutWrapper from '../../components/LayoutWrapper';
import { UserList } from '../../components/ViewList';
import ViewProfile from '../../components/ViewProfile';
import user_data from '../../../user_data.json';
import ViewCheckedList from '../../components/ViewCheckedList';

const sortedUser = user_data.slice(0).sort((a: UserList, b: UserList) => {
  return new Date(b.date).valueOf() - new Date(a.date).valueOf();
});

const Index = () => {
  const [user, setUser] = useState<UserList>();
  const [checkedUser, setCheckedUser] = useState<UserList[]>(
    sortedUser.filter((value) => value.checked),
  );
  const getData = (user: UserList) => {
    console.log(user);
    setUser(user);
  };

  return (
    <LayoutWrapper>
      <ViewCheckedList items={sortedUser} item={checkedUser} isCheck={false} getData={getData} />
      {user && <ViewProfile userInfo={user} />}
    </LayoutWrapper>
  );
};

export default Index;
