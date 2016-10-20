function convertToBinary(num) {
    var array = num.toString().split("").reverse();
    var result = 0;
    for(var i = 0; i < array.length; i++){
        result += parseInt(array[i] * (Math.pow(2, i)));
    }
    return (result);
}

console.log(convertToBinary(1100110));
console.log(convertToBinary(10100011));
console.log(convertToBinary(101101));
console.log(convertToBinary(110100101010));
console.log(convertToBinary(11101111));
console.log(convertToBinary("01000010"));