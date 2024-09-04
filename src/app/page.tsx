import ProjectsView from "../components/ProjectsView";
import WritingsView from "../components/WritingsView";
import getWritingsMetadata from "../utils/utils";

export default function Home() {
  const writingsMetadata = getWritingsMetadata('data/writings');

  return (
    <main className="p-3">
      <h1>writings</h1>
      <WritingsView metadata={writingsMetadata}/>
      <h1>projects</h1>
      <ProjectsView />
    </main>
  );
}
