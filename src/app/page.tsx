import { AboutSection } from "@/components/about-section";
import { CertificationGrid } from "@/components/certification-grid";
import { CyberBackground } from "@/components/cyber-background";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PageLoader } from "@/components/page-loader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CyberBackground />
      <div className="relative flex min-h-full flex-col">
        <Navbar />
        <main className="relative z-10 flex-1" role="main">
          <Hero />
          <CertificationGrid />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
