import React from 'react';

import { Container, UserInfos, UserData } from './styles';

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UserInfo: React.FC<User> = (props) => {
  const {id, email, first_name, last_name, avatar} = props;
  
  return (
    <Container>
        <UserInfos>
            <img src={avatar} alt="Foto do usuário"/>
            <UserData>
                <p>ID: {id}</p>
                <p>Email: {email}</p>
                <p>Name: {first_name} {last_name}</p>
            </UserData>
        </UserInfos>
    </Container>
  );
};

export default UserInfo;