import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Hubungi Kami</h2>
            <p className="mt-3 text-gray-600">Mari diskusikan kebutuhan otomasi dan digitalisasi Anda. Tim kami siap membantu.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <p className="text-gray-700">Sun life tower Lt 8 Jakarta</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-1" />
                <a href="https://wa.me/6285716643949" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">0857 1664 3949 (WhatsApp)</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-1" />
                <a href="mailto:rkb.ruangkreatifbersama@gmail.com" className="text-blue-600 hover:underline">rkb.ruangkreatifbersama@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <form className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Nama Anda" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="email@domain.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telepon</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="08xxxxxxxxxx" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pesan</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Ceritakan kebutuhan Anda" />
              </div>
              <button type="button" onClick={() => alert('Terima kasih! Kami akan menghubungi Anda.')} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">Kirim</button>
              <p className="text-xs text-gray-500">Dengan mengirim formulir ini, Anda menyetujui untuk dihubungi oleh tim kami.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
