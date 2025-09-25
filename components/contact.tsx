import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 853-4385-8443",
    href: "tel:+6285343858443",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ramarefiando35@gmail.com",
    href: "mailto:ramarefiando35@gmail.com",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jalan Andi Da'i No 37, Mamuju, Sulawesi Barat",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammadramarefiando",
    href: "https://www.linkedin.com/in/muhammadramarefiando/",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Kontak</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Saya selalu terbuka untuk mendiskusikan peluang baru, tantangan teknis, atau potensi kolaborasi. Jangan
              ragu untuk menghubungi saya!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-muted-foreground">{contact.label}</div>
                        {contact.href !== "#" ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center space-y-6">
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="mailto:ramarefiando35@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Kirim Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/muhammadramarefiando/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Terhubung di LinkedIn
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 Muhammad Rama Refiando. Tersedia untuk peluang dan kolaborasi baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
