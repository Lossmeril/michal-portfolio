"use client";

import ImageModal from "@/components/imageModal";
import Image from "next/image";
import { useState } from "react";

type Project = {
  name: string;
  desc: string;
  imgs: Array<string>;
};

const projects: Array<Project> = [
  {
    name: "MK Psychology",
    desc: "I have worked with MK Psychology for a long time. They receive a full branding package, including a curated and maintained brand identity, a social media posts, video content and more. A part of the brand identity is a logotype, a set of original style-unified icons and occasional illustrations.",
    imgs: ["/img/portfolio/dreams on a tape.jpg"],
  },
  {
    name: "FORT FRAMES",
    desc: "FORT FRAMES is a small factory manifacturing world-class bicycle frames that was in need of re-branding and new company presentation. I have worked on creating a new website reflecting the quality of FORT's products. On top of that, FORT received a new logotype and we are currently working on providing FORT with additional branding materials such as business cards, letterheads and other stationary.",
    imgs: ["/img/portfolio/dreams on a tape.jpg"],
  },
];

const ProjectsPage = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(projects[0].imgs[0]);

  const handleModalOpen = (newImage: string) => {
    setModal(true);
    setModalImage(newImage);
  };

  return (
    <>
      <h1 className="text-4xl font-black">projects I have worked on</h1>
      <p className="lowercase mb-12">All the things I can do</p>
      <div className="flex flex-row flex-wrap justify-start"></div>
      {projects.map((project) => (
        <div key={project.name}>
          <div className="flex flex-col flex-nowrap gap-4 items-center w-[80%] mb-12">
            <div className="flex flex-col flex-nowrap gap-3 w-full basis-3/5 mb-3">
              <h2 className="font-black text-2xl">{project.name}</h2>
              <p>{project.desc}</p>
            </div>
            <div className="w-full flex flex-row flex-nowrap gap-4">
              {project.imgs.map((img) => (
                <div
                  key={img}
                  className="aspect-square w-full md:w-56 overflow-hidden relative portfolio-card mb-4 basis-1/8"
                  style={{ backgroundColor: img }}
                  onClick={() => handleModalOpen(img)}
                >
                  <Image
                    alt=""
                    src={img}
                    fill
                    className="object-cover image"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/img/blur.png"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <ImageModal
        isOpen={modalOpen}
        modalToggle={setModal}
        image={modalImage}
      />
    </>
  );
};

export default ProjectsPage;
