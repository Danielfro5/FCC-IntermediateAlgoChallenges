function findElement(arr, func) {
  var num = arr[0];
  if(func(arr[0])){
    return "wawewowa";
  }

}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
