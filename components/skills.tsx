import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Keterampilan Teknis",
    skills: [
      { name: "Fiber to the Home (FTTH)" },
      { name: "System Configuration" },
      { name: "Troubleshooting" },
      { name: "Inventory Management" },
      { name: "OLT Configuration" },
    ],
  },
  {
    title: "Keterampilan Manajemen",
    skills: [
      { name: "Project Management" },
      { name: "Leadership" },
      { name: "Time Management" },
      { name: "Teamwork" },
      { name: "Quality Control" },
    ],
  },
  {
    title: "Keterampilan Kreatif",
    skills: [
      { name: "Graphic Design" },
      { name: "Creative Concept Design" },
      { name: "Social Media Design" },
      { name: "Visual Communication" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Keterampilan & Keahlian</h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
