import { MdRemoveRedEye } from "react-icons/md"
import { IoMdArrowRoundForward } from "react-icons/io"
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Image from 'next/image'
import DavidImage from '../public/David.jpeg'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-green-200 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
                    This is h2 tag in Hero.tsx. Replace this later.
                </h2> */}

                <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
                    <h1 className="text-white text-center md:tracking-wider mb-4 text-4xl md:text-6xl lg:text-7xl">
                        David Suh
                    </h1>

                    <div className="relative w-32 h-32">
                        <Image 
                            src={DavidImage} 
                            alt="David Suh" 
                            className="rounded-full border-white border-[0.2rem] shadow-2xl" 
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                <TextGenerateEffect
                    className="text-center text-[40px] text-lg md:text-xl lg:text-2xl"
                    words="Life-long learner, problem solver, and team player" />

                <div className="flex gap-4 flex-col mt-4 md:flex-row md:mt-10 items-center justify-center">
                    <a href="/resume.pdf">
                    <MagicButton 
                        title="Open My Resume"
                        icon={<MdRemoveRedEye />}
                        position="right"
                    />
                    </a>

                    <a href="#">
                        <MagicButton 
                            title="Contact Me"
                            icon={<IoMdArrowRoundForward />}
                            position="right"
                        />
                    </a>
                    
                    <a className="border-black-200 border-2 bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.15rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/20 dark:text-black/80" href="https://www.linkedin.com/in/david-sungjin-suh/" target="_blank" style={{ width: '54.4px', height: '54.4px' }}>
                        <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                    </a>

                    <a className="border-black-200 border-2 bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.15rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20 dark:text-black/80" href="https://github.com/SungJin-Suh" target="_blank">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero