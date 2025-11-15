"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState("Select a project");

  const projects = [
    { name: "Project 1", id: "project-1" },
    { name: "Project 2", id: "project-2" },
    { name: "Project 3", id: "project-3" },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icon.png"
              alt="Home"
              width={24}
              height={24}
              className="rounded sm:w-7 sm:h-7"
            />
          </Link>
          <Link
            href="/projects"
            className="text-lg sm:text-xl font-bold hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>
          <div className="ml-auto">
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-4 py-2 border-2 border-purple-800 rounded bg-white text-black hover:bg-purple-50 transition-colors cursor-pointer"
            >
              <option disabled>Select a project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-purple-800 mb-8">Projects</h1>

          <div className="bg-white p-6 border-2 border-gray-300 rounded shadow-sm">
            <p className="text-gray-900">Coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
