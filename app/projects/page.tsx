import Header from "@/components/Header";
import BackgroundTitle from "@/components/BackgroundTitle";

export default function ProjectsPage() {
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
          PROJECTS
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
          WORK
        </h2>
        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(13px, 1.15vw, 17px)",
            lineHeight: 1.8,
            color: "#666666",
          }}
        >
          Projects 페이지가 개발될 공간입니다.
          <br />
          포트폴리오 작품들이 들어갈 예정입니다.
        </p>
      </div>

      <BackgroundTitle />
    </div>
  );
}
