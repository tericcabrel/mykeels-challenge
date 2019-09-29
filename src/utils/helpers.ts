import { ContactType, KeyboardButtonType } from "../types/data";

export const keyboardButtonData: KeyboardButtonType[] = [
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

export const filterContacts = (contacts: ContactType[], keyword: string): ContactType[] => {
  let regexString = '';

  for (let i = 0; i < keyword.length; i += 1) {
    regexString += `[${keyboardButtonData.find((keyBtn) => keyBtn.number === keyword.charAt(i))!.letter}]{1}`
  }
  // console.log(regexString);

  const regex = new RegExp(regexString, 'ig');

  return contacts.filter(contact => regex.exec(contact.name.substring(0, keyword.length)) !== null);
};
