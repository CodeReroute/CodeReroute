import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="p-6 bg-transparent absolute bottom-0 left-0 right-0 z-10">
      <div className="container mx-auto max-w-[720px] flex justify-between items-center">
        <Link href="/team" className="hover:opacity-80 transition-opacity">
          THE TEAM
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://linkedin.com" className="hover:opacity-80 transition-opacity">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <Link href="/press" className="hover:opacity-80 transition-opacity">
          PRESS INQUIRIES
        </Link>
      </div>
    </footer>
  )
}

