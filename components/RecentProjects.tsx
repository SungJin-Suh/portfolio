import { projects } from '@/data'
import React from 'react'
import { WobbleCard } from './ui/wobble-card'

const RecentProjects = () => {
  return (
    <div id="projects">
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, link, technologies }) => (
                <div key={ id } className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    <WobbleCard containerClassName="h-full">
                        <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden pr-10">
                            <div className="flex items-center justify-center gap-2">
                                <h2 className="text-lg font-bold">
                                    { title }
                                </h2>
                                <a className="border-black-200 border-2 bg-white p-2 text-gray-700 flex items-center gap-2 rounded-full text-[1.15rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:text-black/80" 
                                    href={ link } 
                                    target="_blank"
                                    style={{ width: "2.5rem", height: "2.5rem" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                            </path>
                                        </svg>
                                </a>
                            </div>
                            <p className="text-sm mt-2 pr-4">{ des }</p>
                            <div className="flex flex-wrap justify-center gap-2 mt-2 pr-4">
                                { technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="relative w-full h-full">
                                <img 
                                src={img}
                                alt={title}
                                className="z-10 w-full object-cover h-full rounded-md rotate-2 scale-90"
                            />
                            </div>
                        </div>
                    </WobbleCard>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects