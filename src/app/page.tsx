import { ProjectHero } from "../components/ProjectHero";
import { WritingHero } from "../components/WritingHero";
import getWritingsMetadata from "../utils/utils";

export default function Home() {
  const writingsMetadata = getWritingsMetadata('data/writings', 1);

  return (
      <div className="grid grid-rows-2 p-3 gap-3 w-full">
        <div className="row-span-1 w-full">
          <WritingHero metadata={writingsMetadata[0]} />
        </div>
        <div className="row-span-1 ">
          <ProjectHero />
        </div>
      </div>
  );
}