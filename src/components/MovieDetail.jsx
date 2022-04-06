import  { connect } from 'react-redux'
import { useEffect } from 'react'
import { LoadMovieDetail } from '../store/actions/MovieActions'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'


const mapStateToProps = ({ movieDetailState }) => {
    return { movieDetailState }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetail: (id) => dispatch(LoadMovieDetail(id))
    }
}


const MovieDetail = (props) => {

    let { id } = useParams()

    useEffect(() => {
        props.fetchMovieDetail(id)
    },[])

    return (
        <div className='movie-detail'>
            <img src={props.movieDetailState.IMG_URL + props.movieDetailState.movie.backdrop_path} alt='backdrop image' />
            <ReactStars value={props.movieDetailState.movie.vote_average} size={24} color2={'#ffd700'} edit={false} />
            <h2>{props.movieDetailState.movie.title}</h2>
            <p>{props.movieDetailState.movie.overview}</p>
        </div>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(MovieDetail)