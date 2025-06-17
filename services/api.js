const API_KEY = "f21a4f568d0d498986332c2966bb43d0"
const baseURL = "https://api.themoviedb.org/3"


export const getPopularMovies = async () => {
    const response = await fetch(`${baseURL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${baseURL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results;
}