//  Viết hàm formatQuote trong JavaScript nhận vào một chuỗi
//  và tên tác giả. Hàm này sẽ trả về một chuỗi được định dạng như sau: "quote" - tác giả.

function formatQuote(quote, TacGia) {
  return `${quote} - ${TacGia}`;
}

// Sample usage
const quote1 = formatQuote("Simplicity is genius.", "Albert Einstein");
console.log(quote1); // "Simplicity is genius." - Albert Einstein

const quote2 = formatQuote("Knowledge is power.", "Confucius");
console.log(quote2); // "Knowledge is power." - Confucius
