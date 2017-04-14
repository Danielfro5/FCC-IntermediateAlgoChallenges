

function convertToRoman(num) {

 var fAns = "";
 var bNum = num;
 while(bNum>0){
 switch(true){
   case (bNum >= 1000):
     bNum -= 1000;
     fAns += "M";
     break;
   case (bNum >= 900):
     bNum -= 900;
     fAns += "CM";
     break;
   case (bNum >= 500):
     bNum -= 500;
     fAns += "D";
     break;
   case (bNum >= 400):
     bNum -= 400;
     fAns += "CD";
     break;
   case (bNum >= 100):
     bNum -= 100;
     fAns += "C";
     break;
   case (bNum >= 90):
     bNum -= 90;
     fAns += "XC";
     break;
   case (bNum >= 50):
     bNum -= 50;
     fAns += "L";
     break;
   case (bNum >= 40):
     bNum -= 40;
     fAns += "XL";
     break;
   case (bNum >= 10):
     bNum -= 10;
     fAns += "X";
     break;
   case (bNum >= 9):
     bNum -= 9;
     fAns += "IX";
     break;
   case (bNum >= 5):
     bNum -= 5;
     fAns += "V";
     break;
   case (bNum >= 4):
     bNum -= 4;
     fAns += "IV";
     break;
   case (bNum >= 1):
     bNum -= 1;
     fAns += "I";
     break;
 }

   }
 return fAns;
}

convertToRoman(97);
