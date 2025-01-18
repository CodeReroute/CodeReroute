"use client"

import Link from "next/link"

export default function Header() {
  return (
    <nav className="p-6 bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto relative">
        {/* Logo - Positioned absolutely to the left */}
        <Link href="/" className="absolute left-6 hover:opacity-80 transition-opacity">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </Link>
        
        {/* Centered Navigation Links */}
        <div className="max-w-[720px] mx-auto flex justify-between items-center">
          <Link href="/tech-company" className="hover:opacity-80 transition-opacity w-[140px]">
            TECH COMPANY
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/mappetizer" className="hover:opacity-80 transition-opacity">
              MAPPETIZER
            </Link>
          </div>
          <Link href="/work-here" className="hover:opacity-80 transition-opacity w-[120px] text-right">
            WORK HERE
          </Link>
        </div>
      </div>
    </nav>
  )
}

