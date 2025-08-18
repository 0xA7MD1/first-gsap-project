import Hero from "./components/Hero";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import MassageSection from "./components/MassageSection";
import FlavorSection from "./components/FlavorSection";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import NutritionSection from "./components/nutritionSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 3,
      effects: true,
      ignoreMobileResize: true,
      normalizeScroll: true,
      smoothTouch: 0.5,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="wrapper">
        <div id="content">
          <Hero />
          <MassageSection />
          <FlavorSection />
          <NutritionSection />
          <div className="h-dvh border border-blue-500"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
