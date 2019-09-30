function sum (num) {
    let totalAmount = 0;
    function increaseTotalAmount(num) {
        if (num || num === 0) {
            totalAmount += num
        }
        return increaseTotalAmount;
    }
    return increaseTotalAmount(num)
}
console.log(sum(0)(8)());
