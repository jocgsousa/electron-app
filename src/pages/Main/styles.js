import styled from 'styled-components';

export const Container = styled.div`
  background-color: #dddd;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  input,
  button {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const Nick = styled.input.attrs({
  type: 'text',
  placeholder: 'Usuário',
})`
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: #ffff;
  padding-left: 10px;
`;

export const Password = styled.input.attrs({
  type: 'password',
  placeholder: 'Sua senha',
})`
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: #ffff;
  padding-left: 10px;
`;

export const ButtonLogin = styled.button.attrs({
  type: 'button',
})`
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: #ffff;
  padding-left: 10px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: #0099ff;
    color: white;
  }
`;

export const ButtonLoginText = styled.span``;
