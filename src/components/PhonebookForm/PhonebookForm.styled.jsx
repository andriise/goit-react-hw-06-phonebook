import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 18px;
  color: white;
  font-weight: lighter;
`;

export const Input = styled.input`
  font-size: 1.25rem;
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

export const Button = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  font-weight: lighter;
  width: 130px;
  height: 35px;
  color: white;
  background-color: hsl(205, 80%, 50%, 0.4);
  border: 1px solid hsl(200, 100%, 50%);
  border-radius: 0.25em;
  outline: none;
  cursor: pointer;
  text-align: center;

  &:hover,
  &:focus {
    background-color: hsl(200, 100%, 50%, 0.4);
  }
`;
