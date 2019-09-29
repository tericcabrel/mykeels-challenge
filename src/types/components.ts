import {ContactType, KeyboardButtonType} from "./data";

export interface IKeyboardButton {
  value: KeyboardButtonType;
  onClick: (value: KeyboardButtonType) => void;
}

export interface IPhoneKeyboard {
  value: string;
  onClick: (value: KeyboardButtonType) => void;
}

export interface IContactList {
  data: ContactType[];
}
