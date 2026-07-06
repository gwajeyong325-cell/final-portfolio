import Header from "@/components/Header";
import BackgroundTitle from "@/components/BackgroundTitle";

export default function AboutPage() {
  return (
    <div
      style={{
        position: "relative",
        height: "100svh",
        overflow: "hidden",
        backgroundColor: "#F5F5F3",
      }}
    >
      <Header />

      <div
        style={{
          position: "absolute",
          top: "17vh",
          left: "5.5vw",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "clamp(10px, 0.85vw, 13px)",
            letterSpacing: "0.12em",
            color: "#B33E5C",
            marginBottom: "1.2vh",
          }}
        >
          ABOUT ME
        </p>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 76px)",
            lineHeight: 1.05,
            color: "#1A1A1A",
            whiteSpace: "nowrap",
            marginBottom: "3vh",
          }}
        >
          PARK SU YOUNG
        </h2>
        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(13px, 1.15vw, 17px)",
            lineHeight: 1.8,
            color: "#666666",
          }}
        >
          About Me 페이지가 개발될 공간입니다.
          <br />
          상세한 자기소개가 들어갈 예정입니다.
        </p>
      </div>

      <BackgroundTitle />
    </div>
  );
}
