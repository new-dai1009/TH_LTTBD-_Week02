function addLargeNumbers(num1, num2) {
    let result = '';
    let carry = 0;

   
    while (num1.length < num2.length) num1 = '0' + num1;
    while (num2.length < num1.length) num2 = '0' + num2;

 
    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }


    if (carry) {
        result = carry + result;
    }

    return result;
}

const num1 = "123456789012345678901234567890";
const num2 = "987654321098765432109876543210";
const sum = addLargeNumbers(num1, num2);
console.log("Tổng của hai số lớn:", sum);
