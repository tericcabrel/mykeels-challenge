import React from 'react';

import { IKeyboardButton } from "../../types/components";

const KeyboardButton: React.FC<IKeyboardButton> = ({ value, onClick }) => {
  return (
    <div className="keyboard-button btn btn-outline-light" onClick={ () => onClick(value)}>
      <div className="number">{value.number}</div>
      <div className="letter">{value.letter}</div>
    </div>
  );
};

export default KeyboardButton;
