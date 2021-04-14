import React, { Component } from 'react';
import {
  RiCheckboxBlankLine,
  RiCloseLine,
  RiSubtractLine,
  RiCheckboxBlankCircleFill,
  RiCheckboxMultipleBlankLine,
} from 'react-icons/ri';
import {
  Bar,
  Col,
  BtnMin,
  BtnMax,
  BtnClose,
  BtnCloseMac,
  Title,
} from './styles';

const electron = window.require('electron').remote;
const windows = electron.getCurrentWindow();

export default class BarTop extends Component {
  state = {
    maximizeIcon: <RiCheckboxBlankLine />,
  };

  componentDidMount = () => {
    // Evento de resize da janela principal
    // Controlo aqui a troca do icone [Maximize]
    windows.addListener('resize', () => {
      if (windows.isMaximized())
        this.setState({ maximizeIcon: <RiCheckboxMultipleBlankLine /> });
      else this.setState({ maximizeIcon: <RiCheckboxBlankLine /> });
    });
  };

  resizeWindow = () => {
    if (windows.isMaximized()) windows.restore();
    else windows.maximize();
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { maximizeIcon } = this.state;
    return (
      <>
        {process.platform === 'darwin' ? (
          <>
            <Bar>
              <Col>
                <BtnCloseMac
                  onClick={() => {
                    windows.close();
                  }}
                >
                  <RiCheckboxBlankCircleFill size={14} color="#ff6666" />
                </BtnCloseMac>
                <BtnMin
                  onClick={() => {
                    windows.minimize();
                  }}
                >
                  <RiCheckboxBlankCircleFill size={14} color="orange" />
                </BtnMin>
                <BtnMax onClick={() => this.resizeWindow()}>
                  <RiCheckboxBlankCircleFill size={14} color="green" />
                </BtnMax>
              </Col>

              <Title>Título</Title>
            </Bar>
          </>
        ) : (
          <Bar>
            <Title>Título</Title>
            <Col>
              <BtnMin
                onClick={() => {
                  windows.minimize();
                }}
              >
                <RiSubtractLine size={14} />
              </BtnMin>
              <BtnMax onClick={() => this.resizeWindow()}>
                {maximizeIcon}
              </BtnMax>
              <BtnClose
                onClick={() => {
                  windows.close();
                }}
              >
                <RiCloseLine size={14} />
              </BtnClose>
            </Col>
          </Bar>
        )}
      </>
    );
  }
}
