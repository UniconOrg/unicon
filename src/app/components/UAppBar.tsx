'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Icons de MUI
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import WifiIcon from '@mui/icons-material/Wifi'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function UAppBar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true) // scroll up
      } else {
        setShowNavbar(false) // scroll down
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/favicon.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Menú central */}
        <nav className="flex bg-[#2d0142] rounded-3xl overflow-hidden border border-white text-white divide-x-3 divide-white/50 text-2xl p-2">
          <NavItem href="#boletos" icon={<ConfirmationNumberIcon />} text="Boletos" />
          <NavItem href="#ubicacion" icon={<LocationOnIcon />} text="Ubicación" />
          <NavItem href="#faqs" icon={<LiveHelpIcon />} text="FAQs" />
          <NavItem href="#contacto" icon={<WifiIcon />} text="Contacto" />
        </nav>

        {/* Redes sociales */}
        <div className="flex items-center gap-4 text-white text-xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  )
}

const NavItem = ({
  href,
  icon,
  text,
}: {
  href: string
  icon: React.ReactNode
  text: string
}) => (
  <Link
    href={href}
    className="px-8 py-3 flex items-center gap-2 text-white hover:text-[#eabfff] transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
)
