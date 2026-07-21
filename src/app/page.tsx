import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import {
  JsonLd,
  getPersonSchema,
  getWebSiteSchema,
  getWebPageSchema,
  getCollectionPageSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <JsonLd data={getPersonSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <JsonLd data={getWebPageSchema()} />
      <JsonLd data={getCollectionPageSchema()} />
      <JsonLd data={getBreadcrumbSchema()} />
      
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
