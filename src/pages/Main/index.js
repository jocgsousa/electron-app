import React from 'react';

import {
  Container,
  Form,
  Nick,
  Password,
  ButtonLogin,
  ButtonLoginText,
} from './styles';

function Main() {
  return (
    <Container>
      <h1>Login</h1>
      <hr />
      <Form>
        <Nick />
        <Password />
        <ButtonLogin>
          <ButtonLoginText>Entrar</ButtonLoginText>
        </ButtonLogin>
      </Form>
    </Container>
  );
}

export default Main;
