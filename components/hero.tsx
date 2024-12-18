import NavLink from "../components/navlink";

const Hero = () => (
  <section>
    <div className="custom-screen pt-4 py-12 text-white">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-white font-extrabold mx-auto sm:text-6xl">
          <span className="relative">
            Easiest way to
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></span>
          </span>
          {" "}Making 💰 Profits{" "}         
            One Click  {" "}
          <span className="relative">
            CopyTrading 🚀
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"> </span>
          </span>
        </h1>
        <br></br>

        <p className=" text-2xl mx-auto w-3/4 Lg:w-full">
          1% Profit EveryDay Start Now & Stop Anytime.
          <br></br>
          40X Challenge
        </p>
        <br></br>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
        <NavLink
            href="7"
            className="text-white text-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 ring-offset-2 transition rounded-full"
        >
          Start Now (One Click)
        </NavLink>
          
        <NavLink
          href=""
          className="text-white text-bold text-lg bg-none border-8 p-2  mb-5  border-none"
        >
          View Goals
        </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
