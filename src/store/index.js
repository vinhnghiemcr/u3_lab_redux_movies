import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import MoviesReducer from './reducers/MovieReducer'
import MovieDetailReducer from './reducers/MovieDetailReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(
    combineReducers({
        movieState: MoviesReducer,
        movieDetailState: MovieDetailReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store