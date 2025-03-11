const LengthOfMockMovies = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

export default function Loading() {
  return (
    <div className=" flex flex-row gap-8 flex-wrap justify-center py-8">
           {LengthOfMockMovies.map((idx) => (
               <div key={idx} className="w-1/4 h-64 rounded-2xl bg-zinc-700 animate-pulse" />
           ))}
    </div>
  );
}
