let currentMovie


const movieDetailImage = document.querySelector("div#movie-info img#detail-image")
const movieDetailTitle = document.querySelector("div#movie-info h1#title")
const movieDetailYearReleased = document.querySelector("div#movie-info h3#year-released")
const movieDetailDescription = document.querySelector("div#movie-info p#description")
const movieDetailWatched = document.querySelector("div#movie-info button#watched")
const movieDetailBlood = document.querySelector("div#movie-info #amount")


    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(movieArr => {
            movieArr.map(eachMovie => {
                createImageMenu(eachMovie)
            })
            renderMovieDetail(movieArr[0])  

            toggleWatchedButton()
        })

function createImageMenu(movie) {
    const movieList = document.querySelector('#movie-list')
    const image = document.createElement('img')
    image.src = movie.image
    movieList.appendChild(image)

    image.addEventListener('click', () => {
         renderMovieDetail(movie)
    })
}

const renderMovieDetail = (movie) =>{
    currentMovie = movie

    movieDetailImage.src = movie.image
    movieDetailTitle.innerText = movie.title
    movieDetailYearReleased.innerText = movie.release_year
    movieDetailDescription.innerText = movie.description 
    movieDetailWatched.innerText = movie.watched ? "Watched" : "Unwatched"
    movieDetailBlood.innerText = movie.blood_amount
}

const toggleWatchedButton = () => {
        movieDetailWatched.addEventListener('click', () => {
            currentMovie.watched = !currentMovie.watched
            movieDetailWatched.textContent = currentMovie.watched ? "Watched" : "Unwatched"

        })

}