const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
console.log('Movie ID:', movieId);

const apiKey =  '64a728eee0d5825d69964e304c596660';


function convertToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}



fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((movie) => {
    console.log(movie);
    const thrillerContainer = document.getElementById('thriller');

    const thriller = movie.overview;
    const title = movie.title;
    const release_date = movie.release_date;
    const posterPath = movie.poster_path;
    const backdrop_pathh = movie.backdrop_path;
    const runtime = movie.runtime
    const genres = movie.genres;
    const ratings = movie.vote_average;
    const rattingPercentage = ratings
    const voteCount = movie.vote_count;
    // Extract director from crew
    const director = movie.credits.crew.find((member) => member.job === 'Director');

    // Extract only the crew members with a specific job title (e.g., 'Producer')
    const crew = movie.credits.crew.filter((member) => member.job === 'Producer');

    // Extract only the first three cast members
    const cast = movie.credits.cast.slice(0, 3);

    const movieInfoElement = document.createElement('div');
    movieInfoElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${backdrop_pathh}" alt="${title} Poster">
    <div  class ="d-flex flex-wrap justify-content-between align-items-center titleHolder">
     <div class = "heading d-flex  flex-wrap justify-content-between align-items-center">
      <h3>${title}</h3>
        <p class ="dot">.</p>
        <p> ${release_date}</p>
        <p class ="dot>.</p>
        <p>${convertToHoursAndMinutes(runtime)}</p>
        <p class= "genre">${genres.map(genre => genre.name).join(', ')}</p?
     </div>
      <div class ="d-flex flex-wrap poster-end">
        <img  class = "star" src="images/Star.png" alt="">
        <pc class= "ratings-first">${ratings.toFixed(1)}</p>
        <p class= "ratings"> | ${voteCount > 1000 ? (voteCount / 1000).toFixed(1) + 'k' : voteCount}</p> <!-- Format ratings and vote count -->
     </div>
   </div>
      <p> ${thriller}</p>
      <span><h4>Director:</h4> <p class="paragraph"> ${director ? director.name : 'N/A'}</p></span>
     
      
    <span class="w-75">  <h4>Producer:</h4> <p class="paragraph">${crew.map((member) => member.name).join(', ')}</p></span>
     <span> <h4>Stars:</h4> <p class="paragraph">${cast.map((member) => member.name).join(', ')}</p></span>
     <div class="col-10 col-lg-3- custom-bttn w-50">
       <button class="btn btn-lg text-light buttom-bt">Top Rated Movies #65</button>
       <button class="btn  align-items-center bt-content">Awards 9 nominations<img class= "award" src="images/Expand Arrow.png" alt=""></button>
      </div>
    `;
    
    thrillerContainer.appendChild(movieInfoElement);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

//   const urlParams = new URLSearchParams(window.location.search);
// const movieId = urlParams.get('id');
// const apiKey = 'YOUR_API_KEY'; // Replace with your TMDb API key

// // Fetch movie details
// fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((movieWithVideos) => {
//     console.log('Movie with Videos:', movieWithVideos); // Log movie data with videos

//     const thrillerContainer = document.getElementById('thriller');
//     const posterPath = movieWithVideos.poster_path;
//     const backdropPath = movieWithVideos.backdrop_path;
//     const title = movieWithVideos.title;
//     const release_date = movieWithVideos.release_date;
//     const thriller = movieWithVideos.overview;

//     // Get the first video (assuming it's a trailer)
//     const trailerKey = movieWithVideos.videos.results.length > 0 ? movieWithVideos.videos.results[0].key : null;

//     const movieInfoElement = document.createElement('div');
//     movieInfoElement.innerHTML = `
//       <img src="https://image.tmdb.org/t/p/w500${posterPath}" alt="${title} Poster">
//       <img src="https://image.tmdb.org/t/p/original${backdropPath}" alt="${title} Backdrop">
//       ${trailerKey ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerKey}" frameborder="0" allowfullscreen></iframe>` : ''}
//       <h3>Title: ${title}</h3>
//       <p>Release Date: ${release_date}</p>
//       <p>Thriller: ${thriller}</p>
//     `;

//     thrillerContainer.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${backdropPath}')`;
//     thrillerContainer.appendChild(movieInfoElement);
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
//   });

