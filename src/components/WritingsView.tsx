import { WritingMetadata } from "../utils/utils";
import Link from "next/link";

interface WritingsViewProps {
  metadata: WritingMetadata[];
}

const WritingsView: React.FC<WritingsViewProps> = ({ metadata }) => {
  
  return (
    <div className="space-y-4 mt-7">
      {metadata.map((writing) => (
        <Link 
          key={writing.slug} 
          href={`/writings/${writing.slug}`}
          className="block border p-4 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          <div className="flex flex-col sm:flex-row items-start">
            <div className="flex-grow min-w-0 sm:mr-4 mb-2 sm:mb-0">
              <h2 className="text-xl font-bold break-words">{writing.title}</h2>
              <p className="text-gray-600 mt-1">{writing.subtitle}</p>
            </div>
            <p className="text-gray-600 whitespace-nowrap flex-shrink-0">{writing.formatDate}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WritingsView;