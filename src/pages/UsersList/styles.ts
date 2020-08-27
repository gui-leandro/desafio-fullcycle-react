import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: black;
`;

export const Button = styled.button`
  width: 200px;
  background: purple;
  color: white;
  font-weight: 700;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;

  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 80%;
  }
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 11px;
`;