import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  appLink: string;
  technologies: string[];
}

function ProjectCard({ title, description, image, repoLink, appLink, technologies }: ProjectCardProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-center pt-4">
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
          <Image 
            src={image}
            alt={`${title} screenshot`}
            width={500} 
            height={300}
            className="rounded-lg transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-200">{description}</p>
              </div>
              <div className="flex gap-3">
                <Link href={repoLink} target="_blank" className="text-white hover:text-gray-300 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link href={appLink} target="_blank" className="text-white hover:text-gray-300 transition-colors">
                  <FaExternalLinkAlt className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "CrackdResume",
      description: "AI-powered LaTeX resume generator",
      image: "/images/crackdresume.png",
      repoLink: "https://crackdresume.vercel.app/",
      appLink: "https://crackdresume.vercel.app/",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Vercel']
    },
    // Add more projects here
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex justify-between w-full text-md">
        <div className="flex gap-6">
          <Link href="/">Justin Chow</Link>
        </div>
        <div className="flex gap-6">
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <main className="flex-1">
        <div className="space-y-6">
          <h1 className="text-lg font-semibold">&lt; projects &gt;</h1>
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
            <Link href="https://github.com/justintimejt"><FaGithub className="w-5 h-5" /></Link>
            <Link href="https://www.linkedin.com/in/justin-chow-a74a972b5/"><FaLinkedin className="w-5 h-5" /></Link>
            <Link href="https://x.com/justinpchow"><FaTwitter className="w-5 h-5" /></Link>
            <Link href="mailto:jchow267@uwo.ca"><FaEnvelope className="w-5 h-5" /></Link>
          </div>
          <div className="text-sm text-gray-500">
            <p>© 2025 Justin Chow</p>
          </div>
        </div>
      </footer>
    </div>
  );
}