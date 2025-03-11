import MovieCard from "@/components/MovieCard";
import { db } from "@/db";
import { Movie } from "@/types";

export default async function Home() {
  const movies = db.collection("movies");

  const allMovies = (await movies.find({}, {
    limit: 21
  }).toArray()) as Movie[];

  return <div className=" flex flex-row gap-8 flex-wrap justify-center py-8">
    {allMovies.map((movie) => (
      <MovieCard key={movie._id} movie={movie} />
    ))}
  </div>;
}
