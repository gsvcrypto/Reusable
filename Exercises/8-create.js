'use strict';

const createUser = (name, city) => (
  {
    name,
    city,
  }
);

//const object = createUser('Marcus', 'Roma');
//console.log(object);

module.exports = { createUser };
