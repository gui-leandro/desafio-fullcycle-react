import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Link to="/users"><Button>Users List</Button></Link>
    </Container>
  );
}

export default Home;