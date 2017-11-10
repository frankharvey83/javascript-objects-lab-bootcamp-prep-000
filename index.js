var recipes = new Object ();

function updateObjectWithKeyAndValue(object, key, value)  {
  var object = [key, value]
  return Object.assign ({}, object, key, value)
}
