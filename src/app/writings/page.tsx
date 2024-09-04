import WritingsView from "@/src/components/WritingsView";
import getWritingsMetadata from "@/src/utils/utils";

export default function Writings() {
  const writingsMetadata = getWritingsMetadata('data/writings');

  return (
    <main>
      <h1>writings</h1>
      <WritingsView metadata={writingsMetadata}/>
    </main>
  );
}
