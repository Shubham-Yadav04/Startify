import HeroSection from "@/components/home/HeroSection";
import DemoPitches from "@/components/home/DemoPitches";
import InfoSection from "@/components/home/InfoSection";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center scrollbar-hidden">
      <Navbar/>
      <HeroSection/>
      <InfoSection/>
      <DemoPitches/>
      <Footer/>
    </div>
  );
}
