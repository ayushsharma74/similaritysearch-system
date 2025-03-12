import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie._id}`}
      key={movie._id}
      className="flex flex-col gap-5 items-center flex-wrap w-1/4 hover:scale-105 transition-all"
    >
      <Image
        className="rounded-xl"
        src={movie.Poster}
        alt={movie.Title}
        width={200}
        height={100}
      />
      <h1 className="text-wrap text-center">
        {movie.Title}
      </h1>
    </Link>
  );
}
