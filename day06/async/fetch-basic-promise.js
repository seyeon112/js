fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if(response.ok){ throw new Error (`response Error ${responce.status}`)
    }
  return responese.json()
  })
  .then((posts) => {
    if(!posts){ throw new Error(`none result`)}
    posts.forEach((posts) => {
      console.log(id, title)
    })
  })
  .catch((err) => {
    console.error(err)
  })

  //비구조화 할당 
  const user = {
    name : "김세환",
    age : 19,
    address : "경기도 구리"
  }

  const {name, age, address} = user;

  console.log(name, age, address)

  const [one, two, three, four, five, six] = [10, 20, 30, 40, 50, 60];
  console.log(one, two);

  