import React, { useState } from 'react';
import './App.css';
import { Col, Row } from "reactstrap";
import PhoneKeyboard from "./components/PhoneKeyboard";
import ContactList from "./components/ContactList";
import { KeyboardButtonType } from "./types/data";

const App: React.FC = () => {
  const [keyboardValue, setKeyboardValue] = useState('');
  const [contacts, setContacts] = useState({});

  const handleKeyboardClick = (keyboardButton: KeyboardButtonType) => {
    if (keyboardButton.number === 'x') {
      setKeyboardValue('');
    } else {
      setKeyboardValue(`${keyboardValue}${keyboardButton.number}`);
    }
  };

  return (
    <div className="App">
      <Row>
        <Col lg={{ size: 4, offset: 2 }}>
          <PhoneKeyboard value={keyboardValue} onClick={ (value: KeyboardButtonType) => handleKeyboardClick(value) } />
        </Col>
        <Col lg="4">
          <ContactList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
