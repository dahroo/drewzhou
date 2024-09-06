import { WritingMetadata } from "../utils/utils";
import Link from "next/link";
import { useMemo } from "react";
import { generateRandomGradient } from "../utils/utils";

interface WritingsViewProps {
    metadata: WritingMetadata;
  }
  
export const WritingHero: React.FC<WritingsViewProps> = ({ metadata }) => {
    const bgGradient = useMemo(() => generateRandomGradient(), []);
    return (
        <div className="h-full w-full">
        <Link 
            key={metadata.slug} 
            href={`/writings/${metadata.slug}`}
            className="block h-full w-full border p-7 rounded-md transition duration-300 ease-in-out hover:ring-4 hover:ring-gray-200"
            style={{background: bgGradient}}
            >
            <div className="flex flex-col justify-between">
                <p className="text-md text-gray-600 text-right">{metadata.formatDate}</p>
                <div className="mt-28">
                    <h2 className="text-5xl font-bold mb-5">{metadata.title}</h2>
                    <p className="text-lg text-gray-600">{metadata.subtitle}</p>
                </div>
            </div>
        </Link>
        </div>

    );
};

