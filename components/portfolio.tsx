"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { FileText, BarChart3, Monitor, Settings, Wrench, Network } from "lucide-react"
import { PDFGenerator } from "./pdf-generator"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("review")

  const navigationButtons = [
    {
      id: "review",
      label: "Review & Persiapan",
      icon: FileText,
      count: 3,
      color: "bg-blue-500",
    },
    {
      id: "installation",
      label: "Pelaksanaan",
      icon: Settings,
      count: 3,
      color: "bg-green-500",
    },
    {
      id: "qc",
      label: "Quality Control",
      icon: Monitor,
      count: 1,
      color: "bg-orange-500",
    },
    {
      id: "cusex",
      label: "Customer Experience",
      icon: BarChart3,
      count: 1,
      color: "bg-purple-500",
    },
    {
      id: "cfa",
      label: "Care For Asset",
      icon: Wrench,
      count: 3,
      color: "bg-emerald-500",
    },
    {
      id: "tacac",
      label: "TACAC Configuration",
      icon: Network,
      count: 3,
      color: "bg-cyan-500",
    },
  ]

  const portfolioItems = [
    {
      title: "Sistem Perencanaan Jaringan FTTH",
      description:
        "Sistem pemetaan dan perencanaan jaringan fiber optik menggunakan Google Maps untuk menentukan lokasi splitter, pelanggan existing, dan calon pelanggan baru. Membantu dalam analisis kelayakan pemasangan dan optimasi jaringan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.06.45_e8d03450.jpg-GT3UtLJvOQsvXqTpv4fc2BTpeBknPW.jpeg",
      technologies: ["Google Maps API", "Network Planning", "FTTH", "GIS"],
      category: "Network Planning",
    },
    {
      title: "Sistem Approval Pemasangan",
      description:
        "Aplikasi untuk mengelola proses approval pemasangan baru dengan fitur tracking status (Tercover/Tidak Tercover/Butuh Perluasan). Sistem ini membantu mempercepat proses persetujuan dan dokumentasi pemasangan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.07.15_715f71c5.jpg-Nq7zJBojCdjJcI0YN7VMfVnpghXYrh.jpeg",
      technologies: ["Web Application", "Form Management", "Status Tracking"],
      category: "Customer Management",
    },
    {
      title: "Dashboard Manajemen Opportunity",
      description:
        "Dashboard komprehensif untuk mengelola dan memantau semua opportunity pemasangan ICONNET. Menampilkan data lengkap termasuk ID permohonan, durasi, nama pemohon, dan status real-time untuk memudahkan monitoring dan follow-up.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.06.06_5f9133d3.jpg-s3YvW0cPtYlNdiw3WBNDtC2RVZKVvo.jpeg",
      technologies: ["Dashboard", "Data Management", "Real-time Monitoring"],
      category: "Project Management",
    },
  ]

  const installationItems = [
    {
      title: "Monitoring Persiapan Petugas Aktivasi",
      description:
        "Sistem monitoring untuk memantau kesiapan petugas aktivasi di seluruh wilayah. Dashboard ini menampilkan status petugas, jumlah PA (Perintah Aktivasi) yang open, done, dan carry over untuk memastikan distribusi kerja yang optimal.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.20.23_11485473.jpg-4dVe8biT4n6NKf5vVAl8QBf26AT1Nt.jpeg",
      technologies: ["Workforce Management", "Real-time Monitoring", "Status Tracking"],
      category: "Team Management",
    },
    {
      title: "Monitoring PA Open Disposition",
      description:
        "Sistem untuk memantau disposisi Perintah Aktivasi (PA) yang masih terbuka. Menampilkan detail pelanggan, nomor telepon, ID PA, layanan, produk, dan agent yang bertanggung jawab untuk memastikan tidak ada pekerjaan yang terlewat.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.19.07_7f5a42a5.jpg-owXIoQlk3jGWsjxBnRLlZVzYZZNQWw.jpeg",
      technologies: ["Work Assignment", "Customer Management", "Field Operations"],
      category: "Operations Management",
    },
    {
      title: "Dokumentasi Proses Instalasi",
      description:
        "Sistem dokumentasi lengkap proses instalasi FTTH dengan workflow step-by-step mulai dari K3 Safety, Splitter/FAT, Installation, Provisioning, Testing, hingga Evidence Work Done. Dilengkapi dengan galeri foto sebagai bukti pekerjaan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.21.09_d25c1e02.jpg-dBRdpPssGTR0uodLFJ2uCKoYMdd598.jpeg",
      technologies: ["Installation Workflow", "Photo Documentation", "Quality Assurance"],
      category: "Field Documentation",
    },
  ]

  const qcItems = [
    {
      title: "Sistem Quality Control (QC) Pemasangan",
      description:
        "Sistem kontrol kualitas untuk memverifikasi setiap tahap pemasangan FTTH. Menampilkan detail permohonan lengkap dan checklist verifikasi dengan dokumentasi foto untuk setiap step: K3 Safety First, Splitter/FAT, Installation, Testing, dan Evidence Work Done.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.31.32_f60072ae.jpg-tYxLbBDsHl1sncpSlLE2FuQPJ1E8dy.jpeg",
      technologies: ["Quality Control", "Photo Verification", "Step-by-step Validation", "BAPS Integration"],
      category: "Quality Assurance",
    },
  ]

  const cusexItems = [
    {
      title: "Sistem Customer Experience Management",
      description:
        "Sistem manajemen pengalaman pelanggan untuk menangani tindak lanjut pelanggan yang tidak melakukan pembayaran. Mengelola proses konfirmasi keberlanjutan layanan dan proses dismantle (pengambilan perangkat ONT dan kabel) jika pelanggan tidak berlangganan lagi.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.47.54_5ba22468.jpg-FGh4evAywujGdoGdonmO4hDZWgo3Xr.jpeg",
      technologies: ["Customer Management", "Payment Follow-up", "Dismantle Process", "Equipment Retrieval"],
      category: "Customer Service",
    },
  ]

  const cfaItems = [
    {
      title: "Pemeliharaan Box ODP (Optical Distribution Point)",
      description:
        "Dokumentasi pemeliharaan dan perawatan Box ODP PLN ICON yang terpasang di tiang utilitas. Memastikan box dalam kondisi baik, aman dari gangguan cuaca, dan semua koneksi fiber optik berfungsi optimal untuk distribusi layanan ke pelanggan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.53.46_ffa60b74.jpg-5ximBDHf9xDIEPPuNAbpDqcio6zULc.jpeg",
      technologies: ["ODP Maintenance", "Fiber Optic", "Network Infrastructure", "Asset Management"],
      category: "Infrastructure Care",
    },
    {
      title: "Perawatan Infrastruktur Jaringan Tiang",
      description:
        "Aktivitas perawatan rutin infrastruktur jaringan pada tiang utilitas. Meliputi pengecekan kondisi kabel, perangkat jaringan, dan akses maintenance menggunakan tangga untuk memastikan semua aset jaringan dalam kondisi optimal dan aman.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.52.45_bea2ea29.jpg-OnMYZScGXd7kSZtXjKKKIFUm2Rg6LX.jpeg",
      technologies: ["Pole Infrastructure", "Cable Management", "Safety Procedures", "Preventive Maintenance"],
      category: "Field Maintenance",
    },
    {
      title: "Inspeksi dan Maintenance Perangkat OLT",
      description:
        "Petugas teknis PLN melakukan inspeksi dan maintenance langsung pada perangkat OLT (Optical Line Terminal) yang terpasang di tiang. Menggunakan prosedur K3 yang ketat dengan APD lengkap untuk memastikan keamanan kerja dan kualitas perawatan aset jaringan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2008.54.10_89c3873e.jpg-m9GIoanQMfGqQmlw5q0FzuXRK8aEVn.jpeg",
      technologies: ["OLT Maintenance", "K3 Safety", "Technical Inspection", "Field Operations"],
      category: "Equipment Care",
    },
  ]

  const tacacItems = [
    {
      title: "Konfigurasi GPON-ONU Interface",
      description:
        "Konfigurasi interface GPON-ONU pada perangkat Raisecom dengan pengaturan line-profile-id dan service-profile-id. Melakukan setup multiple ONU dengan konfigurasi switchport mode trunk dan VLAN untuk distribusi layanan fiber optik ke pelanggan.",
      image: "/images/tacac-gpon-config.jpeg",
      technologies: ["GPON", "ONU Configuration", "VLAN Setup", "Raisecom", "Fiber Optic"],
      category: "Network Configuration",
    },
    {
      title: "Monitoring Parameter ONU",
      description:
        "Monitoring real-time parameter ONU meliputi temperature, voltage, bias current, transmit power (TxPower), dan receive power (RxPower). Memantau kondisi transceiver untuk memastikan kualitas sinyal optimal dan deteksi dini gangguan pada jaringan GPON.",
      image: "/images/tacac-onu-monitoring.jpeg",
      technologies: ["ONU Monitoring", "Power Level", "Signal Quality", "Network Diagnostics", "GPON"],
      category: "Network Monitoring",
    },
    {
      title: "Raisecom ROAP Platform Management",
      description:
        "Pengelolaan platform Raisecom Optical Access Platform (ROAP) dengan konfigurasi berbagai interface termasuk gigabitethernet, gpon-olt, ten-gigabitethernet, dan VLAN. Monitoring status port dengan kondisi enable, up, forward, dan online untuk memastikan operasional jaringan yang optimal.",
      image: "/images/tacac-roap-interface.jpeg",
      technologies: ["ROAP Platform", "Interface Management", "Port Status", "Network Operations", "Optical Access"],
      category: "Platform Management",
    },
  ]

  const getSectionData = () => {
    switch (activeSection) {
      case "review":
        return {
          title: "Review dan Persiapan Pemasangan",
          description:
            "Melakukan review awal calon pelanggan terkait kesediaan slot, jarak material dan kelayakan pemasangan baru",
          items: portfolioItems,
        }
      case "installation":
        return {
          title: "Pelaksanaan Pemasangan dan Aktivasi",
          description: "Monitoring dan dokumentasi proses pelaksanaan pemasangan serta aktivasi layanan ICONNET",
          items: installationItems,
        }
      case "qc":
        return {
          title: "Quality Control (QC)",
          description:
            "Sistem kontrol kualitas dan verifikasi untuk memastikan standar pemasangan FTTH sesuai prosedur",
          items: qcItems,
        }
      case "cusex":
        return {
          title: "Customer Experience (Cusex)",
          description:
            "Melakukan tindak lanjut kepada pelanggan yang tidak melakukan pembayaran dan mengelola proses dismantle perangkat",
          items: cusexItems,
        }
      case "cfa":
        return {
          title: "Care For Asset (CFA)",
          description:
            "Memastikan aset jaringan seperti OLT dan Box ODP terawat, aman, serta dapat digunakan dengan optimal",
          items: cfaItems,
        }
      case "tacac":
        return {
          title: "TACAC - Pengecekan dan Konfigurasi Aplikasi",
          description:
            "Pengecekan dan konfigurasi aplikasi TACAC untuk pengelolaan perangkat jaringan GPON, monitoring parameter ONU, dan manajemen platform Raisecom ROAP",
          items: tacacItems,
        }
      default:
        return {
          title: "Review dan Persiapan Pemasangan",
          description:
            "Melakukan review awal calon pelanggan terkait kesediaan slot, jarak material dan kelayakan pemasangan baru",
          items: portfolioItems,
        }
    }
  }

  const currentSection = getSectionData()

  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portfolio Kerja</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah dokumentasi dan bukti kerja saya selama bertugas di PLN Icon Plus KR Mamuju.
          </p>
          <div className="mt-6">
            <PDFGenerator />
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {navigationButtons.map((button) => {
              const IconComponent = button.icon
              const isActive = activeSection === button.id

              return (
                <Button
                  key={button.id}
                  onClick={() => setActiveSection(button.id)}
                  variant={isActive ? "default" : "outline"}
                  className={`
                    flex items-center gap-2 px-4 py-2 h-auto transition-all duration-200
                    ${isActive ? `${button.color} text-white hover:opacity-90` : "hover:bg-muted border-border/50"}
                  `}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{button.label}</span>
                  <Badge
                    variant="secondary"
                    className={`
                      ml-1 text-xs px-2 py-0.5
                      ${
                        isActive
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-muted-foreground/10 text-muted-foreground"
                      }
                    `}
                  >
                    {button.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">{currentSection.title}</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">{currentSection.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSection.items.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Dokumentasi Kerja PLN Icon Plus KR Mamuju</span>
          </div>
        </div>
      </div>
    </section>
  )
}
