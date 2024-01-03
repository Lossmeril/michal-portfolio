"use client";

import ImageModal from "@/components/imageModal";
import Image from "next/image";
import { useState } from "react";

type ProjectImage = {
  path: string;
  name: string;
  year: string;
};

type Project = {
  name: string;
  desc: string;
  imgs: Array<ProjectImage>;
};

const projects: Array<Project> = [
  {
    name: "MK Psychology",
    desc: "I have worked with MK Psychology for a long time. They receive a full branding package, including a curated and maintained brand identity, a social media posts, video content and more. A part of the brand identity is a logotype, a set of original style-unified icons and occasional illustrations.",
    imgs: [
      {
        path: "/img/portfolio/dreams on a tape.jpg",
        name: "Test 1",
        year: "2022",
      },
    ],
  },
  {
    name: "FORT FRAMES",
    desc: "FORT FRAMES is a small factory manifacturing world-class bicycle frames that was in need of re-branding and new company presentation. I have worked on creating a new website reflecting the quality of FORT's products. On top of that, FORT received a new logotype and we are currently working on providing FORT with additional branding materials such as business cards, letterheads and other stationary.",
    imgs: [
      {
        path: "/img/portfolio/dreams on a tape.jpg",
        name: "Test 1",
        year: "2022",
      },
    ],
  },
  {
    name: "SFÉRA educational centre",
    desc: "SFÉRA is an educational centre in Pardubice focusing on both school and free-time education, being equipped with high-class technology. Besides working as a tutor in IT and graphic design workshops, I create promotional materials based off the established brand identity as a in-house graphic designer.",
    imgs: [
      {
        path: "/img/portfolio/dreams on a tape.jpg",
        name: "Test 1",
        year: "2022",
      },
    ],
  },
];

const ProjectsPage = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(projects[0].imgs[0].path);

  const handleModalOpen = (newImage: string) => {
    setModal(true);
    setModalImage(newImage);
  };

  return (
    <>
      <h1 className="text-4xl font-black">projects I have worked on</h1>
      <p className="lowercase mb-12">
        A selection of the most interesting from the vast range of projects I
        have been involved with
      </p>
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
                <div key={img.path}>
                  <div
                    className="aspect-square w-full md:w-56 overflow-hidden relative portfolio-card mb-4"
                    onClick={() => handleModalOpen(img.path)}
                  >
                    <Image
                      alt={img.name}
                      src={img.path}
                      fill
                      className="object-cover image"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/img/blur.png"
                    />
                  </div>
                  <h2 className="text-md font-bold">
                    {img.name.length > 26
                      ? img.name.substring(0, 26 - 3) + "..."
                      : img.name}
                  </h2>
                  <p className="text-sm italic">{img.year}</p>
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
