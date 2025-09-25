import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2022 - Present",
    title: "Junior Engineer 2",
    company: "PT. PLN Icon Plus",
    location: "Mamuju, Sulawesi Barat",
    description:
      "Leading technical projects and providing comprehensive support for telecommunications infrastructure.",
    responsibilities: [
      "Monitoring aktivasi layanan Ritel Iconnet",
      "Monitoring tiket aktivasi dan pemeliharaan layanan Ritel Iconnet",
      "Melakukan Troubleshooting di OLT untuk pengecekan pelanggan layanan Ritel Iconnet",
      "Melakukan konfigurasi pada perangkat Optical Line Terminal (OLT)",
      "Monitoring penggunaan K3 pada mitra aktivasi dan pemeliharaan layanan Ritel Iconnet",
      "Melakukan Quality Check (QC) pekerjaan mitra aktivasi layanan Ritel Iconnet",
      "Monitoring material Ritel Iconnet",
      "Melakukan Stockopname material Ritel Iconnet",
    ],
    skills: ["FTTH", "OLT Configuration", "Project Management", "Quality Control"],
  },
  {
    period: "2021 - 2022",
    title: "Magang Aktivasi",
    company: "PT. PLN Icon Plus",
    location: "Mamuju, Sulawesi Barat",
    description: "Internship focused on service activation and maintenance of telecommunications infrastructure.",
    responsibilities: [
      "Melakukan Aktivasi Pemasangan Baru Corporate",
      "Melakukan PM Link User",
      "Melakukan Aktivasi dan Pemeliharaan Ritel Iconnet",
    ],
    skills: ["Service Activation", "Network Maintenance", "Corporate Installation"],
  },
  {
    period: "2020",
    title: "Praktik Kerja Lapangan (PKL)",
    company: "PT. Telkom WItel",
    location: "Makassar, Sulawesi Selatan",
    description: "Field work practice gaining hands-on experience in telecommunications operations.",
    responsibilities: [
      "Observasi operasional jaringan telekomunikasi",
      "Mempelajari sistem dan prosedur perusahaan",
      "Menganalisis infrastruktur telekomunikasi",
    ],
    skills: ["Network Operations", "System Analysis", "Infrastructure Assessment"],
  },
  {
    period: "2019 - 2021",
    title: "Graphic Designer (Freelance)",
    company: "SMK Telkom Makassar",
    location: "Makassar, Sulawesi Selatan",
    description: "Freelance graphic designer creating visual content for school social media and marketing materials.",
    responsibilities: [
      "Menjadi Freelance di sekolah sebagai Tim Creative Desainer Grafis untuk sosial media sekolah",
      "Membuat konten visual untuk promosi sekolah",
      "Mengelola desain untuk berbagai kebutuhan institusi",
    ],
    skills: ["Graphic Design", "Social Media Design", "Creative Concept Design"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Pengalaman Kerja</h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <div className="text-accent font-medium">{exp.company}</div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Tanggung Jawab Utama:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent mt-1.5 text-xs">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
