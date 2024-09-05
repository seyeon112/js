function add(num1, num2){
  return num1 + num2; 
}

let result = add(10, 20);
console.log(result);

//디폴트 파라미터
function sum(num1, num2, num3 = 0) {

  return num1 + num2 + num3;

}

console.log(sum(10, 20))

//실습
//숫자 5개를 받아서 5개를 출력하는 함수
//2개의 문자열을 연결시켜주는 함수

function numberOut(num1, num2, num3, num4, num5) {
  return num1, num2, num3, num4, num5;
}

numberOut(10, 20, 30, 40, 50)

var string1;
var string2;

function initialValue() {
  return "";
}
function connectString(string1, string2 = initialValue()){
  return string1 + string2;
}

console.log(connectString("뭐야", "이거"));

//사용자가 파라미터로 입력한 값을 모두 더하기
//rest parameter(가변 인자)
function addAll(...numbers){
  console.log(numbers[3]);
}


addAll(10, 20, 30, 40, 50)

//가변 인자로 이름, 나이, 이메일을 입력받아서 출력하는 함수

function printUser(...strings){
  for(let i = 0; i < strings.length; i++)
    console.log(strings[i])
}

printUser("문세연", "24살", "lilylilyghost@gmail.com")


//가변인자로 사용자가 입력한 값을 모두 더해서 값을 주는 함수

