function smallestCommons(arr) {

  var sumVar = [];
  for(i=Math.min.apply(null, arr);i<Math.max.apply(null, arr)+1;i++){
   sumVar.push(i);
  }

 return sumVar;
}


smallestCommons([3,9]);
