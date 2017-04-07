function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var finalArr = [];
  for(i=0;i<newArr.length;i++){
    if(!finalArr.includes(newArr[i])){
      finalArr.push(newArr[i]);
    } else if(finalArr.includes(newArr[i])){
      //somehow filter out newArr[i]
      finalArr = finalArr.filter(function(val){
        return val !== newArr[i];
      });
    }
  }
  return finalArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
