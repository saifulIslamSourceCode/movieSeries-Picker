const fetch = require('node-fetch');
const fs = require('fs');

const API_KEY = 'your_tmdb_api_key_here'; // Replace this
const TOTAL_PAGES = 5; // You can increase this
const allMovies = []; // This will hold all combined results

async function fetchMovies() {
  for (let page = 1; page <= TOTAL_PAGES; page++) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      // ✅ Combine movie data here
      allMovies.push(...data.results);
      console.log(`✅ Fetched page ${page}`);
    } else {
      console.log(`⚠️ Failed to fetch page ${page}`);
    }
  }

  // ✅ Save combined movie data
  fs.writeFileSync('movies.json', JSON.stringify(allMovies, null, 2));
  console.log(`🎉 Saved ${allMovies.length} movies to movies.json`);
}

fetchMovies();
