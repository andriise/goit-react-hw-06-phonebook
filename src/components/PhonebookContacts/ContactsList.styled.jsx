import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  color: azure;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  font-size: 15px;
  color: azure;
`;

export const ButtonDel = styled.button`
  padding: 2px;
  text-align: center;
  width: 50px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  border: 1px solid rgb(19 130 183);

  &:hover,
  &:focus {
    background-color: rgb(90 182 228 / 40%);
    border: 1px solid rgb(141 209 241);
  }
`;
