import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NavigationMenu from "@/components/NavigationMenu";
import BackgroundTitle from "@/components/BackgroundTitle";
import EmailSection from "@/components/EmailSection";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        height: "100svh",
        overflow: "hidden",
        backgroundColor: "#F5F5F3",
      }}
    >
      {/* Header — absolute top */}
      <Header />

      {/* Hero + Navigation — absolute left column */}
      <div
        style={{
          position: "absolute",
          top: "17vh",
          left: "5.5vw",
        }}
      >
        <HeroSection />
        <NavigationMenu />
      </div>

      {/* Email — absolute bottom-left */}
      <EmailSection />

      {/* Background "Portfolio" typography */}
      <BackgroundTitle />
    </div>
  );
}
