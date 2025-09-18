import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// AnimatedPeriodicTable.jsx
// Single-file React component (Tailwind CSS required in your project)
// - Uses Tailwind utility classes for layout & styling
// - Uses Framer Motion for smooth animations
// - Small dataset included (first 36 elements). Extend `ELEMENTS` to include more.

const ELEMENTS = [
  {
    z: 1,
    symbol: "H",
    name: "Hydrogen",
    weight: "1.008",
    group: 1,
    period: 1,
    category: "nonmetal",
  },
  {
    z: 2,
    symbol: "He",
    name: "Helium",
    weight: "4.0026",
    group: 18,
    period: 1,
    category: "noble",
  },
  {
    z: 3,
    symbol: "Li",
    name: "Lithium",
    weight: "6.94",
    group: 1,
    period: 2,
    category: "alkali",
  },
  {
    z: 4,
    symbol: "Be",
    name: "Beryllium",
    weight: "9.0122",
    group: 2,
    period: 2,
    category: "alkaline",
  },
  {
    z: 5,
    symbol: "B",
    name: "Boron",
    weight: "10.81",
    group: 13,
    period: 2,
    category: "metalloid",
  },
  {
    z: 6,
    symbol: "C",
    name: "Carbon",
    weight: "12.011",
    group: 14,
    period: 2,
    category: "nonmetal",
  },
  {
    z: 7,
    symbol: "N",
    name: "Nitrogen",
    weight: "14.007",
    group: 15,
    period: 2,
    category: "nonmetal",
  },
  {
    z: 8,
    symbol: "O",
    name: "Oxygen",
    weight: "15.999",
    group: 16,
    period: 2,
    category: "nonmetal",
  },
  {
    z: 9,
    symbol: "F",
    name: "Fluorine",
    weight: "18.998",
    group: 17,
    period: 2,
    category: "halogen",
  },
  {
    z: 10,
    symbol: "Ne",
    name: "Neon",
    weight: "20.180",
    group: 18,
    period: 2,
    category: "noble",
  },

  {
    z: 11,
    symbol: "Na",
    name: "Sodium",
    weight: "22.990",
    group: 1,
    period: 3,
    category: "alkali",
  },
  {
    z: 12,
    symbol: "Mg",
    name: "Magnesium",
    weight: "24.305",
    group: 2,
    period: 3,
    category: "alkaline",
  },
  {
    z: 13,
    symbol: "Al",
    name: "Aluminium",
    weight: "26.982",
    group: 13,
    period: 3,
    category: "post-transition",
  },
  {
    z: 14,
    symbol: "Si",
    name: "Silicon",
    weight: "28.085",
    group: 14,
    period: 3,
    category: "metalloid",
  },
  {
    z: 15,
    symbol: "P",
    name: "Phosphorus",
    weight: "30.974",
    group: 15,
    period: 3,
    category: "nonmetal",
  },
  {
    z: 16,
    symbol: "S",
    name: "Sulfur",
    weight: "32.06",
    group: 16,
    period: 3,
    category: "nonmetal",
  },
  {
    z: 17,
    symbol: "Cl",
    name: "Chlorine",
    weight: "35.45",
    group: 17,
    period: 3,
    category: "halogen",
  },
  {
    z: 18,
    symbol: "Ar",
    name: "Argon",
    weight: "39.948",
    group: 18,
    period: 3,
    category: "noble",
  },

  {
    z: 19,
    symbol: "K",
    name: "Potassium",
    weight: "39.098",
    group: 1,
    period: 4,
    category: "alkali",
  },
  {
    z: 20,
    symbol: "Ca",
    name: "Calcium",
    weight: "40.078",
    group: 2,
    period: 4,
    category: "alkaline",
  },
  {
    z: 21,
    symbol: "Sc",
    name: "Scandium",
    weight: "44.956",
    group: 3,
    period: 4,
    category: "transition",
  },
  {
    z: 22,
    symbol: "Ti",
    name: "Titanium",
    weight: "47.867",
    group: 4,
    period: 4,
    category: "transition",
  },
  {
    z: 23,
    symbol: "V",
    name: "Vanadium",
    weight: "50.942",
    group: 5,
    period: 4,
    category: "transition",
  },
  {
    z: 24,
    symbol: "Cr",
    name: "Chromium",
    weight: "51.996",
    group: 6,
    period: 4,
    category: "transition",
  },
  {
    z: 25,
    symbol: "Mn",
    name: "Manganese",
    weight: "54.938",
    group: 7,
    period: 4,
    category: "transition",
  },
  {
    z: 26,
    symbol: "Fe",
    name: "Iron",
    weight: "55.845",
    group: 8,
    period: 4,
    category: "transition",
  },
  {
    z: 27,
    symbol: "Co",
    name: "Cobalt",
    weight: "58.933",
    group: 9,
    period: 4,
    category: "transition",
  },
  {
    z: 28,
    symbol: "Ni",
    name: "Nickel",
    weight: "58.693",
    group: 10,
    period: 4,
    category: "transition",
  },
  {
    z: 29,
    symbol: "Cu",
    name: "Copper",
    weight: "63.546",
    group: 11,
    period: 4,
    category: "transition",
  },
  {
    z: 30,
    symbol: "Zn",
    name: "Zinc",
    weight: "65.38",
    group: 12,
    period: 4,
    category: "transition",
  },

  {
    z: 31,
    symbol: "Ga",
    name: "Gallium",
    weight: "69.723",
    group: 13,
    period: 4,
    category: "post-transition",
  },
  {
    z: 32,
    symbol: "Ge",
    name: "Germanium",
    weight: "72.630",
    group: 14,
    period: 4,
    category: "metalloid",
  },
  {
    z: 33,
    symbol: "As",
    name: "Arsenic",
    weight: "74.922",
    group: 15,
    period: 4,
    category: "metalloid",
  },
  {
    z: 34,
    symbol: "Se",
    name: "Selenium",
    weight: "78.971",
    group: 16,
    period: 4,
    category: "nonmetal",
  },
  {
    z: 35,
    symbol: "Br",
    name: "Bromine",
    weight: "79.904",
    group: 17,
    period: 4,
    category: "halogen",
  },
  {
    z: 36,
    symbol: "Kr",
    name: "Krypton",
    weight: "83.798",
    group: 18,
    period: 4,
    category: "noble",
  },

  {
    z: 37,
    symbol: "Rb",
    name: "Rubidium",
    weight: "85.468",
    group: 1,
    period: 5,
    category: "alkali",
  },
  {
    z: 38,
    symbol: "Sr",
    name: "Strontium",
    weight: "87.62",
    group: 2,
    period: 5,
    category: "alkaline",
  },
  {
    z: 39,
    symbol: "Y",
    name: "Yttrium",
    weight: "88.906",
    group: 3,
    period: 5,
    category: "transition",
  },
  {
    z: 40,
    symbol: "Zr",
    name: "Zirconium",
    weight: "91.224",
    group: 4,
    period: 5,
    category: "transition",
  },
  {
    z: 41,
    symbol: "Nb",
    name: "Niobium",
    weight: "92.906",
    group: 5,
    period: 5,
    category: "transition",
  },
  {
    z: 42,
    symbol: "Mo",
    name: "Molybdenum",
    weight: "95.95",
    group: 6,
    period: 5,
    category: "transition",
  },
  {
    z: 43,
    symbol: "Tc",
    name: "Technetium",
    weight: "98",
    group: 7,
    period: 5,
    category: "transition",
  },
  {
    z: 44,
    symbol: "Ru",
    name: "Ruthenium",
    weight: "101.07",
    group: 8,
    period: 5,
    category: "transition",
  },
  {
    z: 45,
    symbol: "Rh",
    name: "Rhodium",
    weight: "102.91",
    group: 9,
    period: 5,
    category: "transition",
  },
  {
    z: 46,
    symbol: "Pd",
    name: "Palladium",
    weight: "106.42",
    group: 10,
    period: 5,
    category: "transition",
  },
  {
    z: 47,
    symbol: "Ag",
    name: "Silver",
    weight: "107.87",
    group: 11,
    period: 5,
    category: "transition",
  },
  {
    z: 48,
    symbol: "Cd",
    name: "Cadmium",
    weight: "112.41",
    group: 12,
    period: 5,
    category: "transition",
  },
  {
    z: 49,
    symbol: "In",
    name: "Indium",
    weight: "114.82",
    group: 13,
    period: 5,
    category: "post-transition",
  },
  {
    z: 50,
    symbol: "Sn",
    name: "Tin",
    weight: "118.71",
    group: 14,
    period: 5,
    category: "post-transition",
  },
  {
    z: 51,
    symbol: "Sb",
    name: "Antimony",
    weight: "121.76",
    group: 15,
    period: 5,
    category: "metalloid",
  },
  {
    z: 52,
    symbol: "Te",
    name: "Tellurium",
    weight: "127.60",
    group: 16,
    period: 5,
    category: "metalloid",
  },
  {
    z: 53,
    symbol: "I",
    name: "Iodine",
    weight: "126.90",
    group: 17,
    period: 5,
    category: "halogen",
  },
  {
    z: 54,
    symbol: "Xe",
    name: "Xenon",
    weight: "131.29",
    group: 18,
    period: 5,
    category: "noble",
  },

  {
    z: 55,
    symbol: "Cs",
    name: "Caesium",
    weight: "132.91",
    group: 1,
    period: 6,
    category: "alkali",
  },
  {
    z: 56,
    symbol: "Ba",
    name: "Barium",
    weight: "137.33",
    group: 2,
    period: 6,
    category: "alkaline",
  },
  {
    z: 57,
    symbol: "La",
    name: "Lanthanum",
    weight: "138.91",
    group: 3,
    period: 6,
    category: "lanthanide",
  },
  {
    z: 58,
    symbol: "Ce",
    name: "Cerium",
    weight: "140.12",
    group: 3,
    period: 6,
    category: "lanthanide",
  },
  {
    z: 59,
    symbol: "Pr",
    name: "Praseodymium",
    weight: "140.91",
    group: 3,
    period: 6,
    category: "lanthanide",
  },
  {
    z: 60,
    symbol: "Nd",
    name: "Neodymium",
    weight: "144.24",
    group: 3,
    period: 6,
    category: "lanthanide",
  },
  {
    z: 61,
    symbol: "Pm",
    name: "Promethium",
    weight: "145",
    group: 3,
    period: 6,
    category: "lanthanide",
  },
  {
    z: 62,
    symbol: "Sm",
    name: "Samarium",
    weight: "150.36",
    group: 3,
    period: 6,
    category: "lanthanide",
  },
  {
    z: 63,
    symbol: "Eu",
    name: "Europium",
    weight: "151.96",
    group: 3,
    period: 6,
    category: "lanthanide",
  },
];

const CATEGORY_COLORS = {
  alkali: "bg-amber-400",
  alkaline: "bg-lime-400",
  transition: "bg-sky-300",
  posttransition: "bg-violet-300",
  metalloid: "bg-emerald-300",
  nonmetal: "bg-rose-200",
  halogen: "bg-orange-300",
  noble: "bg-indigo-300",
  default: "bg-gray-200",
};

function getCategoryColor(cat) {
  return CATEGORY_COLORS[cat] || CATEGORY_COLORS.default;
}

export default function AnimatedPeriodicTable() {
  const [selected, setSelected] = useState(null);
  const [highlightCategory, setHighlightCategory] = useState(null);

  // Build a 7-period x 18-group grid placeholder and map elements by their (period, group)
  const grid = Array.from({ length: 7 }).map(() => Array(18).fill(null));
  ELEMENTS.forEach((el) => {
    const p = el.period - 1;
    const g = el.group - 1;
    if (p >= 0 && p < 7 && g >= 0 && g < 18) grid[p][g] = el;
  });

  return (
    <>
      <div className="p-4 bg-[#030712] bitcount-single-ink-font   font-sans">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl  text-white">Animated Periodic Table</h1>
          <div className="flex gap-2 items-center">
            <label className="text-sm text-white">Highlight:</label>
            <select
              value={highlightCategory || ""}
              onChange={(e) => setHighlightCategory(e.target.value || null)}
              className="px-2 border-white text-white bg-black  p-2 border rounded "
            >
              <option value="">All</option>
              {Object.keys(CATEGORY_COLORS).map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </div>
        </header>

        <div className="grid grid-cols-18 gap-2">
          {/* tailwind does not have grid-cols-18 by default; add custom utility or use inline style */}
          <div className="col-span-full" />
        </div>

        <div className="overflow-auto">
          <div
            className="relative"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(18, minmax(64px, 1fr))",
              gap: "8px",
            }}
          >
            {grid.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                if (!cell) {
                  // create an empty slot with subtle animation
                  return (
                    <div
                      key={`${rIdx}-${cIdx}`}
                      className="h-28 rounded-md  bg-transparent"
                    />
                  );
                }

                const isDimmed =
                  highlightCategory && cell.category !== highlightCategory;

                return (
                  <motion.button
                    key={cell.z}
                    layout
                    onClick={() => setSelected(cell)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    className={`h-28 p-2 rounded-lg  shadow-md text-left focus:outline-none focus:ring-2 focus:ring-offset-1 ${getCategoryColor(
                      cell.category
                    )} ${isDimmed ? "opacity-40" : "opacity-100"}`}
                    aria-label={`${cell.name} (${cell.symbol}), atomic number ${cell.z}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="text-xs font-medium">{cell.z}</div>
                      <div className="text-xs">{cell.weight}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-2xl font-semibold">
                        {cell.symbol}
                      </div>
                      <div className="text-xs mt-1">{cell.name}</div>
                    </div>
                  </motion.button>
                );
              })
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {Object.entries(CATEGORY_COLORS).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setHighlightCategory((s) => (s === k ? null : k))}
              className={`flex items-center text-white gap-2 p-2 rounded-md shadow-sm text-sm ${
                k === highlightCategory ? "ring-2 ring-offset-1" : ""
              }`}
            >
              <span className={`w-5 h-5 rounded ${v}`} />
              <span className="capitalize">{k}</span>
            </button>
          ))}
        </div>

        {/* Modal for element details */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-white"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ y: 30, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-11/12 max-w-xl"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold">{selected.symbol}</h2>
                    <p className="text-sm text-gray-500">
                      {selected.name} — Atomic number {selected.z}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setSelected(null)}
                      className="px-3 py-1 rounded bg-black hover:bg-black/40 duration-150"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm">
                      <strong>Atomic weight:</strong> {selected.weight}
                    </p>
                    <p className="text-sm">
                      <strong>Category:</strong> {selected.category}
                    </p>
                    <p className="text-sm">
                      <strong>Period:</strong> {selected.period}
                    </p>
                    <p className="text-sm">
                      <strong>Group:</strong> {selected.group}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      Add more details here — electron configuration,
                      electronegativity, discovery year, and fun facts.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-6 text-xs text-gray-600">
          Tip: click any element for details. Extend the ELEMENTS array to
          include the full table.
        </footer>
      </div>
    </>
  );
}
