const MovieCard = () => {
  const data = {
    id: 7,
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster:
      "https://images.unsplash.com/photo-1629219219837-b21dc7cc239b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <div className="movie-card-container">
      <img src={data.poster} alt="movie" className="movie-card-poster" />
      <div className="movie-card-details">
        <h3
          style={{ fontWeight: "bold", color: "white", marginBottom: "10px" }}
        >
          {data.title}
        </h3>
        <div className="movie-card-statistics">
          <p className="movie-text">{data.year}</p>
          <p className="movie-text" style={{ color: "yellow" }}>
            ★ {data.rating}
          </p>
        </div>
        <p className="movie-text">{data.genre}</p>
        <hr className="movie-line" />
        <p className="movie-text">Not rated yet</p>
      </div>
    </div>
  );
};

export default MovieCard;
