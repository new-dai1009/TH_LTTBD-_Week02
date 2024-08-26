function countWords(text) {
    let words = text.trim().split(/\s+/);
    return words.length;
}

const text = "Nguyễn Bảo Đại Mã số sinh viên là 20015321 vvvv";
const wordCount = countWords(text);
console.log("Số lượng từ trong văn bản là:", wordCount);
