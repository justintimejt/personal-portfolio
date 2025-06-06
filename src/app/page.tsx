'use client';

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-black text-gray-900 dark:text-white">
      <nav className="flex justify-between w-full text-md">
        <div className="flex gap-6">
          <Link href="/">Justin Chow</Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <FaSun className="w-5 h-5 text-white" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </nav>
      <main className="flex-1">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">&lt; about &gt;</h1>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>SWE intern @ <Link href="https://acto.com">ACTO</Link>
              <Link href="https://acto.com" target="_blank">
                <Image src="/images/acto.png" alt="ACTO logo" width={20} height={20} className="inline ml-1" />
              </Link> (summer 2025)
              </li>
              <li>Computer Science student at Western University</li>
              <li>prev: front-end engineer @ Tech for Social Impact (spring 2025)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg font-semibold">&lt; what I've been working on recently &gt;</h1>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>deployed a AI web app that generates LaTeX resumes</li>
              <li>solving leetcode problems</li>
              <li>trained a computer vision model to detect open parking spots</li>
              <li>built an app that tracks information accuracy of websites</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg font-semibold">&lt; featured &gt;</h1>
            <div className="flex justify-center pt-4">
              <Link href="https://crackdresume.vercel.app/" target="_blank">
                <Image 
                  src="/images/crackdresume.png" 
                  alt="CrackdResume app screenshot" 
                  width={500} 
                  height={300}
                  className="rounded-lg"
                />
              </Link>
            </div>
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
