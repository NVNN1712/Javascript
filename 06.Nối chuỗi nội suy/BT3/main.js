// Viết hàm calculateTotalScore
// nhận vào ba tham số: studentName, score, và regionalBonus (điểm cộng theo vùng).
// Hàm này sẽ tính tổng điểm (điểm ban đầu cộng với điểm cộng theo vùng)
// và trả về chuỗi thông báo: Sinh viên [studentName] có tổng điểm là [totalScore].

function calculateTotalScore(studentName, score, regionalBonus) {
  const totalScore = score + regionalBonus;
  return `Sinh Vien ${studentName} co tong diem ${totalScore}`;
}

// Sample usage
console.log(calculateTotalScore("Nguyễn Văn A", 7, 0.5)); // Sinh viên Nguyễn Văn A có tổng điểm là 7.5
console.log(calculateTotalScore("Trần Thị B", 6, 1)); // Sinh viên Trần Thị B có tổng điểm là 7
