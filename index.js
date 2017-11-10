var recipes = new Object ();

function updateObjectWithKeyAndValue(object, key, value)  {
  var object = [key, value]
  Object.assign ({}, object, key, value)
  return object
}
