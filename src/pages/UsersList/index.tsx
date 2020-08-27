import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UserInfo, { User } from '../../components/UserInfo';
import api from '../../services/api';

import { Container, Button, UserList } from './styles';

const UsersList: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      api.get('')
        .then(res => { setUsers(res.data.data); })
        .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Link to="/"><Button>Back</Button></Link>
      <UserList>
        {users.length === 0 
          ? (
              <p>
                Loading...
              </p>
            )
          : (users.map((user: User) => 
            <UserInfo 
              key={user.id}
              id={user.id}
              email={user.email}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
            />
          ))
        }
      </UserList>
    </Container>
  );
}

export default UsersList;