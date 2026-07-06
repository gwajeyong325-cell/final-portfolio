import Header from "@/components/Header";
import BackgroundTitle from "@/components/BackgroundTitle";

export default function AboutPage() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F5F3",
      }}
    >
      <Header />

      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "120px",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "0.12em",
            color: "#B33E5C",
            marginBottom: "24px",
          }}
        >
          ABOUT ME
        </p>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: 1.1,
            color: "#1A1A1A",
            marginBottom: "32px",
          }}
        >
          PARK SU YOUNG
        </h2>
        <p
          style={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#666666",
            maxWidth: "480px",
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
