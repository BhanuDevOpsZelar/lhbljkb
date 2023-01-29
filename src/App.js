import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';

function App() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(()=>{
    PopolarFetch();
  },[])
  const PopolarFetch= async()=>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7b2046840b6f2ca91b08077a13467fa5"
      );
    const movie = await data.json();
    setPopular(movie.results)
    setFiltered(movie.results)
    console.log(movie);
  }
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className='popular-movies'>
      {filtered.map((movie)=>{
        return <Movie key={movie.id} movie={movie}/>
      })}
      </div>
    </div>
  );
}

export default App;
