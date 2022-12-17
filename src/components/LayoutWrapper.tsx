import React, {ReactNode} from 'react';
import Header from "./Header";
import styled from "styled-components";

interface ContentContainerProps {
    children: ReactNode;
}

const LayoutWrapper = ({children}:ContentContainerProps) => {
    return (
        <Container>
            <Header/>
            <ContentContainer>
                {children}
            </ContentContainer>
        </Container>
    );
};

export default LayoutWrapper;

const Container = styled.div`
  display:flex;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100vw;
  padding-top:70px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
