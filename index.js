function reverse(num) {
    let dig = Math.abs(num);  
    let number = String(dig);
    let j = '';
   for (i=0; i < number.length; i++) {
       j = `${number[i]}${j}`;

       if ( num < 0 && i == number.length ) {
        return Number(-j); 
       }     
      
   }
   return Number(j);  
 }

console.log(reverse(-321122));