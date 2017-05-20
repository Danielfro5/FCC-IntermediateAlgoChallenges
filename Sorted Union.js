function uniteUnique(arr) {
  var newArr = [];
  var uniqueArr = [];
  for(i=0;i<arguments.length;i++){
  newArr = newArr.concat(arguments[i]);
  }

  uniqueArr = newArr.filter(function(element, index){
   return newArr.indexOf(element) == index;
  });

  return uniqueArr;
}




uniteUnique([1, 3, 3], [5, 2, 1, 4], [2, 1]);
