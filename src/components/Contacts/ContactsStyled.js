import styled from 'styled-components';
import { MdDelete as Delete } from 'react-icons/md';

export const UlStyle = styled.ul`
  padding: 0;
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const LiStyle = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const UlStyleContactList = styled.ul`
  padding: 0;
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-direction: column;
`;

export const ButtonDel = styled.button`
  margin-left: 10px;
  width: 30px;
  height: 17px;
  cursor: pointer;
  padding: 0;
  border: 1px solid black;
  :hover {
    background-color: white;
  }
`;
export const MdDelete = styled(Delete)`
  width: 100%;
  height: 100%;
`;
