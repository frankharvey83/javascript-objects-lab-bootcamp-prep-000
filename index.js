var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value)  {
  var object = { key: value };
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var object = { key: value };
  object.newkey = "newvalue";
}

function deleteFromObjectByKey(object, key, value){
  var object = {}
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  var object = { key: value };
  delete object.key;
  return object;
}
