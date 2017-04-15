
function translatePigLatin(str) {

  if(/[aeiou]/.test(str.charAt(0))){
    str += "way";
  }
  else if(/[bcdfghjklmnpqrstvwxyz]{2,}/.test(str.slice(0,2))){
    str = str + str.charAt(0) + str.charAt(1) + "ay";
    str = str.slice(2,str.length);

  }
  else
  {
    str = str + str.charAt(0) + "ay";
    str = str.slice(1,str.length);
  }
  return str;
}

translatePigLatin("glove");
