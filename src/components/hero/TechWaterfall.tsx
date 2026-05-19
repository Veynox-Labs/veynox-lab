"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  MonitorSmartphone,
  Cpu,
  Box,
  Layout,
  Sparkles,
} from "lucide-react";

const techIcons = [
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  MonitorSmartphone,
  Cpu,
  Box,
  Layout,
  Sparkles,
];
const techNames = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "AWS",
  "Figma",
  "GitHub",
  "Vercel",
];

const gradientBorders = [
  "from-brand-electric via-brand-neon to-brand-electric",
  "from-brand-neon via-brand-deep to-brand-neon",
  "from-brand-electric via-white to-brand-electric",
];

interface FloatingItem {
  id: number;
  name: string;
  Icon: React.ElementType;
  left: string;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
  wobbleAmount: number;
  gradientIndex: number;
}

export default function TechWaterfall() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate items on client to avoid hydration mismatch
    const generatedItems = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      name: techNames[i % techNames.length],
      Icon: techIcons[i % techIcons.length],
      left: `${5 + Math.random() * 90}%`, // Keep inside bounds
      duration: 20 + Math.random() * 25, // Slower, elegant fall
      delay: Math.random() * -30, // Random start points
      size: 0.75 + Math.random() * 0.4, // Scale 0.75 to 1.15
      opacity: 0.5 + Math.random() * 0.5, // Bright enough to see
      wobbleAmount: 15 + Math.random() * 30, // Random horizontal drift
      gradientIndex: Math.floor(Math.random() * gradientBorders.length),
    }));

    setItems(generatedItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="absolute top-24 bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Vignette Mask to blend with background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050816_80%)] z-10 opacity-60"></div>

      {/* Top and Bottom Fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-bg-main via-bg-main/80 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-bg-main via-bg-main/80 to-transparent z-10"></div>

      {items.map((item) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={item.id}
            initial={{ y: "-20vh", x: 0 }}
            animate={{
              y: "120vh",
              x: [0, item.wobbleAmount, -item.wobbleAmount, 0], // Gentle horizontal swaying
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: item.duration,
                delay: item.delay,
                ease: "linear",
              },
              x: {
                repeat: Infinity,
                duration: item.duration * 0.6,
                ease: "easeInOut",
              },
            }}
            className="absolute top-0 flex flex-col items-center justify-center gap-2"
            style={{
              left: item.left,
              scale: item.size,
              opacity: item.opacity,
            }}>
            {/* The Glassmorphic Pill */}
            <div className="relative group">
              {/* Animated Glow Behind Pill */}
              <div
                className={`absolute inset-0 bg-linear-to-r ${gradientBorders[item.gradientIndex]} opacity-20 blur-xl rounded-full`}></div>

              <div className="relative px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-3 overflow-hidden">
                {/* Subtle sheen reflection inside the pill */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 transform -translate-x-full animate-shimmer"></div>

                <Icon className="text-brand-electric w-4 h-4 md:w-5 md:h-5" />
                <span className="text-white font-semibold text-sm tracking-wider">
                  {item.name}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
