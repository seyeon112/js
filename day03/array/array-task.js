// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.filter(data => data % 2 == 0).forEach(
  data => console.log(data))

// 2) 한글을 숫자로
// ex) "일이삼사" => "1234"

const hangles = "공일이삼사오육칠팔구";
const inputs = "일이사팔".split("");
console.log(inputs.map(c => hangles.indexOf(c)).join(""))

// 3) 숫자를 한글로
// ex) "1234" => "일이삼사"

const numbers = ["0123456789"]
const input = "1234".split("");
console.log(numbers.map((data, i, datas) => {
  return data;
}))

//이거 두개 어떻게 합칠까

// 4) 1~100까지 합 출력

const arr3 = [];

// function insertArr(){
//   for(var i = 0; i < 90; i++){
//     ardata[i] = i + 1;
//   }
//   selectArr();
// }
// function addArr(){
//   var sum = 0;
//   for(var i = 0; i < arrdata.length; i++){
//     sum += arrdata[i];
//   }
  
// }

let arr4 = 0;
for (let i = 0; i < 101; i++) {
  arr4 += i;
}
// console.log(${arr4})


// 5) 문자열 반대로 출력하기 .reverse() 사용



// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// result) 010-****-5678

phoneNumber = "010-1234-5678"
phoneNumber.log(phoneNumber.split("-").join)
phoneNumebr.log(phoneNumber.split)
console.log(phoneNumebr,replace("1", "*"))

