type Project = {
  name: string;
  desc: string;
  imgs: Array<string>;
};

const projects: Array<Project> = [
  {
    name: "MK Psychology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imgs: ["red", "blue", "green", "yellow", "lavender", "maroon"],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black">projects I have worked on</h1>
      <p className="lowercase mb-12">All the things I can do</p>
      <div className="flex flex-row flex-wrap justify-start"></div>
      {projects.map((project) => (
        <div key={project.name}>
          <div className="flex flex-col flex-nowrap gap-4 items-center w-[80%]">
            <div className="flex flex-col flex-nowrap gap-2 w-full basis-3/5">
              <h2 className="font-black text-2xl">{project.name}</h2>
              <p>{project.desc}</p>
            </div>
            <div className="w-full flex flex-row flex-nowrap gap-4">
              {project.imgs.map((img) => (
                <div
                  key={img}
                  className="w-full aspect-square basis-1/4 overflow-hidden"
                  style={{ backgroundColor: img }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsPage;
