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
    name: "The Emperor",
    img: "/img/portfolio/the emperor.jpg",
    year: "2021",
    type: "vector digital art",
  },
];

const PortfolioPage = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(items[0].img);

  const handleModalOpen = (newImage: string) => {
    setModal(true);
    setModalImage(newImage);
  };

  return (
    <>
      <h1 className="text-4xl font-black">Portfolio</h1>
      <p className="lowercase mb-12">Take a look at my work</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-start gap-8">
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
            <h2 className="text-md font-bold">{item.name}</h2>
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
