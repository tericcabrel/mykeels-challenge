import React, { useState, useEffect } from 'react';
import { Col, Row } from "reactstrap";

import PhoneKeyboard from "./components/PhoneKeyboard";
import ContactList from "./components/ContactList";

import { ContactType, KeyboardButtonType } from "./types/data";

import './App.css';

const App: React.FC = () => {
  const [keyboardValue, setKeyboardValue] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/contact.json')
      .then((response: Response) => response.json())
      .then((data: any) => {
        // console.log(data);
        setContacts(data);
      })
      .catch((error: any) => {
      console.error(error);
    });

  }, []);

  const handleKeyboardClick = (keyboardButton: KeyboardButtonType) => {
    if (keyboardButton.number === 'x') {
      setKeyboardValue('');
    } else {
      setKeyboardValue(`${keyboardValue}${keyboardButton.number}`);
    }
  };

  const filterContacts = (contacts: ContactType[], keyword: string): ContactType[] => {
    if (keyword.length > 0) {
      return contacts;
    }

    return contacts;
  };

  return (
    <div className="App">
      <Row>
        <Col lg={{ size: 4, offset: 2 }}>
          <PhoneKeyboard
            value={keyboardValue}
            onClick={ (value: KeyboardButtonType) => handleKeyboardClick(value) }
          />
        </Col>
        <Col lg="4">
          <ContactList
            data={filterContacts(contacts, keyboardValue)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
