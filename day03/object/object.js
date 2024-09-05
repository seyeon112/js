const obj = {
  name : "김세환",
  age : 20
}

//. 접근법

// obj.name = "홍길동";

// console.log(obj.name);

// //[] 접근법 
// // key 값에 규칙성을 주고 싶을 떄 사용하는 방법
// console.log(obj["name"])

const products = {
  product1 : "지우개",
  product2 : "키보드",
  product3 : "마우스",
  product4 : "승용님노트북",
  product5 : "진아노트북",
  product6 : "태혁10년노트북"
}

for(let i = 0; i < products.length; i++) {
  console.log(products['products${i}'])
}

//빠른 for~in문을 제공

for(let key in products){
  console.log(product[key]);
}

//순서가 있는 for문에서 사용 가능
// for(let key of products){
//   console.log(key);
// }


const users = {
  user1 : {
    name : "홍길동",
    age : 20,
    point : 20000,
  },
  user2 : {
    name : "이순신",
    age : 20,
    point : 1500,
  },
  user3 : {
    name : "장보고",
    age : 60,
    point : 5500,
  },
  user4 : {
    name : "김철수",
    age : 25,
    point : 4500,
  },
}

// // for문을 이용하여 모든 유저의 point를 누적합한 후 화면에 출력하기

// for (let i = 0; i < users.length; i++) {
//   console.log(users['users$[i]'])
// }

// for(let key in users) {
//   console.log(user[key]);
// }

// 10분
// for문을 이용하여 모든 유저의 point를 누적합한 후 콘솔에 출력하기
const getUserPoint = (users, callback) => {
  let result = 0;
  for(let user in users){
    result += users[user].point;
  }
  callback(result)
}
const printPoint = (point) => {
  console.log(point)
}

getUserPoint(users, printPoint)














// obj라는 영역을 const 로 고정해두면, 주소값이 바뀌지 않게 된다.
// 다만 namme이라는 변수의 값은 주소값이 아니기 떄문에 바꿀 수 있따. 

