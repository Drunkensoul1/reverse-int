function reverse(num) {
    let number = Math.abs(num);
    let arr = number.toString().split("");
    let j = arr.reverse().join("");
    return j;
}
console.log(reverse(-321));
