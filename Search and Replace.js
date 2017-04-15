
function myReplace(str, before, after) {
  str = str.split([" "]);
  
  if (before.charAt(0) == before.charAt(0).toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
     }else after = after.charAt(0).toLowerCase() + after.slice(1);


  for(i=0;i<str.length;i++){
    if(str[i]==before){
        str[i] = after;
  }
  }


  str = str.join(" ");
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
