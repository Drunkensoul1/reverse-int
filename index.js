function reverse(num) {
   let number = String(num);
   let j = '';
   for (i=0; i < number.length; i++) {
       j = `${number[i]}${j}`;
   }
   return Number(j);
 }
console.log(reverse(321));