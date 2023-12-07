const apiKey = '64a728eee0d5825d69964e304c596660';
let johnwick_id = 458156;
const moviedetails = document.getElementById('movie-details');

fetch(`https://api.themoviedb.org/3/movie/${johnwick_id}?api_key=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    const movieContent = `<h1>Title: ${data.title}</h1>
    <p>Release date: ${data.release_date}</p>
    <span class ="first-fruit>
    <span class = "picture"><img src="images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt=""></span>
    <span  class ="yellow-text">86.0 / 100</span>
    <img class = "ping" src="images/PngItem_1381056 1.png" alt="">
    <span class="info-text">97 %</span>
    </span>

    <p>Overview: ${data.overview}</p>
    <p>Vote: ${data.vote_average}</p>
    <div class="">
    <button class="btn btn-wick"><img src="images/Play.svg" alt="">Watch trailer</button>
    </div>
    `;
    moviedetails.innerHTML = movieContent;
  })
  .catch((error) => {
    console.log(error);
  });

  // const movieCardApi = 'https://api.themoviedb.org/3/discover/movie';
 

  
  // fetch(`${movieCardApi}?api_key=${apiKey}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const dataResults = data.results;
  
  //     dataResults.forEach((movie) => {
  //       const posterPath = movie.poster_path;
  //       const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
  //       const title = movie.title;
  //       const release_date = movie.release_date;
  //       const ratings = movie.vote_average;
  //       const rattingPercentage = ratings * 10;
  
  //       const movieElement = document.createElement('div');
  //       movieElement.classList.add('col-12', 'col-md-5', 'col-lg-4', 'mb-5', 'movieTitle');
  //       movieElement.innerHTML = `
  //         <img src="${posterUrl}" alt="${title} poster">
  //         <p>${title}</p>
  //         <p>${release_date}</p>
  
  //         <p class= "small-image">
  //           <span class= "fruit-pix"><img src="images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt=""></span>
  //           <span class="info-text">${ratings.toFixed(2)} /100</span>
  //           <img src="images/PngItem_1381056 1.png" alt="">
  //           <span class="info-text">${rattingPercentage} %</span>
  //         </p>
  //       `;
  
  //       movieElement.style.border = '7px solid green';
  //       movieElement.style.fontFamily = 'inherit';
  //       movieRow.appendChild(movieElement);
  //       movieElement.setAttribute('data-movie-id', movie.id);
  
  //       movieElement.addEventListener('click', () => {
  //         const movieId = movie.id;
  
  //         // Fetch movie details including videos
  //         fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
  //           .then((response) => response.json())
  //           .then((movieWithVideos) => {
  //             const videoKey = movieWithVideos.videos.results.length > 0 ? movieWithVideos.videos.results[0].key : null;
  //             location.href = `movieinfo.html?id=${movieId}&videoKey=${videoKey}`;
  //           })
  //           .catch((error) => console.error('Error fetching movie details:', error));
  //       });
  //     });
  //   })
  //   .catch((error) => console.error('Error fetching data:', error));
  

  const movieCardApi = 'https://api.themoviedb.org/3/discover/movie';
  const movieRow = document.getElementById('movie-row');
  
  fetch(`${movieCardApi}?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const dataResults = data.results;
  
      dataResults.forEach((movie) => {
        const posterPath = movie.poster_path;
        const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
        // const productionCountries = movie.production_countries || [];
        const title = movie.title;
        const release_date = movie.release_date;
        // const overview = movie.overview;
        const ratings = movie.vote_average; // Example: Favorite status
         const rattingPercentage = ratings * 10;

        //  const productionCountriesHTML = productionCountries.length > 0 ?
        //  productionCountries.map(country => country.name).join(', '): 'N/A';

  
        const movieElement = document.createElement('div');
        movieElement.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-5', 'movieTitle'); // Bootstrap classes for columns
        movieElement.innerHTML = `
          <img class="post-image" src="${posterUrl}" alt="${title} poster">
       
           <p>${title}</p>
          <p>${release_date}</p>
         
          <p class= "small-image">
          <span class= "fruit-pix"><img src="images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt=""></span>
          <span class="info-text">${ratings .toFixed(2)} /100</span>
          <img src="images/PngItem_1381056 1.png" alt="">
          <span class="info-text">${rattingPercentage} %</span>

          </p>
        `;
        
        
        // movieElement.style.border = '7px solid green';
        movieElement.style.fontFamily = 'inherit'
        movieRow.appendChild(movieElement);
        movieElement.setAttribute('data-movie-id', movie.id); 


        movieElement.addEventListener('click', () => {
          const movieId = movie.id;
          location.href = `movieinfo.html?id=${movieId}`;
      });
      });
      
    })

    .catch((error) => console.error('Error fetching data:', error));
  