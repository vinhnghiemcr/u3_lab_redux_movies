const {MOVIE_LOADING_TYPE, GET_MOVIES } = require('../types')

const initialState = {
    movies: [],
    IMG_URL : 'https://image.tmdb.org/t/p/w500/'
}

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload}
        default:
            return {...state}
    }
}

export default MoviesReducer
