import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import FitSho from "@/assets/images/fitsho.png";
import ttt from "@/assets/images/ttt.png";
import gomoku from "@/assets/images/gomoku.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "FitSho",
    year: "2025",
    title: "Fitness App",
    results: [
      { title: "Improved site speed by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://github.com/A-Shalchian/fitsho",
    image: FitSho,
  },
  {
    company: "Gomoku",
    year: "2025",
    title: "Gomoku Game",
    results: [
      { title: "MiniMax function implemented with alpha-beta pruning" },
      { title: "built with Java, made 20% faster" },
    ],
    link: "https://github.com/A-Shalchian/Gomoku-9x9",
    image: gomoku,
  },
  {
    company: "Tic Tac Toe",
    year: "2025",
    title: "Infinite Tic Tac Toe",
    results: [
      { title: "Unique TTT with a twist" },
      { title: "Responsive design for all devices" },
      { title: "Real-time multiplayer functionality" },
    ],
    link: "https://infinitic-tac-toe.vercel.app/",
    image: ttt,
  },

  {
    company: "Acme Corp",
    year: "Coming Soon",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Coming Soon" },
      { title: "Coming Soon" },
      { title: "Coming Soon" },
    ],
    link: "https://github.com/A-Shalchian",
    image: darkSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-World Results"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="
               px-8 pt-8 pb-0 md:pt-12 md:px-10
                lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 
                inline-flex font-bold uppercase tracking-widest text-sm gap-2 
                text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base  text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full rounded-xl
                  md:w-auto px-8
                font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute 
                    lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
