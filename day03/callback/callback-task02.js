// 1) 1~100까지 짝수만 더한 후 결과 값에 3을 곱한 후 출력

// 1~100까지 짝수만 더하는 함수
// 결과 값에 3을 곱해주는 함수
// 출력

const evenSum = (onehundred, callback) => {
  let result = "";
  for(let i = 0; i < onehundred.length; i++) {
    if(i % 2 == 0){
    result += onehundred[i + 1]
    }
  }
  callback(result);
}

const multiplyThree = (number, callback) => {
  callback(number * 3)

}

multiply(result => {
 multiplyThree(result, print) 
}
)


// 2) 2개의 정수 중 최소 값과 최대 값을 비교한 후 큰 값에 10을 곱해서 출력
const compare = (num1, num2, callback) => {
  let min = 0;
  let max = 0;
  if(typeof(num1) != "number" || typeof(num2) != "number") return "정수를 입력하세요.";
  if(num1 == num2) return "두 수가 같습니다.";
  num1 > num2 ? max = num1 : max = num2;
  callback(max)
}

const maxMultiplyTen = (number, callback) => {
  let result = 0;
  result += number * 10
  callback(result);
}

multiplied(12, 24, (result)=> {
  maxMultiplyTen(result, print)
}
)

// 3) 결제 상품의 이름과 결제 상태를 전달 받아서 
// 결제 상태가 true일 경우 결제 완료, false 인경 우 결제 취소를 출력

const purchaseProduct = (name1, name2) => {
  let name1 = "";
  let name2 = "";
}

const purchaseCheck = (purchased, callback) => {
  let purchased = false;
    if(purchased == true) {
      callback("결제 완료!")
    }else{
      callback("결제 취소")
    }
    callback(purchased == true ? "결제 완료!" : "결제 취소")
}

purchaseTest ("핸드폰", purchased, result => {
  purchaseCheck(result, print)

})

// 4) 상품 가격과 총 구매한 가격의 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니라면 false 출력
// ex) 가격 1000원, 총 구매가격 5000원 == 구매 개수 5개

// const product = (productPrice, sumPrice, callback) => {
//   let productPrice = 0;
//   let sumPrice = 0;
//   callback(sumPrice / productPrice);
// }

// const productStock = (stock, callback) => {
//   if(stock <= 5) {
//     callback("true")
//   }else{
//     callback("false")
//   }
//   callback(stock <= 5 ? "true" : "false")
// }

// product(1000, 4000, (result) => {
//   productStock(result, print)
// })

const getCount = (price, total, callback) => {
  let count = total / price ;
  callback(count)
}

const checkCount = (count, callback) => {
  let result = count <= 5;
  callback(result);
} 

getCount(1000, 5000, (count) => {
  checkCount(count, printMessage)
})



