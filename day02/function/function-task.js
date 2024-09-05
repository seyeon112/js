// 브론즈
//1) 어떤 값을 받으면 값을 출력해주는 함수
function printTyping(...parameter){
  console.log(arguments.parameter[i])
}

printTyping("문세연")
//2) 3개의 정수를 받아서 3개 모두 빼주는 함수
function getThreeNumbers(...numbers){
  for(let i = 0; i < numbers.length; i--)
  console.log(numbers[i]);
}

getThreeNumbers(2, 4, 7)
//실버
//홍길동은 n번 출력해주는 함수
function getHong(strings, n){
  let answer = "";
  for(let i = 0; i < strings.length; i++){
    for(let i = 0; i < n; i++) {
     answer += strings.charAt(i)
    }
  }
  return answer;
}
//n번까지 모두 더해주는 함수
function allSum(n){
  let sum = 0;
  for(let i = 0; i < n.length; i++){
    sum += i+1
  }
  return sum;
}

//골드
//1~n까지 홀수만 출력해주는 함수
function onlyOdds(n){
  result = 0;
  for(let i = 0; i < n.length; i++) {
    result += i+2
  }
  return result;
}
//1~n까지 4의 배수만 더해주는 함수
function onlyFour(n){
  result = 0;
  for(let i = 0; i < n.length; i++){
    if (n === 4) {
      result += n+i;
    }else{
      break;
    }
    return result;
  }
}
//플래티넘
//한글을 정수로 바꿔주는 함수 ("일공이사" -> 1024)



function hanguelToNumber(...strings){
  let numbers[] = "공일이삼사오육칠팔구";
  
  for(let i = 0; i < strings.length; i++){
    if(num[i])
  }
}

var str = "123";
var num = Number(str);
console.log(num);


//정수를 한글로 바꿔주는 함수 ("1024" -> "일공이사")

// 40분
// 브론즈
// 1) 어떤 값을 받으면 값을 출력해주는 함수
// 2) 3개의 정수를 받아서 3개 모두 빼주는 함수
// function print(value){
//   console.log(value);
// }

// function subtractAll(num1, num2, num3){
//   return num1 - num2 - num3;
// }

// 실버
// 홍길동을 n번 출력해주는 함수
// let limit = 5;
// function printHongToLimit(limit){
//   let hong = "홍길동";
//   for(let i = 0; i < limit; i++){
//     console.log(hong);
//   }
// }

// n번까지 모두 더해주는 함수
// function sumAll(...numbers){
//   let result = 0;
//   for(let i = 0; i < numbers.length; i++){
//     result += numbers[i]
//   }
//   return result;
// }

// 골드 
// 1~n까지 홀수만 출력해주는 함수
// function printOdd(limit){
//   for(let i = 0; i < limit; i++){
//     let odd = i % 2 == 1;
//     odd && console.log(i)
//   }
// }

// 1~n까지 4의 배수만 더해주는 함수
// function sumFourTimes(limit){
//   let result = 0;
//   for(let i = 0; i < limit; i++){
//     let fourTimes = i % 4 === 0;
//     fourTimes ? result += i : i;
    // if(fourTimes){ result += i; };
    // if(!fourTimes){ continue; }
    // result += i
//   }
//   return result;
// }

// 플레티넘
// 20분
// 1) 문자열을 받아서 원하는 문자의 개수를 구해주는 함수
// function getCount(content, char){
//   let count = 0;
//   for(let i = 0; i < content.length; i++){
//     content.charAt(i) == char && count++
//   }
//   return count;
// }

// let result = getCount("abcdaefg", "a");
// console.log(result)

// 2) 한글을 정수로 바꿔주는 함수 ("일공이사" -> 1024)
// function changeToInteger(hangle){
//   let hangles = "공일이삼사오육칠팔구";
//   let result = "";
//   for(let i = 0; i < hangle.length; i++){
//     result += hangles.indexOf(hangle.charAt(i));
//   }
//   return result;
// }

// let result2 = changeToInteger("공일이삼");
// console.log(result2)

// 3) 정수를 한글로 바꿔주는 함수 ("1024" -> "일공이사")
function changeToHangle(numbers){
  let hangles = "공일이삼사오육칠팔구";
  let result = "";
  for(let i = 0; i < numbers.length; i++){
    result += hangles.charAt(numbers.charAt(i));
  }
  return result;
}

let result3 = changeToHangle("1054")
console.log(result3);













