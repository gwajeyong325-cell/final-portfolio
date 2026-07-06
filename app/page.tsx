import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NavigationMenu from "@/components/NavigationMenu";
import BackgroundTitle from "@/components/BackgroundTitle";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F5F3",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main content */}
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "80px",
        }}
      >
        {/* Left column ~35% */}
        <div style={{ width: "38%" }}>
          <HeroSection />
          <NavigationMenu />
        </div>
      </div>

      {/* Email section — absolute bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "200px",
          left: "80px",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.1em",
            color: "#999999",
            marginBottom: "6px",
          }}
        >
          EMAIL
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#666666",
          }}
        >
          piaoxiuying03@gmail.com
        </p>
      </div>

      {/* Background "Portfolio" typography */}
      <BackgroundTitle />
    </div>
  );
}
