import WritingsView from "@/src/components/WritingsView";
import getWritingsMetadata from "@/src/utils/utils";

export default function Writings() {
  const writingsMetadata = getWritingsMetadata('data/writings');

  return (
    <main className="p-3">
      <h1 className="text-5xl font-bold mt-3">writings</h1>
      <WritingsView metadata={writingsMetadata}/>
    </main>
  );
}
