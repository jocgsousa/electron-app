import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-app-region: drag;
  user-select: none;
  height: 30px;
`;

export const Col = styled.div`
  size: ${(props) => (props.size ? props.size : 1)};
`;

export const BtnMin = styled.button`
  -webkit-app-region: no-drag;
  width: 50px;
  height: 30px;
  border: none;
  outline: none;
  background: #ffff;
  transition: all 0.2s;
  &:hover {
    background: #dddd;
    transition: all 0.2s;
  }
`;

export const BtnMax = styled.button`
  -webkit-app-region: no-drag;
  width: 50px;
  height: 30px;
  border: none;
  outline: none;
  background: #ffff;
  transition: all 0.2s;
  &:hover {
    background: #dddd;
    transition: all 0.2s;
  }
`;

export const BtnClose = styled.button`
  -webkit-app-region: no-drag;
  width: 50px;
  height: 30px;
  border: none;
  outline: none;
  background: #ffff;
  transition: all 0.2s;
  &:hover {
    background: #ff0033;
    transition: all 0.2s;
    color: #ffff;
  }
`;