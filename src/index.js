// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
  return propertyName
};

const createNotEnumerableProperty = (propertyName) => {};

const createProtoMagicObject = () => {
  let magic = () => {};
  magic.prototype = magic.__proto__;
  return magic;
};

const incrementor = (() => {
  let counter = 0;
  const fc = () => {
    counter++;
    return fc;
  };

  fc.valueOf = () => counter;
  return fc;
})();

const asyncIncrementor = (() => {
  let counter = 0;
  const fc = () => {
    counter++;
    return new Promise((resolve, reject) => resolve(fc));
  };

  fc.valueOf = () => counter;
  return fc;
})();

const createIncrementer = function* () {
  let counter = 1;
  while (true) {
    yield counter++;
  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(param) }, 1001)
  })
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (arr) => {
  return arr.sort((a, b) => a.__proto__ - b.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;