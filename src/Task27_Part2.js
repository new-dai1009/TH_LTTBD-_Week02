const numbers = [1, 2, 3, 2, 60, 10, 25, 1, 60, 10,5];

function getDIistinctElement (arr){
    return [...new Set(arr)];
}

const distintcNumberArray = getDIistinctElement(numbers);
console.log('Mảng Sau khi loại bỏ các phần tử trùng lắp:'+ distintcNumberArray);