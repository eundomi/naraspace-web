import React, { useState } from 'react';
import { UserList } from './ViewList';
import styled from 'styled-components';
import Label from './Label';

interface ListTileProps {
  item: UserList;
  isCheck?: boolean;
}
const ListTile = ({ item, isCheck }: ListTileProps) => {
  const [check, setCheck] = useState(item.checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  return (
    <>
      <Container check={check} isCheck={isCheck}>
        <ListTileContainer>
          <NameContainer>
            <Label text={item.name} size={15} weight={300} />
          </NameContainer>
          <DateContainer>
            <Label text={item.date} size={14} weight={300} />
          </DateContainer>
          {isCheck && (
            <CheckContainer>
              <label>
                <input type="checkbox" onChange={(e) => onChange(e)} checked={check} />
              </label>
            </CheckContainer>
          )}
        </ListTileContainer>
      </Container>
      <DividerContainer>
        <Divider />
      </DividerContainer>
    </>
  );
};
const ListTileContainer = styled.div`
  display: flex;
`;
const Container = styled.div<{ check: boolean; isCheck?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ check, isCheck }) =>
    check ? `${!isCheck ? '#fff' : '#CBC5F0'}` : `#fff`};
`;

const NameContainer = styled.div`
  width: 90px;
`;

const DateContainer = styled.div`
  width: 90px;
`;

const CheckContainer = styled.div``;

const DividerContainer = styled.div`
  margin: 0 20px;
`;
const Divider = styled.div`
  min-height: 1px;
  background-color: #ebebeb;
`;
export default ListTile;
