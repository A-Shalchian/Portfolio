"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import TailWindCSSIcon from "@/assets/icons/tailwind.svg";
import MongoDBIcon from "@/assets/icons/mongodb-leaf.svg";
import NodeJSIcon from "@/assets/icons/nodejsDark.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-map.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TailWindCSS",
    iconType: TailWindCSSIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node",
    iconType: NodeJSIcon,
  },
  {
    title: "Express",
    iconType: JavascriptIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
];

const hobbies = [
  {
    title: "VideoGraphy",
    emoji: "📽️",
    top: "5%",
    left: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    top: "53%",
    left: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "31%",
    left: "27%",
  },
  {
    title: "PhotoGraphy",
    emoji: "📷",
    top: "75%",
    left: "20%",
  },
  {
    title: "Music",
    emoji: "🎵",
    top: "45%",
    left: "70%",
  },
  {
    title: "Travelling",
    emoji: "🛫",
    top: "10%",
    left: "60%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div
            className="grid grid-cols-1 gap-8 md:grid 
          md:grid-cols-5 lg:grid-cols-3"
          >
            {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore my favorite book"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card> */}
            <Card className="h-[320px]  md:col-span-6 lg:col-span-3">
              <CardHeader
                title="My Tech Stack"
                description="Explore the techs and tools I use to create digital experiences"
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:15s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-5 
          lg:grid-cols-3"
          >
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the code"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 
                  bg-gradient-to-r from-emerald-300
                   to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-semibold text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover
              object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 size-20
            rounded-full after:content-[''] after:absolute after:inset-0
             after:outline after:outline-2 after:-outline-offset-2
             after:rounded-full after:outline-gray-950/30"
              >
                <div
                  className="absolute inset-0 rounded-full
                bg-gradient-to-r from-emerald-300
             to-sky-400 -z-20 animate-ping [animation-duration:2s]"
                ></div>
                <div
                  className="absolute inset-0 rounded-full
                bg-gradient-to-r from-emerald-300
             to-sky-400 -z-10"
                ></div>
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
