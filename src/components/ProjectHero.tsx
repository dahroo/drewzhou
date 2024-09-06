import projectsData from "@/data/projectsData";
import Link from "next/link";
import { useMemo } from "react";
import { generateRandomGradient } from "../utils/utils";

export const ProjectHero: React.FC = () => {
    const getLatestProject = useMemo(() => {
        if (projectsData.length === 0) {
          return null;
        }
        return projectsData[projectsData.length - 1];
      }, []);

    const bgGradient = useMemo(() => generateRandomGradient(), []);

    if (!getLatestProject) {
        return null;
    }

    return (
        <a
          href={getLatestProject.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full border p-7 rounded-md transition duration-300 ease-in-out hover:ring-4 hover:ring-gray-200"
          style={{ background: bgGradient }}
        >
          <div className="flex flex-col justify-end h-full mt-auto">
            <h2 className="text-5xl font-bold mb-5">{getLatestProject.title}</h2>
            <p className="text-lg text-gray-600">{getLatestProject.description}</p>
          </div>
        </a>
      );
};

