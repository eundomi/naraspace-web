import React from 'react';
import LayoutWrapper from '../components/LayoutWrapper';
import ViewList from '../components/ViewList';
import IconImage from '../components/Icon';
import styled from 'styled-components';

const Index = () => {
  return (
    <LayoutWrapper>
      <ViewList />
      <ImageContainer>
        <IconImage width={50} height={32} alt={'Logo'} src={`/image/arrow.png`} />
      </ImageContainer>
      <ViewList isCheck={false} />
    </LayoutWrapper>
  );
};

export default Index;

const ImageContainer = styled.div`
  padding: 0 48px;
`;
