import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TargetAudienceSection from "@/components/home/TargetAudienceSection";
import ExamplePitchCard from "@/components/home/ExamplePitchCard";
import WhyAndCTASection from "@/components/home/WhyAndCTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen w-full bg-white dark:bg-black font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300 selection:bg-teal-500 selection:text-white"
      style={{
        backgroundImage:
          "linear-gradient(181.2deg, rgba(181,239,249,1) 10.5%, rgba(254,254,254,1) 86.8%)",
      }}
    >
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <TargetAudienceSection />
        <ExamplePitchCard />
        <WhyAndCTASection />
      </main>
      <Footer />
    </div>
  );
}
