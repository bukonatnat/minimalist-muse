import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const skillData = [
  { name: "2020", frontend: 60, backend: 40, design: 50 },
  { name: "2021", frontend: 70, backend: 55, design: 60 },
  { name: "2022", frontend: 80, backend: 65, design: 70 },
  { name: "2023", frontend: 88, backend: 75, design: 78 },
  { name: "2024", frontend: 95, backend: 85, design: 85 },
];

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
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Skills</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-2xl mb-16">
          Technologies & tools I work with
        </h2>

        {/* Skill Progress Chart */}
        <div className="mb-16 p-6 border border-border bg-background rounded-lg">
          <h3 className="text-sm uppercase tracking-wider mb-6 text-muted-foreground">Growth Over Time</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={skillData}>
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--background))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="frontend" 
                  stroke="hsl(var(--foreground))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--foreground))", strokeWidth: 0, r: 4 }}
                  name="Frontend"
                />
                <Line 
                  type="monotone" 
                  dataKey="backend" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--muted-foreground))", strokeWidth: 0, r: 4 }}
                  name="Backend"
                />
                <Line 
                  type="monotone" 
                  dataKey="design" 
                  stroke="hsl(var(--foreground))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "hsl(var(--foreground))", strokeWidth: 0, r: 4 }}
                  name="Design"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-foreground" />
              <span className="text-xs text-muted-foreground">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-muted-foreground" />
              <span className="text-xs text-muted-foreground">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-foreground border-dashed" style={{ borderTop: "2px dashed" }} />
              <span className="text-xs text-muted-foreground">Design</span>
            </div>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              className="border border-border p-6 bg-background hover:border-foreground transition-colors duration-500 rounded-lg"
            >
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
