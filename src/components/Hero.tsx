import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPortrait}
          alt="Portrait"
          className="w-full h-full object-cover grayscale-img opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <p className="section-title animate-fade-up">Welcome</p>
        <h1 className="heading-display animate-fade-up delay-100">
          Creative Developer
          <br />
          <span className="text-muted-foreground">&amp; Designer</span>
        </h1>
        <p className="body-large max-w-xl mx-auto mt-8 animate-fade-up delay-200">
          Crafting digital experiences with precision, simplicity, and purpose.
        </p>
        <div className="flex items-center justify-center gap-4 mt-12 animate-fade-up delay-300">
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          <a href="#about" className="btn-outline">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
        <div className="w-px h-16 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
