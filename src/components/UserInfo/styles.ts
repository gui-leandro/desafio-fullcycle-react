import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
`;

export const UserInfos = styled.div`
  display: flex;
  background: #dcdcdc;
  padding: 15px;
  border-radius: 15px;

  > img {
    border-radius: 15px;
    margin-right: 10px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 35px;
`;
