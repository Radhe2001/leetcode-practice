// this problem has been solved

var lengthOfLastWord = function (s) {
    s = s.trim()
    let arr = s.split(" ");
    return arr[arr.length-1].length;
};
console.log(lengthOfLastWord('   fly me   to   the moon  '));