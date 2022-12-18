import React from 'react';
import LayoutWrapper from '../../components/LayoutWrapper';
import { useRouter } from 'next/router';
import ViewProfile from '../../components/ViewProfile';
import user_data from '../../../user_data.json';

const Id = () => {
  const router = useRouter();
  const user = user_data.find((e) => e.id === Number(router.query.id));

  return (
    <LayoutWrapper>
      {user !== undefined && <ViewProfile userInfo={user} viewOnly={true} />}
    </LayoutWrapper>
  );
};

export default Id;
