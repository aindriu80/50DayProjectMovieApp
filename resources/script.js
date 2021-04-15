const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=c8d8c40713c2164f10bc006b246301eb&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=c8d8c40713c2164f10bc006b246301eb&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial Movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})
