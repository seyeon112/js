// promise 타입
const promise = new Promise(function(resolve, reject){
  let check = false;
  if(check){
    resolve("성공");
  }else{
    reject("실패!");
  }
})

// promise.then((result) => {console.log(result)})
promise.then(console.log).catch(console.log);

const DB = [];
//그 다음 작업을 하기 위해 callback 함수를 가져온다. 
const register = (user) => {
  saveDB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    })
  }) 
}

// const saveDB = (user, callback) => {
//   DB.push(user);
//   console.log(`save ${user.name} to DB`);
//   return callback(user);
// }
// const sendEmail = (user, callback) => {
//   console.log(email to ${user.name})
// }



