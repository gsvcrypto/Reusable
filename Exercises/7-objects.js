'use strict';

const fn = () => {
  const obj1 = { name: 'NAME1' };
  let obj2 = { name: 'NAME2' };


  obj1.name = 'NEW NAME';

  obj2.name = 'NEW NAME';

  const obj3 = { name: 'NAME3' };

  //obj1 = obj3; -- not allowed to assign
  //console.log(obj1.name);

  obj2 = obj3;
  console.log('obj2.name = ' + obj2.name);
};

module.exports = { fn };
