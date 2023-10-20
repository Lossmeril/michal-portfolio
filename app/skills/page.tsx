import { ReactNode } from "react";

interface SkillSetProps {
  name: string;
  children: ReactNode;
}

const SkillSet: React.FC<SkillSetProps> = ({ name, children }) => {
  return (
    <div className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 mb-12">
      <h2 className="text-lg font-bold lowercase mb-4">{name}</h2>
      <ul>{children}</ul>
    </div>
  );
};

interface SkillProps {
  skill: string;
  confidence: number;
  note?: string;
}

const Skill: React.FC<SkillProps> = ({ skill, confidence, note }) => {
  const confidenceBars = !(confidence > 5 || confidence < 0) ? confidence : 0;

  return (
    <div className="">
      <h3 className="lowercase">
        {skill}
        {note ? (
          <span className="italic lowercase text-sm font-light">
            {" (" + note + ")"}
          </span>
        ) : (
          <></>
        )}
      </h3>
      <div className="flex flex-row flex-nowrap h-1 mt-2 mb-4 w-[33%]">
        {[...Array(confidenceBars)].map((e, i) => (
          <div key={i} className="basis-1/5">
            <div className="bg-black h-full w-[90%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black">My skills</h1>
      <p className="lowercase mb-12">All the things I can do</p>
      <div className="flex flex-row flex-wrap justify-start">
        <SkillSet name="General skills">
          <Skill skill="Graphic Design" confidence={0} />
          <Skill skill="Web Design and Front End" confidence={0} />
          <Skill skill="Cinematography and film" confidence={0} />
          <Skill skill="Marketing" confidence={0} />
          <Skill skill="Photography" confidence={0} />
        </SkillSet>

        <SkillSet name="Programming and technologies">
          <Skill skill="HTML + CSS" confidence={5} />
          <Skill skill="React" confidence={4} />
          <Skill skill="Typescript" confidence={4} />
          <Skill skill="Next.JS" confidence={4} />
          <Skill skill="PHP" confidence={3} />
          <Skill skill="Wordpress + Elementor" confidence={5} />
        </SkillSet>

        <SkillSet name="software">
          <Skill skill="Adobe Creative Cloud Suite" confidence={5} />
          <Skill
            skill="Microsoft Office Suite"
            confidence={5}
            note="ECDL certificate holder"
          />
          <Skill skill="AVID Media Composer" confidence={4} />
          <Skill skill="DaVinci Resolve" confidence={5} />
        </SkillSet>

        <SkillSet name="languages">
          <Skill skill="Czech & Slovak" confidence={5} note="native" />
          <Skill skill="English" confidence={5} note="fluent" />
          <Skill skill="Old Norse" confidence={1} note="basic knowledge" />
        </SkillSet>
      </div>
    </>
  );
};

export default SkillsPage;
