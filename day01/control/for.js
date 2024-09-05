//for(초기식; 조건식 ; 증감식){}
for (let i = 0; i < 10; i++){
  console.log(`${i+1}번째 김세환`);
}

let sum = 0;
let result = 0;

// 1~10까지 출력하기

for (let i = 0; i < 10; i++) {
  console.log(sum += i);
}

// 1~100까지 짝수만 출력하기

for(let i = 0; i < 100; i++) {
  console.log(i+2);
}
// 100~1까지 출력하기
for(let i = 100; i < 100; i--) {
  console.log(i);
}

// 0~10 중 5만 빼고 출력하기

for(let i = 0; i < 10; i++) {
  console.log(i);
  if(i == 5){
    break;

    let result= i > 5 ? i + 1 : i;
    console,log(result);
  }
}
// 01234012340

var arr = [,,,,,];


for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


