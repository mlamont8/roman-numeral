 var RNumeral = [];
 var digits;

 function convert(num) {
     //find initial length of number
     var size = num.toString().length;
     digits = num;
     console.log(digits);
     switch (size) {
     case 4:
         four(digits);
         break;
     case 3:
         three(digits);
         break;
     case 2:
         two(digits);
         break;
     case 1:
         one(digits);
         break;
     }
     var result = RNumeral.join("");
     console.log(result);
     return result;

 }
 //convert function
 function firstNum(num) {

     digits = ("" + num).split("");
     var n = parseInt(digits[0], 10);
     console.log(digits);
     //var strip = digits.splice(1, digits.length);
     //digits = strip;
     //console.log(digits);
     digits.splice(0, 1);
     console.log(digits);
     //   console.log(n);
     return n;


 }
 //if 4 digits long
 function four(digits) {
     var n = firstNum(num);
     while (n > 0) {
         RNumeral.push("M");
         n--;
     }
     three(digits);
 }

 function three(digits) {
     var n = firstNum(digits);
     //  console.log(n);
     switch (n) {
     case 9:
         RNumeral.push("CM");
         break;
     case 8:
         RNumeral.push("CCM");
         break;
     case 7:
         RNumeral.push("DCC");
         break;
     case 6:
         RNumeral.push("DC");
         break;
     case 5:
         RNumeral.push("D");
         break;
     case 4:
         RNumeral.push("CD");
         break;
     case 3:
         RNumeral.push("CCD");
     case 0:
         break;
     default:
         for (i = 0; i < n; i++) {
             RNumeral.push("D");
         }

     }
     //    digits.splice(0, 1);
     two(digits);
     console.log(digits);
 }

 function two(digits) {
     console.log(digits);
     var n = firstNum(digits);
     switch (n) {
     case 9:
         RNumeral.push("XC");
         break;
     case 8:
         RNumeral.push("XXC");
         break;
     case 7:
         RNumeral.push("LXX");
         break;
     case 6:
         RNumeral.push("LX");
         break;
     case 5:
         RNumeral.push("L");
         break;
     case 4:
         RNumeral.push("XL");
         break;
     case 3:
         RNumeral.push("XXL");
     case 0:
         break;
     default:
         //    console.log(n);
         // var tArray = [];
         for (i = 0; i < n; i++) {
             RNumeral.push("X");
         }

     }
     //12
     //   console.log(digits);
     one(digits);
 }

 function one(digits) {
     console.log(digits);
     var n = firstNum(digits);
     switch (n) {
     case 9:
         RNumeral.push("IX");
         break;
     case 8:
         RNumeral.push("IIX");
         break;
     case 7:
         RNumeral.push("VII");
         break;
     case 6:
         RNumeral.push("VI");
         break;
     case 5:
         RNumeral.push("V");
         break;
     case 4:
         RNumeral.push("IV");
         break;
     case 3:
         RNumeral.push("IIV");
     case 0:
         break;
     default:
         for (i = 0; i < n; i++) {
             RNumeral.push("I");

         }



     }
     return RNumeral;
 }

 convert(123);