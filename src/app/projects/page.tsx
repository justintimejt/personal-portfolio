'use client';

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaExternalLinkAlt, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  appLink?: string;
  technologies: string[];
}

function ProjectCard({ title, description, image, repoLink, appLink, technologies }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-black shadow-md hover:shadow-lg transition-all">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
          </div>
          <div className="flex gap-3">
            <Link href={repoLink} target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </Link>
            {appLink && (
              <Link href={appLink} target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaExternalLinkAlt className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image 
            src={image}
            alt={`${title} screenshot`}
            width={500} 
            height={300}
            className="w-full h-auto transition-transform hover:scale-105"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { theme, toggleTheme } = useTheme();
  const projects = [
    {
      title: "CrackdResume",
      description: "AI-powered LaTeX resume generator",
      image: "/images/crackdresume.png",
      repoLink: "https://github.com/justintimejt/crackdresume",
      appLink: "https://crackdresume.vercel.app/",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini', 'Vercel']
    },
    {
      title: "Feeltr",
      description: "Search engine verifying website content",
      image: "/images/feeltr.png",
      repoLink: "https://github.com/carolwangg/uofthacks2024",
      appLink: "https://feeltr.onrender.com/static/index.html",
      technologies: ['Python', 'Javascript','Flask', 'CSS','HTML','Google API', 'BeautifulSoup 4', 'Textblob', 'Render']
    },
    {
      title: "Parking Spotter",
      description: "Computer vision model detecting vacant spots",
      image: "/images/parkingspotter.png",
      repoLink: "https://crackdresume.vercel.app/",
      technologies: ['Typescript', 'Python','Flask', 'OpenCV' ,'NumPy', 'React.js','HTML']
    },
    {
      title: "Fund Homecare Canada Website",
      description: "Designed and integrated front-end for website",
      image: "/images/fhc.png",
      repoLink: "https://github.com/Fund-Homecare-Canada-Website-Redesign/FHC-webredesign",
      appLink: "https://fhc-webredesign.vercel.app/",
      technologies: ['React.js', 'Node.js', 'Javascript', 'HTML', 'CSS','Vercel']
    },
    {
      title: "To Do List",
      description: "Drag and drop to do list - manage your tasks",
      image: "/images/todolist.png",
      repoLink: "https://github.com/justintimejt/DoToListApp",
      technologies: ['Typescript', 'Vite', 'Tailwind CSS']
    },
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-black text-gray-900 dark:text-white">
      <nav className="flex justify-between w-full text-md">
        <div className="flex gap-6">
          <Link href="/">Justin Chow</Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/projects">Projects</Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <FaSun className="w-5 h-5 text-gray-500" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </nav>
      <main className="flex-1">
        <div className="space-y-6">
          <div className="grid gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </main>
      <footer>
        <div className="flex justify-between w-full">
          <div className="flex gap-6">
            <Link href="https://github.com/justintimejt" target="_blank"><FaGithub className="w-5 h-5" /></Link>
            <Link href="https://www.linkedin.com/in/justin-chow-a74a972b5/" target="_blank"><FaLinkedin className="w-5 h-5" /></Link>
            <Link href="https://x.com/justinpchow" target="_blank"><FaTwitter className="w-5 h-5" /></Link>
            <Link href="mailto:jchow267@uwo.ca" target="_blank"><FaEnvelope className="w-5 h-5" /></Link>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 Justin Chow</p>
          </div>
        </div>
      </footer>
    </div>
  );
}