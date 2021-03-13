module.exports = function reverse (num) {
    let numb = Math.abs(num);
    let arr = numb.toString().split("");
    let j = arr.reverse().join("");
    return Number(j);
}
