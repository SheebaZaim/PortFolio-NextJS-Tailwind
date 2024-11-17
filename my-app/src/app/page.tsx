import Image from "next/image";
import Hero from "./components/Hero";
import About from "./About/page";
import Footer from "./components/Footer";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
// import Experience from "./Experience/page";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <>
      <Hero/>
      <About/>
      <Contact/>
      <Skills/>
      {/* <Experience/> */}

      </>
    </main>
  );
}
