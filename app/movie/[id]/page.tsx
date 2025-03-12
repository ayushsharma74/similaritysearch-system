import { db } from "@/db";
import { Movie, SimilarMovie } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const movies = db.collection("movies");
  const { id } = await params;

  console.log("id:" + id);

  const search = await movies.find({ $and: [{ _id: id }] });

  if (!(await search.hasNext())) {
    return notFound();
  }

  const movie = (await search.next()) as Movie;

  console.log("Vextor: " + movie.$vectorize);

  const similarMovies = (await movies
    .find(
      {},
      {
        vector: movie.$vector,
        limit: 6,
        includeSimilarity: true,
      }
    )
    .toArray()) as SimilarMovie[];

  similarMovies.shift();

  return (
    <div className="p-4">
      <div className="flex">
        <Image
          src={movie.Poster}
          className="rounded-xl"
          width={200}
          height={200}
          alt={movie.Title}
        />
        <div className="p-4 gap-2 flex flex-col">
          <h1 className="text-5xl font-bold ">{movie.Title}</h1>
          <p>
            {movie.Year} | {movie.Rated} | {movie.Runtime} | {movie.Genre}
          </p>
          <p>{movie.$vectorize}</p>
        </div>
      </div>
    </div>
  );
}
