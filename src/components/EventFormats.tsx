import { motion } from "motion/react";

const formats = [
  {
    title: "Match Grid",
    description: "Your colour tells them everything.",
    image:
      "https://images.unsplash.com/photo-1558210598-89ba75b1724e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pitch Your Mate",
    description: "Your friend pitches you to a room full of singles.",
    image:
      "https://images.pexels.com/photos/35755227/pexels-photo-35755227.jpeg",
  },
  {
    title: "Blind Date Dinner",
    description:
      "You don't know who you're meeting until you sit down.",
    image:
      "https://images.unsplash.com/photo-1712431878468-6943cdb90588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmxpbmQlMjBEYXRlJTIwRGlubmVyfGVufDB8fDB8fHww",
  },
  {
    title: "Speed Mingle",
    description: "Fast paced, high energy. Pure connection.",
    image:
      "https://images.pexels.com/photos/18999214/pexels-photo-18999214.jpeg",
  },
];

/* ─── Gradient border via pseudo-element workaround ─────────────────────────
   We achieve the "glowing gradient border" by layering:
   1. A wrapper div with the gradient as background + padding: 1.5px
   2. The inner card sits inside that wrapper
   This gives a true gradient border without SVG or clip-path hacks.         */

export default function EventFormats() {
  return (
    <section
      style={{
        background: "#0a0a0f",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 96px",
        fontFamily: "'Inter', 'Geist', system-ui, sans-serif",
      }}
    >
      {/* ── Radial background glow (purple / pink) ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(142,92,245,0.22) 0%, rgba(255,117,140,0.14) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Bottom-edge pink bloom */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "260px",
          background:
            "radial-gradient(ellipse at center, rgba(255,117,140,0.18) 0%, transparent 70%)",
          filter: "blur(48px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Heading ── */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            Event Formats
          </h2>
          <p
            style={{
              color: "#71717a",
              fontSize: "0.95rem",
              fontWeight: 400,
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            You'll experience something different every single real-life
            conversation.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
          }}
        >
          {formats.map((format, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover="hovered"
            >
              {/* Gradient border wrapper */}
              <motion.div
                variants={{
                  hovered: { y: -6 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  /* The gradient IS the border — we give it 1.5px padding */
                  background:
                    "linear-gradient(145deg, #ff7eb3, #ff758c 25%, #8e5cf5 65%, #ff9a44)",
                  borderRadius: "22px",
                  padding: "1.5px",
                  position: "relative",
                }}
              >
                {/* Outer glow (sits on the gradient wrapper) */}
                <motion.div
                  variants={{
                    hovered: {
                      boxShadow:
                        "0 0 45px rgba(255,117,140,0.38), 0 0 80px rgba(142,92,245,0.22)",
                    },
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "22px",
                    boxShadow:
                      "0 0 30px rgba(255,117,140,0.25), 0 0 60px rgba(142,92,245,0.15)",
                    transition: "box-shadow 0.25s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* ── Inner card ── */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "21px",        /* 22 - 1.5 */
                    overflow: "hidden",
                    height: "360px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  {/* Image area — top ~68% */}
                  <div
                    style={{
                      position: "relative",
                      flex: "0 0 68%",
                      overflow: "hidden",
                    }}
                  >
                    <motion.img
                      src={format.image}
                      alt={format.title}
                      variants={{
                        hovered: { scale: 1.07 },
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      referrerPolicy="no-referrer"
                    />
                    {/* Bottom-to-top dark gradient overlay on image */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Text content — bottom ~32% */}
                  <div
                    style={{
                      flex: 1,
                      padding: "14px 18px 18px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "6px",
                      background: "rgba(10,10,15,0.82)",
                    }}
                  >
                    <h3
                      style={{
                        color: "#ffffff",
                        fontSize: "1rem",
                        fontWeight: 600,
                        margin: 0,
                        letterSpacing: "-0.015em",
                        lineHeight: 1.3,
                      }}
                    >
                      {format.title}
                    </h3>
                    <p
                      style={{
                        color: "#a1a1aa",
                        fontSize: "0.78rem",
                        fontWeight: 400,
                        margin: 0,
                        lineHeight: 1.55,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {format.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
