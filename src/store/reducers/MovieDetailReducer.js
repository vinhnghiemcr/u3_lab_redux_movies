const {GET_MOVIE_DETAIL } = require('../types')

const initialState = {
    movie: {},
    IMG_URL : 'https://image.tmdb.org/t/p/w500/'
}

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAIL:
            return {...state, movie: action.payload}
        default:
            return {...state}
    }
}

export default MoviesReducer
