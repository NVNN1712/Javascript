let NhietDo = 20;
let Ngay = "ThuHai";

if (NhietDo >= 20 && Ngay === "ThuHai") {
  console.log("ở nhà");
} else {
  console.log("đi làm");
}

console.log("/////////////////////////////////////////////////");

let quanHuy = 10000;
let napLandau = true;
let rank = "Cao Thủ";

if (quanHuy >= 10000 && napLandau === true && rank === "Cao Thủ") {
  console.log("Nhận được VIP 7");
} else {
  console.log("không đủ để nhận");
}

console.log("/////////////////////////////////////////////////");

let temperature = 25; // Nhiệt độ 25 độ C
let dayOff = "Sunday"; // Ngày nghỉ là Chủ nhật
let today = "Sunday"; // Ngày hôm nay

// Tách thành biến giúp code có ý nghĩa hơn
let isWeatherGood = temperature > 20;
let hasFreeTime = today === dayOff;

if (isWeatherGood && hasFreeTime) {
  console.log("Đi picnic!");
} else {
  console.log("Ở nhà!");
}
// Kết quả: Đi picnic!

console.log("/////////////////////////////////////////////////");

let isComedyAvailable = true; // Có phim hài
let isActionAvailable = false; // Không có phim hành động

if (isComedyAvailable || isActionAvailable) {
  console.log("Xem phim vui vẻ!");
} else {
  console.log("Chọn hoạt động khác!");
}
// Kết quả: Xem phim vui vẻ!

console.log("/////////////////////////////////////////////////");

let isCatLover = false;

if (!isCatLover) {
  console.log("Không thích mèo!");
} else {
  console.log("Thích mèo");
}
// Kết quả: Không thích mèo!

console.log("/////////////////////////////////////////////////");

let age = 17;
let hasBasicComputerSkills = true;
let isRegistered = true;

if (age > 16 && hasBasicComputerSkills && isRegistered) {
  console.log("Đủ điều kiện tham gia khóa học");
} else {
  console.log("Không đủ điều kiện");
}
// Kết quả: Đủ điều kiện tham gia khóa học
