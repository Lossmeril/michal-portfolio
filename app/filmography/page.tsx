import Image from "next/image";

type Film = {
  name: string;
  poster: string;
  year: string;
  genre: string;
  length: Number | "N/A";
  director: string;
};

const films: Array<Film> = [
  {
    name: "Garden of Eden",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7aOZ5krxoBJmzH3F2F1TRj1WdQP.jpg",
    year: "2023",
    genre: "documentary",
    length: 106,
    director: "Michal Špitálský",
  },
  {
    name: "Somnio Ergo Sum",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2Knv1ip83EXRsQPhy3BAhNKc0rO.jpg",
    year: "2023",
    genre: "experimental",
    length: 3,
    director: "Michal Špitálský",
  },
];

const tbaFilms: Array<Film> = [
  {
    name: "Project Doll",
    poster: "/img/film/tba/doll.jpg",
    year: "TBA",
    genre: "cyberpunk gender drama",
    length: "N/A",
    director: "A. Morek & M. Špitálský",
  },
  {
    name: "Project Tennis Ball",
    poster: "/img/film/tba/tennis ball.jpg",
    year: "TBA",
    genre: "crimi animation",
    length: "N/A",
    director: "M. Špitálský & G. Matthews",
  },
];

const FilmographyPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Filmography</h1>
      <p className="lowercase mb-12">Watch my stuff</p>
      <div className="flex flex-row flex-wrap justify-start gap-8 mb-12">
        {films.map((item) => (
          <div key={item.name}>
            <div className="aspect-[210/297] w-56 overflow-hidden mb-4">
              <img
                alt={item.poster}
                src={item.poster}
                className="w-full h-full object-stratch"
              />
            </div>
            <h3 className="text-md font-bold">{item.name}</h3>
            <p className="text-sm font-bold">{"dir. " + item.director}</p>
            <p className="text-sm italic font-light">
              {item.genre + ", " + item.year + ", " + item.length + " minutes"}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-black lowercase mb-4">Upcoming projects</h2>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {tbaFilms.map((film) => (
          <div key={film.name}>
            <div className="aspect-[210/297] w-56 overflow-hidden mb-4 relative">
              <Image
                alt={film.poster}
                src={film.poster}
                className="w-full h-full object-stratch"
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL="/img/blur.png"
              />
            </div>
            <h3 className="text-md font-bold">{film.name}</h3>
            <p className="text-sm font-bold">{"dir. " + film.director}</p>
            <p className="text-sm italic font-light">
              {film.genre + ", " + film.year}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilmographyPage;
