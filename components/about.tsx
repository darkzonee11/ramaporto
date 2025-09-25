export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Tentang Saya</h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Saya Muhammad Rama Refiando, saat ini sedang menyeimbangkan studi Informatika di Universitas Telkom dengan
              peran profesional sebagai Junior Engineer 2 di PLN Icon Plus Kantor Representatif Mamuju. Saya telah
              berhasil menyelesaikan magang selama satu tahun di perusahaan yang sama dan dipromosikan ke posisi
              kepemimpinan saat ini.
            </p>

            <p>
              Keahlian saya terletak pada persilangan antara infrastruktur telekomunikasi dan manajemen proyek. Saya
              mengkhususkan diri dalam implementasi{" "}
              <span className="text-accent font-medium">Fiber to the Home (FTTH)</span>, konfigurasi sistem, dan
              troubleshooting teknis. Pekerjaan saya meliputi monitoring aktivasi layanan, konfigurasi perangkat Optical
              Line Terminal (OLT), dan memastikan standar kualitas di semua proyek.
            </p>

            <p>
              Saya adalah individu yang disiplin, unggul dalam manajemen waktu, dan berkembang baik dalam kerja mandiri
              maupun kolaborasi tim. Saya menyukai tantangan dan peluang baru sambil mempertahankan integritas tinggi
              dalam semua upaya profesional. Latar belakang saya dalam desain grafis juga memungkinkan saya membawa
              solusi kreatif untuk masalah teknis.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-accent">3+</div>
              <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-accent">3.56</div>
              <div className="text-sm text-muted-foreground">IPK Saat Ini</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
