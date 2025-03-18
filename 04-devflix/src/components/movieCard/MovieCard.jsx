import MovieDescription from "../movieDescription/MovieDescription";
import styles from "./MovieCard.module.css";
const MovieCard = ({ apiUrl, ...props}) => {
  return (
    <>
    <div className={styles.movie}>
      <div>
        <p>{props.Year}</p>
      </div>

      <div>
        <img src={props.Poster} alt="" />
      </div>
      <div>
        <span>{props.Type}</span>
        <h3>{props.Title}</h3>
      </div>
    </div>
    <MovieDescription apiUrl={apiUrl} movieID={props.imdbID}/>
    </>
  );
};

export default MovieCard;
