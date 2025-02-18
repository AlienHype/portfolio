import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Education from "@/components/main/education";
import Footer from "@/components/main/Footer";
import Certifications from "@/components/main/Certifications";
// import SplashCursor from '@/components/main/SplashCursor'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        {/* <SplashCursor /> */}
        <Hero />
        <Skills />
        <Education />
        <Certifications/>
        <Projects />
         <Footer/>
      </div>
    </main>
  );
}
