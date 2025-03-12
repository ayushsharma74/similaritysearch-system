import MovieCard from "@/components/MovieCard";
import { db } from "@/db";
import { Movie } from "@/types";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const movies = db.collection("movies");

  const similarMovies = (await movies
    .find(
      {},
      {
        vectorize: term,
        limit: 10,
        projection: { $vector: 0 },
      }
    )
    .toArray()) as Movie[];

  return (
    <div className=" flex flex-row gap-8 flex-wrap justify-center py-8">
      {similarMovies?.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
}
