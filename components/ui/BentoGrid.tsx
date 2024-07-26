"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import React from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const EducationTimeline = () => {
  const events = [
    {
      date: "2024-",
      title: "British Columbia Institute Of Technology",
      location: "Vancouver, BC",
      description: "Studying passionately to become a programmer by working hard to learn and practicing regularly.",
      icon: <FaGraduationCap />,
    },
    {
      date: "2019 - 2020",
      title: "The University Of British Columbia",
      location: "Vancouver, BC",
      description: "Graduated with a Bachelor's degree in Education with a specilization in secondary mathematics.",
      icon: <FaGraduationCap />,
    },
    {
      date: "2012 - 2019",
      title: "The University Of British Columbia",
      location: "Vancouver, BC",
      description: "Graduated with a Bachelor's degree in Science with a combined major in chemistry, life science, and mathematics.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <>
      <style jsx>{`
        .timeline-container {
          padding: 20px;
          position: relative;
          margin-left: 135px;
        }

        .timeline-event {
          position: relative;
          margin-bottom: 20px;
          display: flex;
          align-items: flex-start;
        }

        .timeline-icon {
          position: absolute;
          left: -40px;
          top: 5px;
          width: 30px;
          height: 30px;
          background-color: #4a5568;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .timeline-content {
          padding-left: 50px;
          background-color: #2d3748;
          color: #cbd5e0;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .timeline-content:hover {
          background-color: #4a5568;
          transform: translateY(-5px);
        }

        .timeline-date {
          font-size: 14px;
          color: #a0aec0;
        }

        .timeline-title {
          font-size: 18px;
          font-weight: bold;
          margin-top: 5px;
        }

        .timeline-location {
          font-size: 14px;
          color: #a0aec0;
          margin-bottom: 10px;
        }

        .timeline-description {
          font-size: 14px;
          color: #e2e8f0;
        }

        .timeline-event::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 5px;
          width: 8px;
          height: 8px;
          background-color: #4a5568;
          border-radius: 50%;
        }

        .timeline-event:nth-child(even) .timeline-content {
          background-color: #1a202c;
          border-radius: 8px;
          padding: 15px;
        }
      `}</style>
    <div className="timeline-container">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-icon">{event.icon}</div>
          <div className="timeline-content">
            <span className="timeline-date">{event.date}</span>
            <h3 className="timeline-title">{event.title}</h3>
            <span className="timeline-location">{event.location}</span>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

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
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
      // style={{
      //   height: "100%",
      // }}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  descriptionClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  descriptionClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ssuh10@my.bcit.ca");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col items-center justify-center space-y-4 border border-white/[0.1]",
        className
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
          "absolute top-0 w-[85%] px-5 p-5 lg-p-10"
        )}
      >
        <div className="w-full flex justify-center items-start">
          <div className="font-sans font-bold text-lg lg:text-5xl max-w-96 z-10 text-center">
            {title}
          </div>
        </div>
        <div className={cn("font-sans text-[#c1c2d3] text-sm md:text-xs lg:text-lg z-10 px-10 py-10", descriptionClassName)}
        style={{ lineHeight: '2.5' }}
        >
          {description}
        </div>

        {/* {id === 2 && <GlobeDemo />} */}

        {id === 3 && (
          <div className="flex flex-wrap gap-1 lg:gap-5 justify-center">
            <div className="flex flex-col gap-3 lg:gap-8">
              {["Python", "Java", "C", "JavaScript"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#192167]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {["TypeScript", "HTML", "CSS", "Tailwind"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#192167]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {["Bootstrap", "React", "Next.js", "Node.js"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#192167]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {["MongoDB", "Microsoft Access", "Microsoft SQL Server", "IBM DB2"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#192167]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {["MySQL", "SQLite", "Firebase", "Express"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#192167]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {["Web API", "Git & GitHub"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-[#192167]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 4 && (
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex flex-col gap-3">
              {EducationTimeline()}
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
