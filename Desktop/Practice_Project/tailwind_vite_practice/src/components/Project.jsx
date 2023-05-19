const Projects = () => {
  const MyWorks = [
    {
      title: "Hiring App",
      description: "Management is a goal-oriented process",
      image: "/images/meet.jpg",
    },
    {
      title: "Dk_iTech",
      description: "My youtube Channel",
      image: "/images/tech.jpg",
    },
    {
      title: "Youtube Clone App",
      description: "Video Streaming App",
      image: "/images/design.jpg",
    },
    {
      title: "Foods Villa",
      description: "Food Ordering App",
      image: "/images/ecom.jpg",
    },
  ];
  return (
    <div className="container flex flex-col">
      <div className=" p-8 space-y-4  ">
        <h4>
          <span className="text-secondary">My</span>
          <span className="text-amber-400"> Projects :-</span>
        </h4>
      </div>
      <div className="md:grid grid-cols-2 gap-10 mt-10 space-y-8">
        {MyWorks.map((item) => {
          return (
            <div className="border border-secondary p-5 flex flex-col space-y-5 rounded transform hover:scale-105 duration-300">
              <h1 className="text-center -mt-8 bg-white border border-secondary">
                {item.title}
              </h1>
              <img src={item.image} alt="PIC" className="h-20 w-80 " />
              <p>{item.description}</p>
              <button className="animated-btn">Links</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
