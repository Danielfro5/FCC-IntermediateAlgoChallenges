
function sumAll(arr) {
  var highestNumber = Math.max.apply(null, arr);
  var lowestNumber = Math.min.apply(null, arr);
  var sumVar = 0;

  for(sum=lowestNumber;sum<highestNumber+1;sum++){
   sumVar = sumVar + sum;

  }
 return sumVar;
}

sumAll([1, 4]);
