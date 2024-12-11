let temperature = 20;

if (temperature > 30) {
  console.log("It's a hot day.");
} else {
  console.log("It's not a hot day.");
}
console.log("//////////////////////////////////////////////////////////////");

function checkEvenOdd(Number) {
  if (Number % 2 === 0) {
    return "Chẵn";
  } else {
    return "Lẻ";
  }
}

// Sample usage
console.log(checkEvenOdd(4)); // Chẵn
console.log(checkEvenOdd(5)); // Lẻ

console.log("//////////////////////////////////////////////////////////////");

function Tuoi(age) {
  if (age > 18) {
    return "Nguoi Lon";
  } else {
    return "tre Trau";
  }
}

console.log(Tuoi(10)); // Tre Trau
console.log(Tuoi(20)); // Nguoi Lon
console.log("//////////////////////////////////////////////////////////////");

function Number(a, b) {
  if (a === b) {
    return "hai so bang nhau";
  } else if (a > b) {
    return "so thu nhat lon hon";
  } else a < b;
  return "so thu hai lon hon";
}

console.log(Number(3, 4));
console.log(Number(6, 4));
console.log(Number(4, 4));

console.log("//////////////////////////////////////////////////////////////");

function ThangSO(ThangChu) {
  switch (ThangChu) {
    case 1:
      return "Tháng 1";
    case 2:
      return "Tháng 2";
    case 3:
      return "Tháng 3";
  }
}

console.log(ThangSO(1));
console.log(ThangSO(2));
console.log(ThangSO(3));
