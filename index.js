function reverse(num) {
    let dig = Math.abs(num);  
    let number = String(dig);
    let j = '';
   for (i=0; i < number.length; i++) {
       j = `${number[i]}${j}`;  
}
return j; 
}
