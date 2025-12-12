import HeroSection from "@/components/home/HeroSection";
import DemoPitches from "@/components/home/DemoPitches";
import InfoSection from "@/components/home/InfoSection";
import Navbar from "@/components/home/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar/>
      <HeroSection/>
      <InfoSection/>
      <DemoPitches/>
    </div>
  );
}
