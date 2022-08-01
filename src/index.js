module.exports = function reverse(n) {
    let n2 = Math.abs(n);
    let StringArray = String(n2).split("");
    let reverseString = StringArray.reverse();
    let TempReverse = reverseString.join("");
    return Number(TempReverse);
};
