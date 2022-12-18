import React from 'react';
import styled from 'styled-components';
import { UserList } from './ViewList';
import IconImage from './Icon';
import Label from './Label';
import { Divider } from './ListTile';

interface ViewProfileProps {
  userInfo: UserList;
}

const ViewProfile = ({ userInfo }: ViewProfileProps) => {
  return (
    <ContentContainer>
      <BackgroundContainer>
        <ImageContainer>
          <IconImage
            width={180}
            height={180}
            alt={'Profile'}
            src={`${
              userInfo.image.length == 0 ? '/image/default.png' : `/image/${userInfo.image}`
            }`}
          />
        </ImageContainer>
      </BackgroundContainer>

      <ProfileContainer>
        <TextContainer>
          <Label text={'이름'} size={15} weight={'normal'} />
          <Label text={`${userInfo.name}`} size={13} weight={300} />
        </TextContainer>
        <Divider />
        <TextContainer>
          <Label text={'생년월일'} size={15} weight={'normal'} />
          <Label text={`${userInfo.date.replace(/-/g, '.')}`} size={13} weight={300} />
        </TextContainer>
        <Divider />
        <TextContainer>
          <Label text={'한마디'} size={15} weight={'normal'} />
          <Label text={`${userInfo.comment}`} size={13} weight={300} />
        </TextContainer>
      </ProfileContainer>
    </ContentContainer>
  );
};

export default ViewProfile;

const ContentContainer = styled.div`
  padding-left: 20px;
  margin: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 352px;
  height: 490px;
`;

const BackgroundContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 172px;
  background-color: rgba(203, 197, 240, 0.5);
`;

const ImageContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  overflow: hidden;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.15);
  margin: 40px 86px;
`;

const ProfileContainer = styled.div`
  padding: 68px 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  justify-content: center;
  background-color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 38px;
  align-items: center;
  & > div {
    &:first-child {
      width: 76px;
    }
  }
`;
