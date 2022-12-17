import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import IconImage from './Icon';
import Label from './Label';

const Header = () => {
  const [homeColor, setHomeColor] = useState(true);
  const [userColor, setUserColor] = useState(false);

  const router = useRouter();

  const onClickPage = () => {
    setHomeColor(false);
    setUserColor(false);

    if (router.pathname === '/') {
      setHomeColor(true);
    } else {
      setUserColor(true);
    }
  };

  useEffect(() => {
    onClickPage();
  }, [router.pathname]);

  return (
    <Container>
      <ContentContainer>
        <IconImage
          width={174.5}
          height={29.35}
          alt={'Logo'}
          src={`/image/logo.png`}
          onClick={() => router.push('/')}
        />
        <PageContainer>
          <Page onClick={() => router.push('/')}>
            <Label text={'PAGE 01'} color={homeColor ? '#4130BE' : '#fff'} />
          </Page>
          <Page onClick={() => router.push('/user')}>
            <Label text={'PAGE 02'} color={userColor ? '#4130BE' : '#fff'} />
          </Page>
        </PageContainer>
      </ContentContainer>
    </Container>
  );
};

export default React.memo(Header);

const Container = styled.div`
  display:flex;
  flex-direction: column;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: 100%;
  z-index: 100;
  background-color: rgba(65, 48, 190, 0.6);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 40px 0 40px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Page = styled.div`
  padding-left: 35px;
`;
