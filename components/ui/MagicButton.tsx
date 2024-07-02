import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode,
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[2px] focus:outline-none md:w-60 hover:scale-110 active:scale-105 transition">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`bg-gradient-to-r from-indigo-400 from-10% to-emerald-400 to-90% inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-7 text-lg font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton