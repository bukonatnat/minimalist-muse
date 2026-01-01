const skills = [
  {
    category: "Development",
    items: ["React", "TypeScript", "Node.js", "Next.js", "Python"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Tailwind"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="section-title">Skills</p>
        <h2 className="heading-section max-w-2xl mb-16">
          Technologies & tools I work with
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="card-minimal bg-background">
              <h3 className="text-sm uppercase tracking-wider mb-6">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
