import React from 'react';
import './App.css';
import { Col, Row } from "reactstrap";
import PhoneKeyboard from "./components/PhoneKeyboard";
import ContactList from "./components/ContactList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Row>
        <Col lg={{ size: 4, offset: 2 }}>
          <PhoneKeyboard />
        </Col>
        <Col lg="4">
          <ContactList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
