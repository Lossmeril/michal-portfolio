import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { SiCodersrank } from "react-icons/si";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  handle: string;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  text,
  handle,
  link,
}) => {
  return (
    <div className="mb-4">
      <a href={link} target="_blank">
        <div className="flex flex-row flex-nowrap gap-4 items-center">
          {icon}
          <div className="flex flex-col">
            <h3 className="font-bold">{text}</h3>
            <p className="font-light text-sm">{handle}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

const FilmographyPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black mb-4">Get in touch!</h1>
      <p className="lowercase mb-12">
        Interested in my skills? Wanna collaborate? Just wating to chat? Find me
        bellow!
      </p>
      <div className="flex-col gap-4">
        <ContactItem
          icon={<IoMailSharp size={24} />}
          text="E-mail"
          handle="michal.spitalsky@lossmeril.art"
          link="mailto:michal.spitalsky@lossmeril.art"
        />

        <ContactItem
          icon={<GrLinkedinOption size={24} />}
          text="LinkedIn"
          handle="/in/lossmeril"
          link="https://www.linkedin.com/in/lossmeril/"
        />

        <ContactItem
          icon={<IoLogoGithub size={24} />}
          text="GitHub"
          handle="/lossmeril"
          link="https://github.com/Lossmeril"
        />
        <ContactItem
          icon={<SiCodersrank size={24} />}
          text="Codersrank"
          handle="/lossmeril"
          link="https://profile.codersrank.io/user/lossmeril"
        />
      </div>
    </>
  );
};

export default FilmographyPage;
