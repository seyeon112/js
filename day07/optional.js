const movies = {
  name : "오펜하이머",
  detail : {
    price : "50000",
    date : "20240911"
  }
}

const movies2 = {
  name : "에나벨",
  detail : {
    price : "50000",
  }
}

function printMovieData(movie){
  console.log(movie.detail.date)
}

console.log(printMovieData(movies).split(""))
printMovieData((movies2)?.split(""))

// printMovieData(movies)
// printMovieData(movies2)

