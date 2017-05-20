
function convertHTML(str) {
  var htmlEnt1 = [/&/g, /</g, />/g, /"/g, /'/g];
  var htmlEnt2 = ["&amp;", "&lt;", "&gt;","&quot;", "&apos;"];

  for(i=0;i<htmlEnt2.length;i++){
    str = str.replace(htmlEnt1[i],htmlEnt2[i]);
  }


  //;
  return str;
}

convertHTML('Stuff in "quotation marks"');
