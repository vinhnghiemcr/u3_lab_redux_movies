import  { connect } from 'react-redux'
import { useEffect } from 'react'
import { LoadMovies } from '../store/actions/MovieActions'
import { Link } from 'react-router-dom'


const mapStateToProps = ({ movieState }) => {
    return { movieState }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(LoadMovies())
    }
}

const Movies = (props) => {

    useEffect(() => {
        props.fetchMovies()
    }, [])

    return (
        <div>
            <h3>Movies</h3>
            <div className='movies-container'>   
                {props.movieState.movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} className="movie-card">
                        <div key={movie.id} >
                            <img src={`${props.movieState.IMG_URL}${movie.poster_path}`} alt='movie poster' />
                            <h2>{movie.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)