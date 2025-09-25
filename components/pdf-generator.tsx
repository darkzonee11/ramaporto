"use client"

import { Button } from "@/components/ui/button"
import { FileDown, Loader2 } from "lucide-react"
import { useState } from "react"

interface PortfolioData {
  personalInfo: {
    name: string
    title: string
    location: string
    company: string
  }
  sections: Array<{
    title: string
    description: string
    items: Array<{
      title: string
      description: string
      technologies: string[]
      category: string
    }>
  }>
}

export function PDFGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)

  const portfolioData: PortfolioData = {
    personalInfo: {
      name: "Rama",
      title: "Network Engineer & System Administrator",
      location: "Mamuju, Sulawesi Barat",
      company: "PLN Icon Plus KR Mamuju",
    },
    sections: [
      {
        title: "Review dan Persiapan Pemasangan",
        description:
          "Melakukan review awal calon pelanggan terkait kesediaan slot, jarak material dan kelayakan pemasangan baru",
        items: [
          {
            title: "Sistem Perencanaan Jaringan FTTH",
            description:
              "Sistem pemetaan dan perencanaan jaringan fiber optik menggunakan Google Maps untuk menentukan lokasi splitter, pelanggan existing, dan calon pelanggan baru. Membantu dalam analisis kelayakan pemasangan dan optimasi jaringan.",
            technologies: ["Google Maps API", "Network Planning", "FTTH", "GIS"],
            category: "Network Planning",
          },
          {
            title: "Sistem Approval Pemasangan",
            description:
              "Aplikasi untuk mengelola proses approval pemasangan baru dengan fitur tracking status (Tercover/Tidak Tercover/Butuh Perluasan). Sistem ini membantu mempercepat proses persetujuan dan dokumentasi pemasangan.",
            technologies: ["Web Application", "Form Management", "Status Tracking"],
            category: "Customer Management",
          },
          {
            title: "Dashboard Manajemen Opportunity",
            description:
              "Dashboard komprehensif untuk mengelola dan memantau semua opportunity pemasangan ICONNET. Menampilkan data lengkap termasuk ID permohonan, durasi, nama pemohon, dan status real-time untuk memudahkan monitoring dan follow-up.",
            technologies: ["Dashboard", "Data Management", "Real-time Monitoring"],
            category: "Project Management",
          },
        ],
      },
      {
        title: "Pelaksanaan Pemasangan dan Aktivasi",
        description: "Monitoring dan dokumentasi proses pelaksanaan pemasangan serta aktivasi layanan ICONNET",
        items: [
          {
            title: "Monitoring Persiapan Petugas Aktivasi",
            description:
              "Sistem monitoring untuk memantau kesiapan petugas aktivasi di seluruh wilayah. Dashboard ini menampilkan status petugas, jumlah PA (Perintah Aktivasi) yang open, done, dan carry over untuk memastikan distribusi kerja yang optimal.",
            technologies: ["Workforce Management", "Real-time Monitoring", "Status Tracking"],
            category: "Team Management",
          },
          {
            title: "Monitoring PA Open Disposition",
            description:
              "Sistem untuk memantau disposisi Perintah Aktivasi (PA) yang masih terbuka. Menampilkan detail pelanggan, nomor telepon, ID PA, layanan, produk, dan agent yang bertanggung jawab untuk memastikan tidak ada pekerjaan yang terlewat.",
            technologies: ["Work Assignment", "Customer Management", "Field Operations"],
            category: "Operations Management",
          },
          {
            title: "Dokumentasi Proses Instalasi",
            description:
              "Sistem dokumentasi lengkap proses instalasi FTTH dengan workflow step-by-step mulai dari K3 Safety, Splitter/FAT, Installation, Provisioning, Testing, hingga Evidence Work Done. Dilengkapi dengan galeri foto sebagai bukti pekerjaan.",
            technologies: ["Installation Workflow", "Photo Documentation", "Quality Assurance"],
            category: "Field Documentation",
          },
        ],
      },
      {
        title: "Quality Control (QC)",
        description: "Sistem kontrol kualitas dan verifikasi untuk memastikan standar pemasangan FTTH sesuai prosedur",
        items: [
          {
            title: "Sistem Quality Control (QC) Pemasangan",
            description:
              "Sistem kontrol kualitas untuk memverifikasi setiap tahap pemasangan FTTH. Menampilkan detail permohonan lengkap dan checklist verifikasi dengan dokumentasi foto untuk setiap step: K3 Safety First, Splitter/FAT, Installation, Testing, dan Evidence Work Done.",
            technologies: ["Quality Control", "Photo Verification", "Step-by-step Validation", "BAPS Integration"],
            category: "Quality Assurance",
          },
        ],
      },
      {
        title: "Customer Experience (Cusex)",
        description:
          "Melakukan tindak lanjut kepada pelanggan yang tidak melakukan pembayaran dan mengelola proses dismantle perangkat",
        items: [
          {
            title: "Sistem Customer Experience Management",
            description:
              "Sistem manajemen pengalaman pelanggan untuk menangani tindak lanjut pelanggan yang tidak melakukan pembayaran. Mengelola proses konfirmasi keberlanjutan layanan dan proses dismantle (pengambilan perangkat ONT dan kabel) jika pelanggan tidak berlangganan lagi.",
            technologies: ["Customer Management", "Payment Follow-up", "Dismantle Process", "Equipment Retrieval"],
            category: "Customer Service",
          },
        ],
      },
      {
        title: "Care For Asset (CFA)",
        description:
          "Memastikan aset jaringan seperti OLT dan Box ODP terawat, aman, serta dapat digunakan dengan optimal",
        items: [
          {
            title: "Pemeliharaan Box ODP (Optical Distribution Point)",
            description:
              "Dokumentasi pemeliharaan dan perawatan Box ODP PLN ICON yang terpasang di tiang utilitas. Memastikan box dalam kondisi baik, aman dari gangguan cuaca, dan semua koneksi fiber optik berfungsi optimal untuk distribusi layanan ke pelanggan.",
            technologies: ["ODP Maintenance", "Fiber Optic", "Network Infrastructure", "Asset Management"],
            category: "Infrastructure Care",
          },
          {
            title: "Perawatan Infrastruktur Jaringan Tiang",
            description:
              "Aktivitas perawatan rutin infrastruktur jaringan pada tiang utilitas. Meliputi pengecekan kondisi kabel, perangkat jaringan, dan akses maintenance menggunakan tangga untuk memastikan semua aset jaringan dalam kondisi optimal dan aman.",
            technologies: ["Pole Infrastructure", "Cable Management", "Safety Procedures", "Preventive Maintenance"],
            category: "Field Maintenance",
          },
          {
            title: "Inspeksi dan Maintenance Perangkat OLT",
            description:
              "Petugas teknis PLN melakukan inspeksi dan maintenance langsung pada perangkat OLT (Optical Line Terminal) yang terpasang di tiang. Menggunakan prosedur K3 yang ketat dengan APD lengkap untuk memastikan keamanan kerja dan kualitas perawatan aset jaringan.",
            technologies: ["OLT Maintenance", "K3 Safety", "Technical Inspection", "Field Operations"],
            category: "Equipment Care",
          },
        ],
      },
      {
        title: "TACAC - Pengecekan dan Konfigurasi Aplikasi",
        description:
          "Pengecekan dan konfigurasi aplikasi TACAC untuk pengelolaan perangkat jaringan GPON, monitoring parameter ONU, dan manajemen platform Raisecom ROAP",
        items: [
          {
            title: "Konfigurasi GPON-ONU Interface",
            description:
              "Konfigurasi interface GPON-ONU pada perangkat Raisecom dengan pengaturan line-profile-id dan service-profile-id. Melakukan setup multiple ONU dengan konfigurasi switchport mode trunk dan VLAN untuk distribusi layanan fiber optik ke pelanggan.",
            technologies: ["GPON", "ONU Configuration", "VLAN Setup", "Raisecom", "Fiber Optic"],
            category: "Network Configuration",
          },
          {
            title: "Monitoring Parameter ONU",
            description:
              "Monitoring real-time parameter ONU meliputi temperature, voltage, bias current, transmit power (TxPower), dan receive power (RxPower). Memantau kondisi transceiver untuk memastikan kualitas sinyal optimal dan deteksi dini gangguan pada jaringan GPON.",
            technologies: ["ONU Monitoring", "Power Level", "Signal Quality", "Network Diagnostics", "GPON"],
            category: "Network Monitoring",
          },
          {
            title: "Raisecom ROAP Platform Management",
            description:
              "Pengelolaan platform Raisecom Optical Access Platform (ROAP) dengan konfigurasi berbagai interface termasuk gigabitethernet, gpon-olt, ten-gigabitethernet, dan VLAN. Monitoring status port dengan kondisi enable, up, forward, dan online untuk memastikan operasional jaringan yang optimal.",
            technologies: [
              "ROAP Platform",
              "Interface Management",
              "Port Status",
              "Network Operations",
              "Optical Access",
            ],
            category: "Platform Management",
          },
        ],
      },
    ],
  }

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      // Dynamic import to avoid SSR issues
      const jsPDF = (await import("jspdf")).default

      const doc = new jsPDF()
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const margin = 20
      let yPosition = margin

      // Helper function to add text with word wrapping
      const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize = 10) => {
        doc.setFontSize(fontSize)
        const lines = doc.splitTextToSize(text, maxWidth)
        doc.text(lines, x, y)
        return y + lines.length * fontSize * 0.4
      }

      // Helper function to check if we need a new page
      const checkNewPage = (requiredSpace: number) => {
        if (yPosition + requiredSpace > pageHeight - margin) {
          doc.addPage()
          yPosition = margin
        }
      }

      // Header
      doc.setFontSize(24)
      doc.setFont("helvetica", "bold")
      doc.text("Portfolio Kerja", pageWidth / 2, yPosition, { align: "center" })
      yPosition += 15

      doc.setFontSize(16)
      doc.setFont("helvetica", "normal")
      doc.text(portfolioData.personalInfo.name, pageWidth / 2, yPosition, { align: "center" })
      yPosition += 8

      doc.setFontSize(12)
      doc.text(portfolioData.personalInfo.title, pageWidth / 2, yPosition, { align: "center" })
      yPosition += 6

      doc.text(portfolioData.personalInfo.company, pageWidth / 2, yPosition, { align: "center" })
      yPosition += 6

      doc.text(portfolioData.personalInfo.location, pageWidth / 2, yPosition, { align: "center" })
      yPosition += 20

      // Add horizontal line
      doc.setLineWidth(0.5)
      doc.line(margin, yPosition, pageWidth - margin, yPosition)
      yPosition += 15

      // Sections
      portfolioData.sections.forEach((section, sectionIndex) => {
        checkNewPage(30)

        // Section title
        doc.setFontSize(16)
        doc.setFont("helvetica", "bold")
        doc.text(`${sectionIndex + 1}. ${section.title}`, margin, yPosition)
        yPosition += 10

        // Section description
        doc.setFontSize(10)
        doc.setFont("helvetica", "italic")
        yPosition = addWrappedText(section.description, margin, yPosition, pageWidth - 2 * margin, 10)
        yPosition += 10

        // Items
        section.items.forEach((item, itemIndex) => {
          checkNewPage(40)

          // Item title
          doc.setFontSize(12)
          doc.setFont("helvetica", "bold")
          doc.text(`${sectionIndex + 1}.${itemIndex + 1} ${item.title}`, margin + 10, yPosition)
          yPosition += 8

          // Category badge
          doc.setFontSize(8)
          doc.setFont("helvetica", "normal")
          doc.setTextColor(100, 100, 100)
          doc.text(`[${item.category}]`, margin + 10, yPosition)
          yPosition += 6

          // Item description
          doc.setTextColor(0, 0, 0)
          doc.setFontSize(9)
          yPosition = addWrappedText(item.description, margin + 10, yPosition, pageWidth - 2 * margin - 10, 9)
          yPosition += 5

          // Technologies
          doc.setFontSize(8)
          doc.setFont("helvetica", "bold")
          doc.text("Teknologi: ", margin + 10, yPosition)
          doc.setFont("helvetica", "normal")
          doc.text(item.technologies.join(", "), margin + 35, yPosition)
          yPosition += 12
        })

        yPosition += 5
      })

      // Footer
      const totalPages = doc.getNumberOfPages()
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i)
        doc.setFontSize(8)
        doc.setTextColor(100, 100, 100)
        doc.text(
          `Portfolio Kerja - ${portfolioData.personalInfo.name} | Halaman ${i} dari ${totalPages}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: "center" },
        )
      }

      // Save the PDF
      doc.save(`Portfolio_Kerja_${portfolioData.personalInfo.name.replace(/\s+/g, "_")}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Terjadi kesalahan saat membuat PDF. Silakan coba lagi.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button onClick={generatePDF} disabled={isGenerating} className="bg-red-600 hover:bg-red-700 text-white">
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Membuat PDF...
        </>
      ) : (
        <>
          <FileDown className="w-4 h-4 mr-2" />
          Download PDF
        </>
      )}
    </Button>
  )
}
