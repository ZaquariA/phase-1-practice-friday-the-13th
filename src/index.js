let currentMovie

const movieList = document.querySelector('#movie-list')

const detailMovieImage = document.querySelector('#detail-image')
const detailMovieTitle = document.querySelector('#title')
const detailMovieYearReleased = document.querySelector('#year-released')
const detailMovieDescription = document.querySelector('#description')
const detailMovieWatched = document.querySelector('#watched')
const detailMovieBloodAmount = document.querySelector('#amount')

const bloodForm = document.querySelector('#blood-form')
const bloodInput = document.querySelector('#blood-amount')


const url = 'http://localhost:3000/movies'

function getMovies() {
    fetch(url)
    .then(res => res.json())
    .then(movieArr => {
        
        movieDisplay(movieArr[0])

        toggleWatchedButton()

        bloodTotal()

        movieArr.map(eachMovie => {
            displayMovieMenu(eachMovie)
        })


    })
}

const displayMovieMenu = (movie) => {
    const imageElement = document.createElement('img')
    imageElement.src = movie.image
    movieList.appendChild(imageElement)

    imageElement.addEventListener('click', () => {
        movieDisplay(movie)
    })
}

const movieDisplay = (movie) => {
    currentMovie = movie
    
    detailMovieImage.src = movie.image
    detailMovieTitle.textContent = movie.title
    detailMovieYearReleased.textContent = movie.release_year
    detailMovieDescription.textContent = movie.description
    detailMovieWatched.textContent = movie.watched ? "Watched" : "Unwatched"
    detailMovieBloodAmount.textContent = movie.blood_amount
}

const toggleWatchedButton = () => {

    detailMovieWatched.addEventListener('click', () => {
        console.log("clicked")
    currentMovie.watched = !currentMovie.watched
    detailMovieWatched.textContent = currentMovie.watched ? "Watched" : "Unwatched"
    })
}

const bloodTotal = () => {
    bloodForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const sum = Number(bloodInput.value) + Number(detailMovieBloodAmount.textContent)
        // console.log
        detailMovieBloodAmount.textContent = sum

        bloodInput.value = ""

    })
}

getMovies()