import styles from "./MovieCard.module.css";
//rafce
const MovieCard = (props) => {
  return (
    <div className={styles.movie}>
      <div>
        <p>{props.Year}</p>
      </div>

      <img src={props.Poster} alt="" />
      <h4>{props.Type}</h4>
      <h3>{props.Title}</h3>
      <p>{props.Descriptoion}</p>
    </div>
  );
};

export default MovieCard;
