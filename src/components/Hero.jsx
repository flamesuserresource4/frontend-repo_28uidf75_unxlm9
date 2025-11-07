export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Konsultan Otomatisasi Industri & Transformasi Digital
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              PT. Ruang Kreatif Bersama membantu pabrik dan bisnis Anda meningkatkan efisiensi, kualitas, dan keandalan melalui solusi otomasi, integrasi IoT, dan sistem digital yang terukur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">Diskusi Proyek</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">Lihat Layanan</a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <dt className="text-xs text-gray-500">Uptime Sistem</dt>
                <dd className="text-xl font-semibold text-gray-900">99.9%</dd>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <dt className="text-xs text-gray-500">Efisiensi</dt>
                <dd className="text-xl font-semibold text-gray-900">+35%</dd>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <dt className="text-xs text-gray-500">Klien Satisfied</dt>
                <dd className="text-xl font-semibold text-gray-900">100+</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
                <div className="rounded-lg bg-gradient-to-br from-sky-400 to-blue-600" />
                <div className="rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600" />
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
                <div className="rounded-lg bg-gradient-to-br from-sky-400 to-blue-600" />
                <div className="rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600" />
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
                <div className="rounded-lg bg-gradient-to-br from-sky-400 to-blue-600" />
                <div className="rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
