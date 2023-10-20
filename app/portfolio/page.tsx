"use client";

import PortfolioModal from "@/components/portfolioModal";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export type PortolioItem = {
  name: string;
  img: string;
};

const items: Array<PortolioItem> = [
  {
    name: "Dreams on a tape",
    img: "/img/portfolio/dreams on a tape.jpg",
  },
  {
    name: "The Emperor",
    img: "/img/portfolio/the emperor.jpg",
  },
];

const PortfolioPage = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(items[0]);

  const handleModalOpen = (newImage: PortolioItem) => {
    setModal(true);
    setModalImage(newImage);
  };

  return (
    <>
      <h1 className="text-4xl font-black">Portfolio</h1>
      <p className="lowercase mb-12">Take a look at my work</p>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {items.map((item) => (
          <div
            className="aspect-square w-full md:w-56 overflow-hidden relative portfolio-card"
            key={item.img}
            onClick={() => handleModalOpen(item)}
          >
            <Image
              alt={item.name}
              src={item.img}
              fill
              className="object-cover image"
            />
            <div className="absolute w-full title">
              <h3 className="font-black text-white">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <PortfolioModal
        isOpen={modalOpen}
        modalToggle={setModal}
        modalImage={modalImage}
      />
    </>
  );
};

export default PortfolioPage;
