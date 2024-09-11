// https://jsonplaceholder.typicode.com/todos

//ES8 async await 데이터 통신
//getTitles
//todos에서 title만 5개 가져오기 (0-4)
//값으로 가져오기
//값으로 가져온 데이터를 제목 : title 내용으로 변경하기 

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     if(Response.ok) { throw new Error(`response Error ${response.status}`)
//     }
//   return response.json();
//   })

const getTitles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const todos = await response.json();
  return todos;
}

getTitles()
  .then(console.log)
  .catch(console.error)

  // request.getTitles("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => {
  //     if(!response.ok) throw new Error(response.statusText);
  //     return response.json();
  //   })
  //   .then(todos => console.log(todos))
  //   .catch(err => console.error(err))

  