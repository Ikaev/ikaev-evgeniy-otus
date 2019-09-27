let totalAmount = 0;
function sum (num) {
    if (num) {
        totalAmount += num;
        return sum
    } else {
        return totalAmount;
    }
}
console.log(sum(1)(3)(5)());
