"use client"
import React from "react"
import { motion } from "framer-motion"

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string
  /** Content to render on top of the background */
  children?: React.ReactNode
  /** Number of “star” points */
  starCount?: number
  /** Two CSS-variable backed colors for the radial overlays */
  gradientColors?: [string, string]
  /** Pulse animation duration in seconds */
  pulseDuration?: number
  /** ARIA label for the animated background */
  ariaLabel?: string
  motionEnabled?: boolean
  containsContent?: boolean
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 50,
  gradientColors = [
    "var(--aurora-color1, rgba(6,139,53,0.15))",
    "var(--aurora-color2, rgba(6,139,53,0.05))",
  ],
  pulseDuration = 10,
  ariaLabel = "Animated aurora background",
  motionEnabled = true,
  containsContent = false,
}) => {
  const [colorA, colorB] = gradientColors

  return (
    <div
      role={containsContent ? undefined : 'img'}
      aria-label={containsContent ? undefined : ariaLabel}
      className={`relative flex flex-col w-full h-full items-center justify-center bg-black overflow-hidden ${className}`}
    >
      {/* Background layers (hidden from screen readers) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Pulsing radial gradients */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle, ${colorA} 0%, transparent 80%),
              radial-gradient(circle, ${colorB} 0%, transparent 80%)
            `,
            backgroundSize: "100% 100%",
            animation: `pulse ${pulseDuration}s infinite`,
            animationPlayState: motionEnabled ? 'running' : 'paused',
          }}
        />

        {/* Blurred color blobs */}
        <motion.div
          className="absolute inset-0 mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#068B35] rounded-full filter blur-[120px] opacity-10"
            animate={{
              x: motionEnabled ? [-50, 50, -50] : -50,
              y: motionEnabled ? [-20, 20, -20] : -20,
              scale: motionEnabled ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: motionEnabled ? 30 : 0,
              repeat: motionEnabled ? Infinity : 0,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#046024] rounded-full filter blur-[120px] opacity-15"
            animate={{
              x: motionEnabled ? [50, -50, 50] : 50,
              y: motionEnabled ? [20, -20, 20] : 20,
              scale: motionEnabled ? [1, 1.3, 1] : 1,
            }}
            transition={{
              duration: motionEnabled ? 40 : 0,
              repeat: motionEnabled ? Infinity : 0,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-[#068B35] rounded-full filter blur-[120px] opacity-5"
            animate={{
              x: motionEnabled ? [20, -20, 20] : 20,
              y: motionEnabled ? [-30, 30, -30] : -30,
              rotate: motionEnabled ? [0, 360, 0] : 0,
            }}
            transition={{
              duration: motionEnabled ? 50 : 0,
              repeat: motionEnabled ? Infinity : 0,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Twinkling stars */}
        {Array.from({ length: starCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#068B35] rounded-full shadow-[0_0_5px_rgba(6,139,53,0.8)]"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
            }}
            animate={{
              opacity: motionEnabled ? [0, Math.random() * 0.8, 0] : 0.3,
            }}
            transition={{
              duration: motionEnabled ? Math.random() * 3 + 2 : 0,
              repeat: motionEnabled ? Infinity : 0,
              delay: motionEnabled ? Math.random() * 5 : 0,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}

export default AuroraBackground
