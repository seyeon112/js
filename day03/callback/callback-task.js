// 1) 두 수를 더해서 출력하기
const add = (num1, num2) => {
  return (num1 + num2)
}

const print = (value) => {
  console.log(value);
}

add(10, 20, print)


// 2) 성과 이름을 받아서 연결하고 출력하기
// const add1 = (string1, string2) {
//   return (string1 + string2)
// }

const print = (value) => {
  console.log(value);
}

add("문", "세연", print)


// 3) 두 정수의 곱셈 결과를 출력하기

// const multiply = (number1, number2) {
//   return (number1 * number2)
// }

const print = (value) => {
  console.log(value);
}

add(12 * 3, print)

// 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기

// const hello = (str1, str2) {
//   return (str1 + str2)
// }

// const print = (value) => {
//   console.log(value);
// }

add("문", "세연", print);

// --------------------------------------------------------------------------------

// 실습
function print(value){
  console.log(value);
}

// 1) 두 수를 더해서 출력하기
const sum = (num1, num2, callback) => {
  callback(num1 + num2);
}

sum(10, 20, print)

// 2) 성과 이름을 받아서 연결하고 출력하기
const getFullName = (lastName, firstName, callback) => {
  callback(lastName + firstName)
}
getFullName("김", "세환", print)


// 3) 두 정수의 곱셈 결과를 출력하기
const mul = (num1, num2, callback) => {
  callback(num1 * num2)
}

mul(10, 20, print)

// 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기
const hello = (fullname, callback) => {
  callback(`${fullname}님 환영합니다.`)
}

getFullName("김", "세환", (fullName) => {
  hello(fullName, print)
})

// -----------------------------------------------------------------------------

// // 1. 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// const plus = (num1, num2) => {
//   callback(num1 + num2)
// }

// isItOddEven() => {
//   console.log

// }
// plus(10, 20, print)

// 2. 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력


//콜백함수는 순서대로 실행하고 싶을 떄 사용함. 
//먼저함수가 있고, 뒤함수가 있다. 먼저함수가 우선 실행, 뒤 함수가 뒤 실행
// 먼저 함수의 파라미터 안에 중괄호 안에 파라미터명 다음 소괄호 꼭 기재

// const multiply = (num1, num2, callback) => {
//   callback(num1 ** num2)
// }

// const multiply2 = (number, callback) => {
//   callback(number * 2)
// }

// multiply(5, 7, (result)) => {
//   multiply2(result, print)
// }


// 3. 두 정수의 값 중 작은 값을 변환하여 출력
const compare = (num1, num2, callback) => {
  if(typeof(num1) == "string" || typeof(num2) == "number") return "정수를 입력하세요.";
  if(num2 == num2) return "두 수가 같습니다";
  num1 > num2 ? min = num2 : min = num1;
  callback (min);
}

compare(30, 100, print)


// 4. 문자열을 받아서 순서를 반대로 바꾼 후 출력
// const reverse = (content, callback) => {
//   int result = "";
//   for(int i = 0; i < content.length; i++) {
//     content.charAt(content.length - i - 1);
//   }
//   callback(result);

  
// }

// reverse ("", print)

// 5. 사용자가 입력한 값까지 누헙한 한 후 5의 배수인지 확인 후 출력

// const sum = (limit, callback) => {
//   for (int i = 0; i <+ limit; i++) {
//     result += i;
//   }

//   callback(result);


// }

// const checkFiveTImes = (number, callback) => {
//   number %% 5 == 0 ? "5의 배수입니다." : "5의 배수가 아닙니다. "
//   callback(result);
// }

// sum (107, cresult) => {
//   checkFiveTImes(result, print)
// }


