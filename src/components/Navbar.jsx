import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold">RKB</div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">PT. Ruang Kreatif Bersama</p>
              <p className="text-xs text-gray-500">Industrial Automation & Digital</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900">Layanan</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">Tentang</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Kontak</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Konsultasi Gratis</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" className="block px-2 py-2 rounded hover:bg-gray-50">Layanan</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-50">Tentang</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-gray-50">Kontak</a>
            <a href="#contact" className="block px-2 py-2 rounded bg-blue-600 text-white text-center">Konsultasi Gratis</a>
          </div>
        )}
      </div>
    </header>
  )
}
