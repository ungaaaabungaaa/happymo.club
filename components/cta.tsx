import SectionWrapper from "../components/sectionwrapper";
import NavLink from "../components/navlink";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-5xl font-bold sm:text-4xl mb-4">
          1% Daily Profits
        </h2>
        
        <p className="text-lg text-white font-bold">Join instant to our Copy Trading Platform. Track your Profits Daily, Win Daily <span></span>
        & make informed decisions -<span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mt-2 "> 40x Challenge.</span></p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-5">
          <NavLink
            href="https://buy.stripe.com/dR6bLR9Mg1vvcMweV7"
            className="text-white text-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500  ring-offset-2 transition"
          >
           40x Challenge
          </NavLink>
        </div>
       
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
