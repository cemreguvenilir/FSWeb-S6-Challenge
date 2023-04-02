import Film from "./Film";

function Filmler(props) {
  const { char, i, films } = props;
  return (
    <h2 key={"k" + i}>
      <p>
        {films
          .filter((film) => char.films.includes(film.title))
          .map((film, i) => {
            return <Film film={film} i={i} />;
          })}
      </p>
    </h2>
  );
}

export default Filmler;
