const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full h-12 md:h-24 flex flex-col md:flex-row flex-nowrap justify-start md:justify-between items-center lowercase py-12 text-left">
      <p className="mb-4 md:mb-0">Made with coffee, minimalism and react.js</p>
      <p>&copy; Michal Špitálský, {currentYear}</p>
    </footer>
  );
};

export default Footer;
