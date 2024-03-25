import About from "../components/about";
import Contact from "../components/contact/index";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-backgroundColor">
      <div className="">
        <Header />
      </div>
      <div className="sm:mt-[230px] mt-[100px] sm:mx-16 mx-6">
        <About />
      </div>
      <div className="sm:mt-[70px] mt-[40px] sm:mx-16 mx-6">
        <Experience />
      </div>
      <div className="sm:mt-[30px] mt-[2px]">
        <Portfolio />
      </div>
      <div className="sm:mt-[70px] mt-[40px]">
        <Testimonials />
      </div>
      <div className="sm:mt-[120px] mt-[70px] sm:mx-16 mx-6">
        <Contact />
      </div>
      <div className="sm:mt-[120px] -mt-[40px]">
        <Footer />
      </div>
    </div>
  );
}
