// // 1) 0, 1을 마구잡이로 5개 전달했을 떄,
// // 0과 1의 개수를 알려주는 함수
// // ex) 0의 개수 00개, 1의 개수 00개 
//   function countOne(number, char){
//     let count = 0;
//     for(let i = 0; i < number.length; i++) {
//       number.charAt(i) == char && count++ 
//     }
//     return count;
//   }

//   if zero == 0;

//   if one == 1;
  
 
// // 배열에 각자 숫자를 담고 출력 

// // 2) 사용자가 0,1을 마구잡이로 입력했을 때
// // 0과 1의 개수를 알려주는 함수
// // ex) 0의 개수 00개, 1의 개수 00개 
// 1) 0, 1을 마구잡이로 5개 전달했을 때,
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개
// function getCountZeroAndOne(num1, num2, num3, num4, num5){
//   let countZero = 5;
//   let countOne = 0;
//   if(num1){ countOne++ };
//   if(num2){ countOne++ };
//   if(num3){ countOne++ };
//   if(num4){ countOne++ };
//   if(num5){ countOne++ };
//   countZero -= countOne;
//   return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
// }


// function getCountZeroAndOne(num1, num2, num3, num4, num5){
//   let countZero = 5;
//   let countOne = 0;
//   num1 && countOne++
//   num2 && countOne++
//   num3 && countOne++
//   num4 && countOne++
//   num5 && countOne++
//   countZero -= countOne;
//   return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
// }

// console.log(getCountZeroAndOne(0, 1, 0, 0, 1));

// function getCountZeroAndOne(...numbers){
//   let countZero = 5;
//   let countOne = 0;
//   for(let i = 0; i < numbers.length; i++){
//     numbers[i] && countOne++;
//   }
//   countZero -= countOne;
//   return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
// }

// console.log(getCountZeroAndOne(0, 1, 0, 0, 1));


// 2) 사용자가 0, 1을 마구잡이로 입력했을 때
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개

function getCount(...numbers){
  let countZero = numbers.length;
  let countOne = 0;
  for(let i = 0; i < numbers.length; i++){
    countOne += numbers[i];  
  }
  countZero -= countOne;  
  return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
}

// let result = getCount(0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0)
// console.log(result);

// 1) 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수
function largerSmaller(number1, number2){
  let number1 = 0;
  let number2 = 0;
  result = 0;
  if(typeof(num1) != "number" | typeof(num2) != "number"){return "정수를 입력해주세요."}
  if(number1 < number2) {
    console.log(result = number2)
  }else{
    console.log(result = number1)
  }
  return result;
}

// 2) 입력받은 3개 중 홀수만 모두 더해서 값을 주는 함수
function oddCount(number1, number2, number3){
  let number1 = 0;
  let number2 = 0;
  let number3 = 0;
  let result = 0;
  if(number1 % 2 != 0) {
    
  }
  // if문으로 거르고 for문으로 배열에 담아서 연산
}

// 3) 입력 받은 수 까지 반복 후 짝수의 합을 모두 더해주는 함수
  function evenCount(numbers){
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
      if (i % 2 == 0) {
        count += numbers.charAt(numbers.charAt(i)); 
      }
    }
      return result;
  }

// 4) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"

  function eraseA(){
    let result = ""; 
  }

// 5)입력한 값이 실수인지 정수인지 알려주는 함수

  function realOrInteger(number){
    let real = 0;
    let integer = 0;
      if(number % 1 == 0) {
        integer == number;
      }else{
        real == number;
      }
  }


// 6) 입력받은 문자를 뒤집어주는 함수

  function upsidedownChar(){
    let char = str.split(',');
    let str = '';
    let word 
  }

  // 1) 0, 1을 마구잡이로 5개 전달했을 때,
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개
// function getCountZeroAndOne(num1, num2, num3, num4, num5){
//   let countZero = 5;
//   let countOne = 0;
//   if(num1){ countOne++ };
//   if(num2){ countOne++ };
//   if(num3){ countOne++ };
//   if(num4){ countOne++ };
//   if(num5){ countOne++ };
//   countZero -= countOne;
//   return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
// }


// function getCountZeroAndOne(num1, num2, num3, num4, num5){
//   let countZero = 5;
//   let countOne = 0;
//   num1 && countOne++
//   num2 && countOne++
//   num3 && countOne++
//   num4 && countOne++
//   num5 && countOne++
//   countZero -= countOne;
//   return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
// }

// console.log(getCountZeroAndOne(0, 1, 0, 0, 1));

// function getCountZeroAndOne(...numbers){
//   let countZero = 5;
//   let countOne = 0;
//   for(let i = 0; i < numbers.length; i++){
//     numbers[i] && countOne++;
//   }
//   countZero -= countOne;
//   return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
// }

// console.log(getCountZeroAndOne(0, 1, 0, 0, 1));


// 2) 사용자가 0, 1을 마구잡이로 입력했을 때
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개

// function getCount(...numbers){
//   let countZero = numbers.length;
//   let countOne = 0;
//   for(let i = 0; i < numbers.length; i++){
//     countOne += numbers[i];  
//   }
//   countZero -= countOne;  
//   return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
// }

// let result = getCount(0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0)
// console.log(result);

// 실습
// 1) 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수
// function getMinAndMax(num1, num2){
//   let min = 0;
//   let max = 0;
//   if(typeof(num1) != "number" | typeof(num2) != "number"){ return "정수를 입력해주세요."};
//   if(num1 == num2){return "두 수가 같습니다."};
//   if(num1 > num2){
//     min = num2;
//     max = num1;
//   }else{
//     min = num1;
//     max = num2;
//   }
//   return `작은 값 ${min}, 큰 값 ${max}`;
// }

// console.log(getMinAndMax(20, 40))

// 2) 입력받은 3개 중 홀수만 모두 더해서 값을 주는 함수
function addOdd(num1, num2, num3){
  let result = 0;
  num1 % 2 == 1 && (result += num1);
  num2 % 2 == 1 && (result += num2);
  num3 % 2 == 1 && (result += num3);
  return result;
}

let result = addOdd(10, 11, 13);
console.log(result);

// 3) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수
// ex) addEven(20) -> 1 ~ 20
// ES6 화살표 함수
const sumEven = (limit) => {
if(typeof(limit) != "number") return "정수를 입력하세요.";
let result = 0;
for(let i = 0; i <= limit; i++){
  if(i % 2 != 0) continue;
  result += i;
}
return result;
}

console.log(sumEven(10));

// 4) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"
let content = "가a나a다a라a마a바";
const removeA = (content) => {
return content.split("a").join("");
}
console.log(removeA(content));

// 5) 입력한 값이 실수인지 정수인지 알려주는 함수
const isInteger = (num) => {
return num == parseInt(num) ? "정수" : "실수"
}
console.log(isInteger(10));

// 6) 입력받은 문자를 뒤집어주는 함수
const reverse = (content) => {
let result = "";
for(let i = 0; i < content.length; i++){
  result += content.charAt(content.length - i - 1);
}
return result;
}

console.log(reverse("안녕하세요"))


// 2) 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력
// 3) 두 정수의 값 중 작은 값을 반환하여 출력
// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// 5) 사용자가 입력한 값까지 누적합을 한 후 5의 배수인지 확인 후 출력


