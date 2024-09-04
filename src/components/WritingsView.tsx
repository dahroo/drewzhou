import { WritingMetadata } from "../utils/utils";
import Link from "next/link";

interface WritingsViewProps {
    metadata: WritingMetadata[];
  }
  
const WritingsView: React.FC<WritingsViewProps> = ({ metadata }) => {
return (
    <div className="">
    {metadata.map((writing) => (
      <Link 
        key={writing.slug} 
        href={`/writings/${writing.slug}`}
        className="block border p-4 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        <div>
          <h2 className="text-xl font-bold">{writing.title}</h2>
          <p className="text-gray-600">{writing.subtitle}</p>
          <p className="text-sm text-gray-500">{writing.date}</p>
        </div>
      </Link>
    ))}
  </div>
);
};

export default WritingsView;