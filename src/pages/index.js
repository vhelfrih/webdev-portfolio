import Follows from "../components/Follows/Follows";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { useEffect, useState } from "react";
import ScrollButton from "../components/ScrollToTop/ScrollButton";
import { ScrollIconContainer } from "../components/ScrollToTop/ScrollButtonStyles";
// import CV from "../components/CV/CV";
// import Portal from "../components/CV/Portal";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1800;

      isTop !== true ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <ScrollIconContainer>
        {showButton && <ScrollButton clicked={scrollToTop} />}
      </ScrollIconContainer>
      <Technologies />
      <Timeline />
      <Follows />
      {/* <Portal> */}

      {/* <CV /> */}
      {/* </Portal> */}

    </Layout>
  );
};

export default Home;
