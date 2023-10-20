"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type PortolioItem = {
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

interface PortfolioModalProps {
  isOpen: boolean;
  modalToggle: Dispatch<SetStateAction<boolean>>;
  modalImage: PortolioItem;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  modalToggle,
  modalImage,
}) => {
  const handleModalClose = () => {
    modalToggle(false);
  };

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen overflow-hidden transition-all"
      style={{
        pointerEvents: isOpen ? "all" : "none",
        opacity: isOpen ? "1" : "0",
      }}
      onClick={() => handleModalClose()}
    >
      <div className="absolute w-[95%] md:w-[80%] h-[90%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
        <Image
          src={modalImage.img}
          alt={modalImage.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="z-10 absolute top-0 left-0 w-screen h-screen bg-black opacity-50"></div>
    </div>
  );
};

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
