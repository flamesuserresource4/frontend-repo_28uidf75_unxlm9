export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {year} PT. Ruang Kreatif Bersama. All rights reserved.</p>
          <div className="text-sm text-gray-500">Industrial Automation • Digital Transformation</div>
        </div>
      </div>
    </footer>
  )
}
