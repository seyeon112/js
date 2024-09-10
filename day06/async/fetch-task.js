// // // https://jsonplaceholder.typicode.com/users
// // // zipcode만 추출해서 콘솔에 출력하기
// // // 하나의 함수는 하나씩 기능만 수행해야 한다
// // // 미리 핸들링을 모두 작성해야 한다. 

// // fetch("// https://jsonplaceholder.typicode.com/users")
// //   .then((response) => {
// //     if(response.ok){ throw new Error (`response Error ${response.status}`)
// //     }
// //   return response.json()
// //   })
// //   .then((users) => {
// //     if(!users){ throw new Error(`none result`)}
// //     postMessage.forEach((users) => {
// //       console.log(zipcode)
// //     })
// //   })
// //   .catch((err) => {
// //     console.error(err)
// //   })

//   // https://jsonplaceholder.typicode.com/users
// // zipcode만 추출해서 콘솔에 출력하기
// // 하나의 함수는 하나의 기능만 수행해야한다.
// // 에러핸들링을 모두 작성해야한다.

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   if(!response.ok){
//     throw new Error(`response error ${response.status}`)
//   }
//   return response.json()
// })
// .then((users) => { 
//   if(!users){ 
//     throw new Error(`no users`)
//   }
//   return users.map((user) => user.address.zipcode)
// })
// .then(console.log)
// .catch(console.error)


//a sink away 문법
// const printZipcode = () => {
//   const response = fetch("https://jsonplaceholder.typicode.com/users");
//   const users = response.join;
//   return users;
// }

const printZipcode = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json();
  return users;
}

printZipcode()
  .then(console.log)
  .catch(console.error)

// printZipcode.then((response) => response.json()).then(consol.log);


