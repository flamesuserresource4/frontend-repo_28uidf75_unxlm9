import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-gray-900">Mengapa Memilih Kami</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Tim berpengalaman di industri manufaktur dan proses.</li>
                <li>• Pendekatan end-to-end: dari studi kelayakan hingga maintenance.</li>
                <li>• Fokus pada ROI: hemat biaya, tingkatkan throughput, kurangi downtime.</li>
                <li>• Dokumentasi, training, dan transfer knowledge yang rapi.</li>
              </ul>
            </div>
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900">Tentang PT. Ruang Kreatif Bersama</h3>
              <p className="mt-3 text-gray-700">Kami adalah perusahaan konsultan yang berfokus pada otomatisasi industri dan transformasi digital. Kami membantu perusahaan menjadi lebih tangkas melalui integrasi teknologi di lantai produksi, sistem informasi, hingga level manajemen.</p>
              <p className="mt-3 text-gray-700">Kami mengutamakan keandalan, keamanan, dan skalabilitas dalam setiap solusi yang kami bangun, sehingga bisnis Anda siap bertumbuh.</p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
