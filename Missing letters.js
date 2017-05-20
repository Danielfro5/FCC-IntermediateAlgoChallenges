
function fearNotLetter(str) {
  var answer;
  if (str[0] !== String.fromCharCode(97)){
    return undefined;
  }

  for(i=0;i<str.length;i++){
    var e = i + 97;
    if(str[i] !== String.fromCharCode(e)){
      return String.fromCharCode(e);
    }
  }


}

fearNotLetter("abcdefghjklmnop");
