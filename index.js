var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value)  {
  var object = { key: value };
  var object2 = Object.assign ({}, object)
  return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var object = { key: value };
  return object;
}
const object2 = { key2: value2}

destructivelyUpdateObjectWithKeyAndValue(object2, key, value)


function deleteFromObjectByKey(object, key, value){
  var object = { key: value };
  var object2 = Object.assign ({}, object)
  delete object2.key;
  return object2;
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  var object = { key: value };
  delete object.key;
  return object;
}
