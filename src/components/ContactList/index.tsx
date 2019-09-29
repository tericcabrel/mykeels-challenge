import React from 'react';
import { Row, Col, Badge, ListGroupItem, ListGroup } from 'reactstrap';

import { IContactList } from "../../types/components";
import { ContactType } from "../../types/data";

import './contact-list.css';

const ContactList: React.FC<IContactList> = ({ data }) => {
  return (
    <Row>
      <Col lg="12">
        <div className="contact-list">
          <div className="contact-list-header d-flex justify-content-between align-items-center mb-4">
            <div className="font-weight-bold">Contact list</div>
            <Badge color="success">{ data.length }</Badge>
          </div>
          <div className="contact-list-body">
            <ListGroup>
              {
                data.map((item: ContactType, index: number) => (
                  <ListGroupItem className="d-flex flex-column" key={`contact-${index}`}>
                    <span className="name">{ item.name }</span>
                    <span className="number small">{ item.phone }</span>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ContactList;
