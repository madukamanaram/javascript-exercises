const reverseString = function(str) {
    let newStr = "";
    let charCount = str.length;
    
    for (let index = charCount -1  ;0 <= index ; index--) {
        let element = str[index];
        newStr += element;

    }
    return newStr;
};

console.log(reverseString("hello"))





// Do not edit below this line
module.exports = reverseString;
