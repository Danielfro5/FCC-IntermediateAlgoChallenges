
function spinalCase(str) {
  var finalAnswer;
  str = str.replace(/[ _]/g,"-");
    var strCaps = str.match(/[A-Z]/g);
    for(i=0;i<strCaps.length;i++)  {
      var index = str.indexOf(strCaps[i]);
      if(str.charAt(index-1)!=="-"){
         str = str.slice(0,index) + "-" + str.slice(index);
      }
    }
  if(str.charAt(0)=="-"){str = str.slice(1);}
  return str.toLowerCase();
}
spinalCase("AllThe-small Things");
