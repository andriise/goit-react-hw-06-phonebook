import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: lighter;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5em;
  background-color: hsl(200, 100%, 91%, 0.3);
  border: none;
  outline: none;
  border-radius: 0.25em;
  color: white;
  font-weight: lighter;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 1px hsl(200, 100%, 50%);
  }
`;
