import React from 'react';
import { Row, Col, Input } from 'reactstrap';

import KeyboardButton from "./keyboard-button";

import { IPhoneKeyboard } from "../../types/components";
import { KeyboardButtonType } from "../../types/data";

import { keyboardButtonData } from "../../utils/helpers";

import './phone-keyboard.css';

const keyboardButtonReset: KeyboardButtonType = { letter: 'RESET', number: 'x' };
const keyboardButtonDelete: KeyboardButtonType = { letter: 'DELETE', number: '<' };

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
            <KeyboardButton value={keyboardButtonDelete} onClick={onClick}/>
            <KeyboardButton value={keyboardButtonReset} onClick={onClick}/>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PhoneKeyboard;
