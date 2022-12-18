import React, { useState } from 'react';
import LayoutWrapper from '../../components/LayoutWrapper';
import ViewList, { UserList } from '../../components/ViewList';
import ViewProfile from '../../components/ViewProfile';

const Index = () => {
  const [user, setUser] = useState<UserList>();
  const getData = (user: UserList) => {
    setUser(user);
  };

  return (
    <LayoutWrapper>
      <ViewList isCheck={false} getData={getData} />
      {user && <ViewProfile userInfo={user} />}
    </LayoutWrapper>
  );
};

export default Index;
