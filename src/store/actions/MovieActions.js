
import { GetMovies, GetMovieDetail } from '../../services/MovieService'
import { GET_MOVIES, GET_MOVIE_DETAIL } from '../types'


  export const LoadMovies= () => {
  
    return async (dispatch) => {
      try {
        const movies = await GetMovies()
        
        dispatch({
          type: GET_MOVIES,
          payload: movies
        })
      } catch (error) {
        throw error
      }
    }
}

export const LoadMovieDetail= (id) => {
  
    return async (dispatch) => {
      try {
        const movieDetail = await GetMovieDetail(id)
        
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: movieDetail
        })
      } catch (error) {
        throw error
      }
    }
}
  

  