// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고
// 알파벳 중에 A의 개수를 세서 콘솔 출력

const getCity = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) return;
  const datas = await response.json();
  return datas;
}

getCity()
  .then((users) => users.map(({city}) => city))
  .then((city) => {
    return city.map((city) => {
      let changeToCapital = "";
      for(let i = 0; i < city.length; i++){
        if (city[i] === city[i].toLowerCase()) {
          arr.push(city[i].toUpperCase());
        }
      }
    })
  })

  .then((city) => {
    city.forEach(({city}) => {
      return city.split("A").forEach(({city}) => {
        sum += city;
      })
    })
  })

  console.log(sum);

  //다른 풀이

  // getCountA()
  // .then((users) => users.map((user) => user.address.city.toUpperCase()))
  // .then((users) => users.filter((user) => user.includes("A")))
  // .then((users) => users.map((user) => {
  //   let result = ""
  //   for(s of user){
  //     if(s === "A"){result += s}; 
  //   }
  //   return result;
  // }))
  // .then(console.log)
