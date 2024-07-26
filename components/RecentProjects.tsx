import { projects } from '@/data'
import React from 'react'
import { WobbleCard } from './ui/wobble-card'

const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className="heading">
            Recent Projects
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={ id } className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    <WobbleCard>
                        <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden">
                            <div className="text-center pr-10 pb-10 w-full">
                                <h2 className="text-lg font-bold">{ title }</h2>
                                <p className="text-sm mt-2">{ des }</p>
                            </div>
                            <div>
                                <img src="bg.png" alt="bg-img" />
                            </div>
                            <img 
                                src={img}
                                alt={title}
                                className="z-10 absolute bottom-0"
                            />
                        </div>
                    </WobbleCard>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects