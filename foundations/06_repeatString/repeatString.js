const repeatString = function(givingString , count) {
    if (count<0) return "ERROR";
    

    let str = "";
    for(let x = 0;  x <count; x++){
         str = str + givingString;
    }
    return str;
}

repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;

