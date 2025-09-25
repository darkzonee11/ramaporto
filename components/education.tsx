import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    period: "2022 - Present",
    institution: "Telkom University",
    degree: "Sarjana Informatika",
    location: "Bandung, Indonesia",
    status: "Currently enrolled in Distance Learning Program",
    gpa: "3.56",
    description:
      "Menempuh pendidikan Informatika sambil bekerja penuh waktu, fokus pada rekayasa perangkat lunak dan teknologi telekomunikasi.",
    icon: GraduationCap,
  },
  {
    period: "2018 - 2021",
    institution: "SMK Telkom Makassar",
    degree: "Teknik Telekomunikasi",
    location: "Makassar, Sulawesi Selatan",
    status: "Graduated",
    gpa: "97.27",
    description:
      "Spesialisasi dalam teknik telekomunikasi dengan prestasi akademik yang sangat baik dan pengalaman praktis.",
    icon: Award,
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Pendidikan</h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                            <div className="text-accent font-medium">{edu.institution}</div>
                            <div className="text-sm text-muted-foreground">{edu.location}</div>
                          </div>
                          <div className="flex flex-col items-start lg:items-end gap-2">
                            <Badge variant="secondary">{edu.period}</Badge>
                            <Badge variant="outline" className="text-accent border-accent">
                              {edu.status === "Graduated" ? `Nilai Akhir: ${edu.gpa}` : `IPK: ${edu.gpa}`}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                    {edu.status !== "Graduated" && (
                      <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
                        <p className="text-sm text-accent font-medium">
                          Saat ini menempuh pendidikan melalui Program Pembelajaran Jarak Jauh sambil mempertahankan
                          pekerjaan penuh waktu
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
