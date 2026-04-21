import { motion } from "motion/react";
import { UserRoundPlus, CalendarDays, Wine, Heart } from "lucide-react";

const ICON_COLOR = "#ff7eb3";
const ICON_SIZE = 48;
const ICON_STROKE = 2.25;

function IconProfile() {
  return <UserRoundPlus size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />;
}

function IconCalendar() {
  return <CalendarDays size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />;
}

function IconGlasses() {
  return <Wine size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />;
}

function IconHeart() {
  return <Heart size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />;
}

/* ─── Step data ──────────────────────────────────────────── */
const steps = [
  {
    Icon: IconProfile,
    title: "1. Create Your Profile",
    description: "Create your team & settings your Profile.",
  },
  {
    Icon: IconCalendar,
    title: "2. Choose Your Event",
    description: "Choose a calendar for your Event.",
  },
  {
    Icon: IconGlasses,
    title: "3. Meet in Real Life",
    description: "Meet in our never to meet in Real Life.",
  },
  {
    Icon: IconHeart,
    title: "4. Match & Connect",
    description: "Connect with match & & connections.",
  },
];

/* ─── Main component ─────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <section
      style={{
        background: "#0a0a0f",
        position: "relative",
        overflow: "hidden",
        padding: "72px 24px",
        fontFamily: "'Inter', 'Geist', system-ui, sans-serif",
      }}
    >
      {/* Left-edge purple-pink gradient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-120px",
          transform: "translateY(-50%)",
          width: "380px",
          height: "480px",
          background:
            "radial-gradient(ellipse at left center, rgba(142,92,245,0.45) 0%, rgba(255,117,140,0.3) 40%, transparent 72%)",
          filter: "blur(48px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: "48px",
            letterSpacing: "-0.01em",
          }}
        >
          How It Works
        </h2>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {steps.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "36px 28px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "20px",
                cursor: "default",
                /* Subtle bottom glow */
                boxShadow:
                  "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 12px 40px -12px rgba(142,92,245,0.18)",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon />
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#a1a1aa",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
