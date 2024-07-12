"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[12rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ssuh10@my.bcit.ca");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col items-center justify-center space-y-4 border border-white/[0.1]",
        className,
        "h-48"
      )}
      style={{
        background: "rgb(4, 7, 29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full w-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
      </div>

      <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className={"object-cover, object-center w-full h-full"}
          />
        )}
      </div>

      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 absolute top-0 w-full px-5 p-5 lg-p-10"
        )}
      >
        {/* <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 text-center">
          {description}
        </div> */}
        <div className="w-full flex justify-center items-start">
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-center">
            {title}
          </div>
        </div>

        {/* {id === 2 && <GlobeDemo />} */}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {["Python", "Java", "C", "JavaScript", "TypeScript"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              {[
                "HTML",
                "CSS",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind",
                "Bootstrap",
                "MongoDB",
                "Microsoft Access",
                "Microsoft SQL Server",
                "IBM DB2",
                "MySQL",
                "SQLite",
                "Firebase",
                "Express",
                "Web API",
                "Git & GitHub",
              ].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative flex justify-center w-full">
            <div className="absolute -bottom-5 right-0">
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>

            <MagicButton
              title={copied ? "Email Copied!" : "Copy Email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};
