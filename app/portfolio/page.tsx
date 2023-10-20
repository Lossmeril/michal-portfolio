import Image from "next/image";

const items = [
  {
    img: "https://images.unsplash.com/photo-1696464795756-2d92a11c504f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1695374885715-6bc75534f7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
  },
];

const PortfolioPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black mb-4">Portfolio</h1>
      <p className="lowercase mb-12">Take a look at my work</p>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {items.map((item) => (
          <div
            className=" aspect-square md:h-56 w-full md:w-56 overflow-hidden"
            key={item.img}
          >
            <img
              alt={item.img}
              src={item.img}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioPage;
