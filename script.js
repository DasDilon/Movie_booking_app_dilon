const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjg0YzlhZTQ4NGMzYTdmNTkwMzAwOTk5MmQyNGM1MyIsInN1YiI6IjY1MDQ2OTM0ZWEzN2UwMDBhZDM4ZDU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AUh1AkJag0dpzV41VW-aytbgrYImX-p63rbJsko6Mas'
  }
};
try {
fetch(url, options)
  .then(res => res.json())
  .then(json => {
    var movies = json.results
    console.log(movies);
    movies.forEach(element => {
      // dom man
      document.getElementById("love").innerHTML+= `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.original_title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    });
  })
}
catch{
  ((err) => console.error('error:' + err))
}