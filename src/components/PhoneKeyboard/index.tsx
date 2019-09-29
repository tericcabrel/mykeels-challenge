import React from 'react';
import { Row, Col, Input } from 'reactstrap';

import './phone-keyboard.css';
import KeyboardButton from "./keyboard-button";
import { IPhoneKeyboard } from "../../types/components";
import { KeyboardButtonType } from "../../types/data";

const keyboardButtonData: KeyboardButtonType[] = [
  { number: '1', letter: ' ' },
  { number: '2', letter: 'ABC' },
  { number: '3', letter: 'DEF' },
  { number: '4', letter: 'GHI' },
  { number: '5', letter: 'JKL' },
  { number: '6', letter: 'MNO' },
  { number: '7', letter: 'PQRS' },
  { number: '8', letter: 'TUV' },
  { number: '9', letter: 'WXYZ' },
];

const keyboardButtonReset: KeyboardButtonType = { letter: 'RESET', number: 'x' };

const PhoneKeyboard: React.FC<IPhoneKeyboard> = ({ onClick, value }) => {
  return (
    <Row>
      <Col lg="12">
        <div className="phone-keyboard">
          <div className="keyboard-output">
            <Input placeholder="keyboard output" value={value} readOnly={true} className="input-keyboard" />
          </div>
          <div className="keyboard pt-5">
            {
              keyboardButtonData.map((keyBtn: KeyboardButtonType, index: number) => (
                <KeyboardButton
                  key={`key-btn-${index}`}
                  value={keyBtn}
                  onClick={onClick}
                />
              ))
            }
          </div>
          <div className="keyboard-reset">
            <KeyboardButton value={keyboardButtonReset} onClick={onClick}/>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PhoneKeyboard;
