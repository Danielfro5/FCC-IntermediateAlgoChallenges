//noprotection
function sumFibs(num) {
  var fibArr = [1,1];
  var fibSum = 0;

  for(i=0;i<=num;i++){

  var fibNext = fibArr[i] + fibArr[i+1];
  if(fibNext<=num){
  fibArr = fibArr.concat(fibNext);
  }
  }

  fibArr = fibArr.filter(function(val){
    return val % 2;
  });

  for(i=0;i<fibArr.length;i++){
   fibSum = fibSum + fibArr[i];
  }


 return fibSum;
  }



sumFibs(75025);
