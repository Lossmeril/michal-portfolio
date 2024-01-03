"use client";

import ImageModal from "@/components/imageModal";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export type PortolioItem = {
  name: string;
  img: string;
  year: string;
  type: string;
};

const items: Array<PortolioItem> = [
  {
    name: "Dreams on a tape",
    img: "/img/portfolio/dreams on a tape.jpg",
    year: "2022",
    type: "mixed digital art",
  },
  {
    name: "Burning Desire",
    img: "/img/portfolio/burning desire.jpg",
    year: "2023",
    type: "vector digital art",
  },
  {
    name: "Cyberwagon",
    img: "/img/portfolio/cyberwagon.jpg",
    year: "2022",
    type: "digital concept art",
  },
  {
    name: "Dream On",
    img: "/img/portfolio/dream on.jpg",
    year: "2023",
    type: "vector digital art",
  },
  {
    name: "Ghibli Vibes",
    img: "/img/portfolio/ghibli vibes.jpg",
    year: "2022",
    type: "digital art",
  },
  {
    name: "I Became a New Pirate",
    img: "/img/portfolio/i became a new pirate.jpg",
    year: "2022",
    type: "musical poster",
  },
  {
    name: "Knights from the Land of a Morning Star",
    img: "/img/portfolio/knights from the land of a morning star.jpg",
    year: "2022",
    type: "digital art",
  },
  {
    name: "Masks",
    img: "/img/portfolio/masks.jpg",
    year: "2023",
    type: "vector digital art",
  },
  {
    name: "Rise of Pilgrims Art",
    img: "/img/portfolio/rise of pilgrims art.jpg",
    year: "2022",
    type: "digital game art",
  },
  {
    name: "The Magician",
    img: "/img/portfolio/the magician.jpg",
    year: "2021",
    type: "vector digital art",
  },
  {
    name: "The Emperor",
    img: "/img/portfolio/the emperor.jpg",
    year: "2021",
    type: "vector digital art",
  },
  {
    name: "The Lovers",
    img: "/img/portfolio/the lovers.jpg",
    year: "2021",
    type: "vector digital art",
  },
  {
    name: "Queen of Cups",
    img: "/img/portfolio/queen of cups.jpg",
    year: "2021",
    type: "vector digital art",
  },
  {
    name: "Oueen of Wands",
    img: "/img/portfolio/queen of wands.jpg",
    year: "2021",
    type: "vector digital art",
  },
  {
    name: "Gardener's Paradise",
    img: "/img/portfolio/photos/gardeners paradise.jpg",
    year: "2022",
    type: "portrait photography",
  },
  {
    name: "Neon Canvas",
    img: "/img/portfolio/photos/neon canvas.jpg",
    year: "2022",
    type: "portrait photography",
  },
  {
    name: "Soul in a City of Dreams",
    img: "/img/portfolio/photos/soul in a city of dreams.jpg",
    year: "2022",
    type: "portrait photography",
  },
  {
    name: "Improv Performance",
    img: "/img/portfolio/photos/theatre-1.jpg",
    year: "2022",
    type: "theatre photography",
  },
  {
    name: "First steps of a dance",
    img: "/img/portfolio/photos/theatre-2.jpg",
    year: "2022",
    type: "theatre photography",
  },
  {
    name: "Final Pose",
    img: "/img/portfolio/photos/theatre-3.jpg",
    year: "2022",
    type: "theatre photography",
  },
  {
    name: "A Lightbulb",
    img: "/img/portfolio/photos/lightbulb.jpg",
    year: "2023",
    type: "nature photography",
  },
  {
    name: "Traveling Cart",
    img: "/img/portfolio/travelling cart.jpg",
    year: "2022",
    type: "digital vintage poster",
  },
  {
    name: "Joja Mart Sale",
    img: "/img/portfolio/joja.jpg",
    year: "2020",
    type: "digital vintage poster",
  },
  {
    name: "Adventurer's Guild",
    img: "/img/portfolio/adventurers guild.jpg",
    year: "2020",
    type: "digital vintage poster",
  },
  {
    name: "Stardew Valley Spa",
    img: "/img/portfolio/spa.jpg",
    year: "2021",
    type: "digital vintage poster",
  },
  {
    name: "Dead Fish",
    img: "/img/portfolio/dead fish.jpg",
    year: "2019",
    type: "parkour team logo",
  },
  {
    name: "Labská High School E-sports",
    img: "/img/portfolio/labska high school.jpg",
    year: "2021",
    type: "e-sport team logo",
  },
  {
    name: "FORT FRAMES concept",
    img: "/img/portfolio/fort logo 1.jpg",
    year: "2021",
    type: "company logo prototype",
  },
  {
    name: "NHS App Illustrations",
    img: "/img/portfolio/nhs app.jpg",
    year: "2021",
    type: "nhs covid app diagrams",
  },
  {
    name: "R8 2022",
    img: "/img/portfolio/r8 2022.jpg",
    year: "2022",
    type: "film festival poster",
  },
  {
    name: "R8 2023",
    img: "/img/portfolio/r8 2023.jpg",
    year: "2023",
    type: "film festival poster",
  },
  {
    name: "Covid Portál",
    img: "/img/portfolio/covid portal.jpg",
    year: "2020",
    type: "government portal logo",
  },
  {
    name: "Starfall",
    img: "/img/portfolio/starfall.jpg",
    year: "2023",
    type: "vector illustration",
  },
];

const PortfolioPage = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(items[0].img);

  const handleModalOpen = (newImage: string) => {
    setModal(true);
    setModalImage(newImage);
  };

  items.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  return (
    <>
      <h1 className="text-4xl font-black">Portfolio</h1>
      <p className="lowercase mb-12">Take a look at my work</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-start gap-8 mb-12">
        {items.map((item) => (
          <div key={item.img}>
            <div
              className="aspect-square w-full md:w-56 overflow-hidden relative portfolio-card mb-4"
              onClick={() => handleModalOpen(item.img)}
            >
              <Image
                alt={item.name}
                src={item.img}
                fill
                className="object-cover image"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/img/blur.png"
              />
            </div>
            <h2 className="text-md font-bold">
              {item.name.length > 26
                ? item.name.substring(0, 26 - 3) + "..."
                : item.name}
            </h2>
            <p className="text-sm italic">{item.type + ", " + item.year}</p>
          </div>
        ))}
      </div>
      <ImageModal
        isOpen={modalOpen}
        modalToggle={setModal}
        image={modalImage}
      />
    </>
  );
};

export default PortfolioPage;
