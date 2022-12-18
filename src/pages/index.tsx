import React, { useCallback, useState } from 'react';
import LayoutWrapper from '../components/LayoutWrapper';
import ViewList, { UserList } from '../components/ViewList';
import IconImage from '../components/Icon';
import styled from 'styled-components';
import user_data from '../../user_data.json';
import ViewCheckedList from '../components/ViewCheckedList';

const sortedUser = user_data.slice(0).sort((a: UserList, b: UserList) => {
  return new Date(b.date).valueOf() - new Date(a.date).valueOf();
});

const Index = () => {
  const [user, setUser] = useState<UserList[]>(sortedUser);
  const [checkedUser, setCheckedUser] = useState<UserList[]>(
    sortedUser.filter((value) => value.checked),
  );
  const getUsers = useCallback(
    (user: UserList[]) => {
      setUser(user);
      setCheckedUser(user.filter((value) => value.checked));
    },
    [user, checkedUser],
  );

  return (
    <LayoutWrapper>
      <ViewList item={user} getUsers={getUsers} />
      <ImageContainer>
        <IconImage width={50} height={32} alt={'Logo'} src={`/image/arrow.png`} />
      </ImageContainer>
      <ViewCheckedList item={checkedUser} isCheck={false} />
    </LayoutWrapper>
  );
};

export default Index;

const ImageContainer = styled.div`
  padding: 0 48px;
`;
