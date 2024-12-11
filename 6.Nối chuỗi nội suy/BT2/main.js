// Viết hàm createLink để tạo một chuỗi HTML cho một liên kết.
//  Hàm nhận vào địa chỉ URL và tên hiển thị, trả về chuỗi HTML: <a href="URL">tên hiển thị</a>.

function createLink(URL, Name) {
  return ` <a href="${URL}">${Name}</a>`;
}

// Sample usage
const link1 = createLink("https://google.com", "Search");
console.log(link1); // <a href="https://google.com">Search</a>

const link2 = createLink("https://fullstack.edu.vn", "F8");
console.log(link2); // <a href="https://fullstack.edu.vn">F8</a>
