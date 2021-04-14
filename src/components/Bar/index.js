import React from 'react';

import { Bar, Col, BtnMin, BtnMax, BtnClose } from './styles';

export default function BarTop() {
  return (
    <Bar>
      <Col>Title</Col>

      <Col>
        <BtnMin>_</BtnMin>
        <BtnMax>[]</BtnMax>
        <BtnClose>X</BtnClose>
      </Col>
    </Bar>
  );
}
