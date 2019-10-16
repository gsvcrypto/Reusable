'use strict';


const phonebook = {
  'Marcus': '+380445554433',
  'Peter': '+380661111111',
  'Antonio': '+3805078978999',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
