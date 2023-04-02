import Accordeon from "./Accordeon";

function Film(props) {
  const { film } = props;
  return (
    <div>
      <Accordeon title={film.title}>
        <p>{film.opening_crawl}</p>
        <p>Director by: {film.director}</p>
        <p>Producer by: {film.producer}</p>
        <p>Release Date: {film.release_date}</p>
      </Accordeon>
    </div>
  );
}
export default Film;
