'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+80445554433' },
  { name: 'Antonio', phone: '+80334442211' },
  { name: 'Serhio',  phone: '+80473654421' },
];

const findPhoneByName = name => {
  for (const pers of phonebook) {
    if (pers.name === name) return pers.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
