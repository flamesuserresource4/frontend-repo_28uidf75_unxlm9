import { Factory, Cog, Cloud, Shield } from 'lucide-react'

const services = [
  {
    icon: Factory,
    title: 'Otomatisasi Pabrik',
    desc: 'Desain & implementasi PLC, HMI/SCADA, DCS untuk lini produksi yang stabil dan efisien.'
  },
  {
    icon: Cog,
    title: 'Integrasi IoT & Sensor',
    desc: 'Pengumpulan data real-time, predictive maintenance, dan monitoring terpadu.'
  },
  {
    icon: Cloud,
    title: 'Sistem Digital & Dashboard',
    desc: 'MES, OEE, dashboard KPI, integrasi ERP untuk visibilitas menyeluruh.'
  },
  {
    icon: Shield,
    title: 'Keandalan & Keamanan',
    desc: 'Audit sistem, hardening jaringan industri, dan backup/restore otomatis.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Layanan Kami</h2>
          <p className="mt-3 text-gray-600">Solusi menyeluruh dari level kontrol hingga manajemen data.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <s.icon className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
