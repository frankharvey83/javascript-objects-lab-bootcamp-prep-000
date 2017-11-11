var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value)  {
  var object3 = { [key]: value }
  var object2 = Object.assign (object3, object)
  return object2;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var object = { [key]: value };
  object.key = value;
  return object;
}

function deleteFromObjectByKey(object, key, value)  {
  var object = { key: value };
  var object2 = Object.assign ({}, object)
  delete object2.key;
  return object2;
}

function destructivelyDeleteFromObjectByKey(object, key, value) {
  var object = { key: value };
  delete object.key;
  return object;
}
