type Film = {
  name: string;
  poster: string;
  year: string;
  genre: string;
  length: Number;
};

const films: Array<Film> = [
  {
    name: "Garden of Eden",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7aOZ5krxoBJmzH3F2F1TRj1WdQP.jpg",
    year: "2023",
    genre: "documentary",
    length: 106,
  },
  {
    name: "Somnio Ergo Sum",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2Knv1ip83EXRsQPhy3BAhNKc0rO.jpg",
    year: "2023",
    genre: "experimental",
    length: 3,
  },
];

const FilmographyPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Filmography</h1>
      <p className="lowercase mb-12">Watch my stuff</p>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {films.map((item) => (
          <div key={item.name}>
            <div className="aspect-[210/297] w-56 overflow-hidden mb-4">
              <img
                alt={item.poster}
                src={item.poster}
                className="w-full h-full object-stratch"
              />
            </div>
            <h2 className="text-md font-bold">{item.name}</h2>
            <p className="text-sm italic">
              {item.genre + ", " + item.year + ", " + item.length + " minutes"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilmographyPage;
