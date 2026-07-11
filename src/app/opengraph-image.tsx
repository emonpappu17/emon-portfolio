import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Emon Howlader — Full Stack Web Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f1418 0%, #1a2329 50%, #0f1418 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(32,178,166,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(32,178,166,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 10,
          }}
        >
          {/* Name Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(32,178,166,0.3)",
              background: "rgba(26,35,41,0.8)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            <span style={{ color: "#20b2a6", fontSize: "18px" }}>
              Available for Work
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#f0f2f5",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Emon Howlader
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "28px",
              color: "#20b2a6",
              margin: 0,
              textAlign: "center",
            }}
          >
            Full Stack Web Developer & MERN Specialist
          </p>

          {/* Tech Stack */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  background: "rgba(32,178,166,0.1)",
                  border: "1px solid rgba(32,178,166,0.25)",
                  color: "#7a8491",
                  fontSize: "16px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* URL */}
          <p
            style={{
              fontSize: "16px",
              color: "#7a8491",
              marginTop: "20px",
            }}
          >
            emon-howlader.vercel.app
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
