import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'

const App = () => {
  
  return (
    <div className="App">
      <h3>Movie with React Redux</h3>
      <Routes >
        <Route path='/' element={<Movies />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
      
    </div>
  )
}

export default App
