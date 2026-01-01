const skills = [
  {
    category: "Development",
    items: [
      { name: "React", level: 90, label: "Advanced" },
      { name: "TypeScript", level: 85, label: "Advanced" },
      { name: "Node.js", level: 75, label: "Intermediate" },
      { name: "Next.js", level: 80, label: "Advanced" },
      { name: "Python", level: 65, label: "Intermediate" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", level: 88, label: "Advanced" },
      { name: "Adobe XD", level: 70, label: "Intermediate" },
      { name: "Photoshop", level: 75, label: "Intermediate" },
      { name: "Illustrator", level: 60, label: "Intermediate" },
      { name: "UI/UX", level: 85, label: "Advanced" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 90, label: "Advanced" },
      { name: "Docker", level: 70, label: "Intermediate" },
      { name: "AWS", level: 65, label: "Intermediate" },
      { name: "Vercel", level: 85, label: "Advanced" },
      { name: "Tailwind", level: 95, label: "Expert" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Skills</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-2xl mb-16">
          Technologies & tools I work with
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              className="border border-border p-6 bg-background hover:border-foreground transition-colors duration-500"
            >
              <h3 className="text-sm uppercase tracking-wider mb-6">
                {skillGroup.category}
              </h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.label}</span>
                    </div>
                    <div className="h-1 bg-muted w-full">
                      <div 
                        className="h-full bg-foreground transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
