import { PortolioItem } from "@/app/portfolio/page";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

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
      className="absolute top-0 left-0 w-screen h-screen overflow-hidden modal"
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
      <div className="z-10 absolute top-0 left-0 w-screen h-screen bg-black opacity-90"></div>
    </div>
  );
};

export default PortfolioModal;
