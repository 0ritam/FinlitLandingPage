import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useRef } from "react";
import { NeonGradientCard } from "./ui/neon-gradient-card";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[5rem] -mt-[3rem]"
      crosses
      crossesOffset="lg:translate-y-[3rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative flex items-center justify-center mt-2 min-h-[calc(100vh-5.25rem)]" ref={parallaxRef}>
        {/* Neon Gradient Card as a background */}
        <NeonGradientCard className="relative max-w-[75rem] w-full mx-auto text-center p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center bg-n-8">
          {/* Main Content */}
          <div className="relative z-10 bg-n-8">
            <h1 className="h1 mb-6 text-n-1">
              Your Finance Buddy {` `}
              <span className="inline-block relative">
                FINLIT{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
              Unleash the knowledge of finance with Finlit. For the Youth, by the Youth.
            </p>
            <Button href="http://localhost:8080/">
              Get started
            </Button>
          </div>
        </NeonGradientCard>
      </div>
    </Section>
  );
};

export default Hero;
