import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">Muhammad Rama Refiando</h1>
            <h2 className="text-xl lg:text-2xl text-accent font-medium">Junior Engineer 2</h2>
            {/* Translated description to Indonesian */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya membangun infrastruktur telekomunikasi yang handal dan mengelola proyek teknis. Saat ini memimpin
              implementasi FTTH dan konfigurasi sistem di PLN Icon Plus sambil menempuh pendidikan Informatika di
              Universitas Telkom.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Translated button text to Indonesian */}
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#contact">Hubungi Saya</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#experience">Lihat Pengalaman</a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/muhammadramarefiando/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:ramarefiando35@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="tel:+6285343858443">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:pl-12">
          <div className="space-y-6">
            <div className="space-y-2">
              {/* Translated navigation labels to Indonesian */}
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Tentang</h3>
              <div className="h-px bg-border"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Pengalaman</h3>
              <div className="h-px bg-border"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Keahlian</h3>
              <div className="h-px bg-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
