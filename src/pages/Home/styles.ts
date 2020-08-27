import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: black;
`;

export const Button = styled.button`
  width: 400px;
  background: purple;
  color: white;
  font-weight: 700;
  font-size: 18pt;
  padding: 20px;
  border-radius: 5px;
  border: none;

  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 80%;
  }
`;