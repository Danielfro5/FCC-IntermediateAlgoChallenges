
function pairElement(str) {

  var pairReturn = [];
  var pairArr1 = [["A","T"],["T","A"],["G","C"],["C","G"]];

  for(i=0;i<str.length;i++){
    switch(true){
      case(str[i]=="A"):
        pairReturn.push(pairArr1[0]);
        break;
      case(str[i]=="T"):
        pairReturn.push(pairArr1[1]);
        break;
      case(str[i]=="G"):
        pairReturn.push(pairArr1[2]);
        break;
      case(str[i]=="C"):
        pairReturn.push(pairArr1[3]);
        break;
    }
  }
  return pairReturn;
}

pairElement("ATCGA");
