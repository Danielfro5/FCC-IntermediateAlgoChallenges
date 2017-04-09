
function convertToRoman(num) {

 var fAns = "";
 var bNum = num;
 while(bNum>0){
 switch(true){
   case (bNum >= 1000):
     bNum -= 1000;
     fAns += "M";
     break;
   case (bNum >= 900 && bNum < 1000):
     bNum -= 900;
     fAns += "CM";
     break;
   case (bNum >= 500 && bNum < 900):
     bNum -= 500;
     fAns += "D";
     break;
   case (bNum >= 400 && bNum < 500):
     bNum -= 400;
     fAns += "CD";
     break;
   case (bNum >= 100):
     bNum -= 100;
     fAns += "C";
     break;
   case (bNum >= 90 && bNum < 100):
     bNum -= 90;
     fAns += "XC";
     break;
   case (bNum >= 50 && bNum < 90):
     bNum -= 50;
     fAns += "L";
     break;
   case (bNum >= 40 && bNum < 50):
     bNum -= 40;
     fAns += "XL";
     break;
   case (bNum >= 10 && bNum < 40):
     bNum -= 10;
     fAns += "X";
     break;
   case (bNum >= 9 && bNum < 10):
     bNum -= 9;
     fAns += "IX";
     break;
   case (bNum >= 5 && bNum < 10):
     bNum -= 5;
     fAns += "V";
     break;
   case (bNum >= 4 && bNum < 5):
     bNum -= 4;
     fAns += "IV";
     break;
   case (bNum >= 1 && bNum < 5):
     bNum -= 1;
     fAns += "I";
     break;
 }

   }
 return fAns;
}

convertToRoman(97);

/*
 var romNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
 var decNum = [1, 4, 5, 9, 10, 40, 50, 60, 100, 400, 500, 900, 1000];

*/
