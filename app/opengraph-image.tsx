import { ImageResponse } from "next/og";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        backgroundColor: "#FDFCFB",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui",
        padding: "80px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(to bottom right, #C2996B, #F2C18D)",
          marginBottom: "40px",
          border: "4px solid #F2C18D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "80px", fontWeight: "900", color: "white" }}>ID</span>
      </div>
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "900",
          margin: "0 0 20px 0",
          color: "#1A1A1A",
          letterSpacing: "-0.02em",
        }}
      >
        Irsyad Dimas
      </h1>
      <p
        style={{
          fontSize: "36px",
          fontWeight: "700",
          margin: 0,
          color: "#1A1A1A",
          letterSpacing: "-0.01em",
        }}
      >
        Full-Stack Developer for Web Systems, Data, and Automation
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
