import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import RecentProjects from "./RecentProjects"

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
            descriptionClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              descriptionClassName={descriptionClassName}
            >
              {id === 2 && <RecentProjects />} {/* Render RecentProjects for projects section */}
            </BentoGridItem>
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid