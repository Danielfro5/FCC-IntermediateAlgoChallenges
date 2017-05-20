function gcd(a, b){{if ( ! b) {return a;} return gcd(b, a % b);}}


function smallestCommons(arr) {
//create Range
  var arrRange = [];
for(i=Math.min.apply(null, arr);i<Math.max.apply(null, arr)+1;i++){
 arrRange.push(i);
}

//(lcm of first two numbers)LCM = num1 * num2 /  gcd ( num1 , num2 )
  var gcdResult = gcd(arrRange[0],arrRange[1]);
  var answer = arrRange[0] * arrRange[1] / gcdResult;

//(lcm of more than two numbers)LCM(num1,num2,num3) = lcm(num1,lcm(num2,num3))

  return answer;
}


smallestCommons([10,15]);
