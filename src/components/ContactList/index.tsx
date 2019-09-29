import React from 'react';
import { Row, Col, Badge, ListGroupItem, ListGroup } from 'reactstrap';

import './contact-list.css';

const ContactList: React.FC = () => {
  return (
    <Row>
      <Col lg="12">
        <div className="contact-list">
          <div className="contact-list-header d-flex justify-content-between align-items-center mb-4">
            <div className="font-weight-bold">Contact list</div>
            <Badge color="success">14</Badge>
          </div>
          <div className="contact-list-body">
            <ListGroup>
              <ListGroupItem className="d-flex flex-column">
                <span className="name">Eric Cabrel TIOGO</span>
                <span className="number small">693642889</span>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ContactList;
