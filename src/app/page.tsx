import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex justify-between w-full">
        <div className="flex gap-6">
          <Link href="/">Justin Chow</Link>
        </div>
        <div className="flex gap-6">
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <main className="flex-1">
        <div className="space-y-10">
          <div className ="space-y-5">
            <h1 className="text-2xl font-semibold">About Me</h1>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>SWE intern @ <Link href="https://acto.com">ACTO</Link>
              <Image src="/images/acto.png" alt="ACTO logo" width={20} height={20} className="inline ml-1" /> (summer 2025)
              </li>
              <li>Computer Science student at Western University</li>
              <li>prev: front-end engineer @ Tech for Social Impact (spring 2025)</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">what I've been working on recently:</h1>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>deployed a AI web app that generates LaTeX resumes</li>
              <li>solving leetcode problems</li>
              <li>trained a computer vision model to detect open parking spots</li>
              <li>built an app that tracks information accuracy of websites</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">featured:</h1>
          </div>
        </div>
      </main>
      <footer>
        <div className="flex justify-between w-full">
          <div className="flex gap-6">
            <Link href="https://github.com/justin-chow"><FaGithub className="w-5 h-5" /></Link>
            <Link href="https://www.linkedin.com/in/justin-chow-0000000000/"><FaLinkedin className="w-5 h-5" /></Link>
            <Link href="https://www.instagram.com/justin.chow/"><FaTwitter className="w-5 h-5" /></Link>
            <Link href="mailto:your.email@example.com"><FaEnvelope className="w-5 h-5" /></Link>
          </div>
          <div className="text-sm text-gray-500">
            <p>© 2025 Justin Chow</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
