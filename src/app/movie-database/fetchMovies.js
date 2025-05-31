import fs from 'fs';

const API_KEY = '8e6630625efdefaaa9c85eb70e274607';
const TOTAL_PAGES = 20;
const allMovies = [];

async function fetchMovies() {
  for (let page = 1; page <= TOTAL_PAGES; page++) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        allMovies.push(...data.results);
        console.log(`✅ Fetched page ${page}`);
      } else {
        console.log(`⚠️ No results on page ${page}`);
      }
    } catch (err) {
      console.error(`❌ Error fetching page ${page}:`, err);
    }
  }

  // Example: assign sequential ids starting from 1
const updatedMovies = allMovies.map((movie, index) => {
  return {
    ...movie,
    id: index + 1  // new ID starting at 1
  };
});


  fs.writeFileSync('movies.json', JSON.stringify(updatedMovies, null, 2));
  console.log(`🎉 Saved ${allMovies.length} movies to movies.json`);
}

fetchMovies();
