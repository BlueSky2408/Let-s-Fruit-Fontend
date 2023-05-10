import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from '../components/Loader/Loader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=600")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


const Login = ({ setToken }) => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  const database = [
    {
      username: "LetsFruitAdmin",
      password: "12345"
    },
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  // form function
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);

    
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <Container>
      <Loader />
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            value={username}
            onChange={(e) => setUser(e.target.value)}
            placeholder="username"
            required
          />
          {renderErrorMessage("username")}
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            required
          />
          {renderErrorMessage("password")}
          <Link to="/admin"><Button>
            LOGIN
          </Button></Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login