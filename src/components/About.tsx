const About = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-title">About</p>
            <h2 className="heading-section">
              Passionate about creating meaningful digital experiences
            </h2>
          </div>
          <div className="space-y-6">
            <p className="body-large">
              I'm a developer and designer with over 5 years of experience building 
              products that blend aesthetics with functionality. My approach is rooted 
              in minimalism — every element serves a purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open-source projects, or capturing moments through 
              black and white photography.
            </p>
            <div className="pt-8 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-light">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-light">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
