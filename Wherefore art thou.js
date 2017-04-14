
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  // Only change code below this line
  var propName = Object.getOwnPropertyNames(source);
  //

  for(i=0;i<collection.length;i++){
      if(propName.length>1){
        if(collection[i].hasOwnProperty(propName[0]) &&        collection[i].hasOwnProperty(propName[1])){
       var arr1 = collection[i][propName];
       var arr2 = source[propName];
       if(arr1===arr2){
        arr = arr.concat(collection[i]);
       }
     }
      }else{
        if(collection[i].hasOwnProperty(propName[0]) ){
       var arr1 = collection[i][propName];
       var arr2 = source[propName];
       if(arr1===arr2){
        arr = arr.concat(collection[i]);
       }
     } }

  }
  // Only change code above this line
  return arr;
}




whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });// should return [{ "a": 1, "b": 2, "c": 2 }]
