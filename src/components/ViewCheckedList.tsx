import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ListTile from './ListTile';
import { nanoid } from 'nanoid';
import Label from './Label';
import { useRouter } from 'next/router';
import axios from 'axios';

export interface UserList {
  id: number;
  name: string;
  date: string;
  comment: string;
  image: string;
  checked: boolean;
}

interface ViewCheckedListProps {
  isCheck?: boolean;
  item: UserList[];
  items: UserList[];
  getData?: (user: UserList) => void;
}

const ViewCheckedList = ({ isCheck = true, getData, item, items }: ViewCheckedListProps) => {
  const router = useRouter();
  const sortedUser = item.slice(0).sort((a: UserList, b: UserList) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });
  const [checkedUser, setCheckedUser] = useState<UserList[]>(sortedUser);
  const [user, setUser] = useState<UserList>();

  useEffect(() => {
    setCheckedUser(sortedUser);
    setText(options[0].name);
    setValue(options[0].value);
  }, [item]);

  const getUser = (user: UserList) => {
    setUser(user);
    getData?.(user);
  };

  const options = [
    { name: '오름차순', value: 'asc' },
    { name: '내림차순', value: 'desc' },
  ];
  const defaultOption = options[0];
  const [optionText, setText] = useState<string>(options[0].name);
  const [optionValue, setValue] = useState<string>(options[0].value);
  const [toggle, setToggle] = useState(false);

  const outsideRef = useRef<HTMLDivElement>(null);

  const setOption = useCallback(
    (text: string, value: string) => {
      setText(text);
      setValue(value);
      setToggle(false);
    },
    [optionText, optionValue],
  );

  const onToggle = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setToggle(!toggle);
    },
    [toggle],
  );

  const sortByDate = () => {
    if (optionValue === 'asc') {
      const sortedUser = checkedUser.slice(0).sort((a: UserList, b: UserList) => {
        return new Date(b.date).valueOf() === new Date(a.date).valueOf()
          ? a.name.localeCompare(b.name, 'en')
          : new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
      setCheckedUser(sortedUser);
    } else if (optionValue === 'desc') {
      const sortedUser = checkedUser.slice(0).sort((a: UserList, b: UserList) => {
        return new Date(a.date).valueOf() === new Date(b.date).valueOf()
          ? a.name.localeCompare(b.name, 'en')
          : new Date(a.date).valueOf() - new Date(b.date).valueOf();
      });
      setCheckedUser(sortedUser);
    }
  };

  const onSave = () => {
    alert('저장하기 버튼 클릭 하였습니다.')
    // checkedUser
    //   .map((item) => item.id)
    //   .forEach(async function (id) {
    //     const { data } = await axios.patch(`http://localhost:9000/user_data/${id}`, {
    //       //해당 id에 대한 item값을 적어야함.
    //     });
    //   });
  };

  useEffect(() => {
    if (defaultOption) {
      setText(defaultOption.name);
      setValue(defaultOption.value);
    }
  }, []);

  useEffect(() => {
    sortByDate();
  }, [optionValue]);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (toggle && outsideRef.current && !outsideRef.current?.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [toggle]);

  return (
    <ContentContainer>
      <SelectContainer>
        <SelectBox ref={outsideRef}>
          <SelectButton onClick={(e) => onToggle(e)}>
            <Label text={optionText} weight={300} size={15} lineHeight={'18.72px'} />
          </SelectButton>
          {toggle && options && (
            <ToggleBox>
              <OptionList>
                {options.map((option, index) => (
                  <OptionItem key={index} onClick={() => setOption(option.name, option.value)}>
                    <Label
                      text={option.name}
                      weight={300}
                      size={15}
                      lineHeight={'18.72px'}
                      textAlign={'center'}
                    />
                  </OptionItem>
                ))}
              </OptionList>
            </ToggleBox>
          )}
        </SelectBox>
      </SelectContainer>
      <TextContainer>
        <NameContainer>
          <Label text={'이름'} weight={'medium'} size={15} />
        </NameContainer>
        <DateContainer>
          <Label text={'생년월일'} weight={'medium'} size={15} />
        </DateContainer>
      </TextContainer>
      <ListContainer>
        {!isCheck &&
          checkedUser.map((item) => (
            <ListTile key={nanoid()} item={item} isCheck={isCheck} getUser={getUser} />
          ))}
      </ListContainer>
      {!isCheck && !router.pathname.includes('/user') && (
        <SaveButton onClick={onSave}>
          <Label
            text={'저장하기'}
            size={15}
            weight={300}
            lineHeight={'18.72px'}
            textAlign={'center'}
            color={'#fff'}
          />
        </SaveButton>
      )}
    </ContentContainer>
  );
};

export default ViewCheckedList;

const ContentContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 250px;
  height: 490px;
  background-color: #fff;
`;
const SelectContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  min-height: 43px;
  background-color: rgba(203, 197, 240, 0.5);
  padding: 20px 20px 12.5px 20px;
`;
const SelectBox = styled.div`
  position: relative;
  width: 82px;
  height: 29px;
  border-radius: 3px;
  border: none;
  background: url('/image/dropdown.png') calc(100% - 7px) center no-repeat #ffffff;
  background-size: 11px;
  cursor: pointer;

  :after {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 35px;
  }
`;
const SelectButton = styled.button`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  border: 0 none;
  outline: 0 none;
  background: transparent;
  cursor: pointer;
`;

const ToggleBox = styled.div`
  display: flex;
  height: 100%;
`;

const OptionList = styled.ul`
  position: absolute;
  top: 12px;
  left: 0;
  width: 100%;
  background: #fff;
  color: #fff;
  list-style-type: none;
  padding: 0;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const OptionItem = styled.li`
  padding: 6.3px 0;
`;

const TextContainer = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  padding: 10px 20px;
  background-color: rgba(203, 197, 240, 0.5);
  justify-content: left;
  align-items: center;
`;
const NameContainer = styled.div`
  width: 90px;
`;

const DateContainer = styled.div`
  flex-grow: 1;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 250px;
  overflow-y: auto;
`;
const SaveButton = styled.button`
  width: 210px;
  height: 35px;
  left: 1053px;
  top: 760px;
  background: #4130be;
  border: none;
  border-radius: 3px;
  margin: 20px 20px 25px 20px;
`;
