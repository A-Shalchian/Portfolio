import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
//import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <section id="home">
        <HeroSection></HeroSection>
      </section>
      <section id="projects">
        <ProjectsSection></ProjectsSection>
      </section>
      <TapeSection></TapeSection>
      {/* <TestimonialsSection></TestimonialsSection> */}
      <section id="about">
        <AboutSection></AboutSection>
      </section>
      <section id="contact">
        <ContactSection></ContactSection>
      </section>
      <Footer></Footer>
    </div>
  );
}
