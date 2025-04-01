import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  //Utilizando chave de API do arquivo .env

  const apiKey = "4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  // alimentando com dados para não ficar nulo
  useEffect(() => {
    searchMovies("Star Wars");
  }, []);
  //criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movies
    setMovies(data.Search);
  };
  //e = evento || ao clicar ou digitar algo
  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };

  return (
    <div id="app">
      <img className="logo" src={logo} alt="" />

      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          Type="text"
          placeholder="Pesquise por filmes"
        />
        <img onClick={() => searchMovies(search)} src={lupa} alt="" />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">Filme não achado</h2>
      )}

      <Footer
        devName={"Thiago Mazzi"}
        devLinks={"https://github.com/ThiagoM22"}
      />
    </div>
  );
}

export default App;
