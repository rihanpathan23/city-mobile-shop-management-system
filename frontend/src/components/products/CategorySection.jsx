import React from "react";
import {
  FiSmartphone,
  FiWatch,
  FiZap,
  FiHeadphones,
  FiPackage,
  FiArrowUpRight,
} from "react-icons/fi";

/**
 * CategorySection
 * A premium, Apple-inspired product category grid.
 *
 * - Fully responsive (2 / 3 / 5 column grid)
 * - Rounded, elevated cards with soft depth on hover
 * - Accessible: keyboard focus states, semantic markup, reduced-motion aware
 * - No required props — drop it straight into a page
 *
 * Usage:
 *   <CategorySection />
 *   <CategorySection onSelect={(id) => router.push(`/shop/${id}`)} />
 */

const CATEGORIES = [
  {
    id: "smartphones",
    label: "Smartphones",
    caption: "iPhone & beyond",
    icon: FiSmartphone,
    tint: "#0A84FF", // iOS blue
  },
  {
    id: "smartwatches",
    label: "Smartwatches",
    caption: "Watch, tracked",
    icon: FiWatch,
    tint: "#FF375F", // watch red
  },
  {
    id: "chargers",
    label: "Chargers",
    caption: "Power, fast",
    icon: FiZap,
    tint: "#FFB000", // amber
  },
  {
    id: "earphones",
    label: "Earphones",
    caption: "AirPods & audio",
    icon: FiHeadphones,
    tint: "#30D158", // green
  },
  {
    id: "accessories",
    label: "Accessories",
    caption: "Cases & more",
    icon: FiPackage,
    tint: "#8E8E93", // graphite
  },
];

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function CategorySection({ onSelect = () => {} }) {
  return (
    <section
      className="w-full py-20 px-6 sm:px-10 lg:px-16"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #fafafa 0%, #f5f5f7 55%, #f5f5f7 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <p className="mb-3 text-[13px] font-semibold tracking-wide text-[#0A84FF] uppercase">
            Shop by category
          </p>
          <h2 className="text-[34px] sm:text-[44px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            Everything you need.
            <br className="hidden sm:block" /> Beautifully organized.
          </h2>
          <p className="mt-4 text-[17px] text-[#6e6e73] max-w-xl mx-auto">
            Explore our full lineup, from the phone in your pocket to the
            charger on your desk.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {CATEGORIES.map(({ id, label, caption, icon: Icon, tint }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              className="
                group relative flex flex-col items-center justify-center
                rounded-[28px] bg-white/80 backdrop-blur-xl
                border border-black/5
                px-5 py-8 sm:py-10
                text-center
                shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]
                hover:border-black/10
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                motion-reduce:transition-none motion-reduce:hover:translate-y-0
              "
              style={{ ["--tint"]: tint }}
            >
              {/* Icon badge */}
              <span
                className="
                  relative mb-5 flex h-16 w-16 sm:h-[70px] sm:w-[70px]
                  items-center justify-center rounded-2xl
                  transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-110 group-hover:-rotate-3
                "
                style={{
                  background: `linear-gradient(145deg, ${hexToRgba(
                    tint,
                    0.16
                  )}, ${hexToRgba(tint, 0.06)})`,
                }}
              >
                <Icon
                  size={28}
                  strokeWidth={1.75}
                  style={{ color: tint }}
                  className="drop-shadow-sm"
                />
              </span>

              {/* Label */}
              <span className="text-[16px] sm:text-[17px] font-semibold text-[#1d1d1f] tracking-tight">
                {label}
              </span>
              <span className="mt-1 text-[13px] text-[#86868b]">
                {caption}
              </span>

              {/* Hover affordance */}
              <span
                className="
                  absolute top-4 right-4 flex h-7 w-7 items-center justify-center
                  rounded-full bg-[#1d1d1f]
                  opacity-0 scale-75
                  transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:opacity-100 group-hover:scale-100
                "
              >
                <FiArrowUpRight size={14} className="text-white" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
