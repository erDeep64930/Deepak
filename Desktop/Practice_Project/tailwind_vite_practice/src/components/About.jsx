const About = () => {
  return (
    <div className="container">
      <div className="md:grid grid-cols-2 mx-auto items-center">
        {/* this is about section */}
        <div className=" p-8 space-y-4  ">
          <h4>
            <span className="text-secondary">About</span>{" "}
            <span className="text-amber-400">Me</span>{" "}
          </h4>

          <h2 className="translate-y-12">I'm a </h2>
          <p>
            React.js & Next.js Frontend Developer . My goal is to build fast ,
            scalable Mobile first responsive website that clearly communicate
            with visitors
          </p>
        </div>
        {/* this is residence section  */}
        <div className=" flex flex-col items-center">
          <div className="w-1/2 relative m-6 text-center top-[20%] ">
            <h5 className="animated-btn font-alkatra  ">
              Residence :- New Delhi , India
            </h5>
          </div>
          <div className="w-1/2 relative m-6 text-center top-[20%] ">
            <h5 className="animated-btn font-alkatra  ">
              Freelancer :- Available
            </h5>
          </div>
          <div className="w-1/2 relative m-6 text-center top-[20%] ">
            <h5 className="animated-btn font-alkatra  ">
              <a href="/cv.pdf" target="_blank">
                Download CV
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
