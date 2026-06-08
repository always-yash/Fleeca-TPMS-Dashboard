import { ChevronDown } from "lucide-react";

// ── Tyre Data ──────────────────────────────────────────────────────────────

type TyreStatus = "critical" | "warning" | "stable";

interface Tyre {
  label: string;
  psi: number;
  stdPsi: number;
  temp: number;
  battery: number;
  status: TyreStatus;
}

interface Axle {
  name: string;
  standardPsi: number;
  left: Tyre[];
  right: Tyre[];
}

const axles: Axle[] = [
  {
    name: "Axle 1 (Front)",
    standardPsi: 125,
    left: [
      { label: "1LO", psi: 150, stdPsi: 125, temp: 76, battery: 94, status: "critical" },
    ],
    right: [
      { label: "1RO", psi: 148, stdPsi: 145, temp: 76, battery: 93, status: "warning" },
    ],
  },
  {
    name: "Axle 2 (Mid)",
    standardPsi: 145,
    left: [
      { label: "2LO", psi: 138, stdPsi: 145, temp: 28, battery: 91, status: "stable" },
      { label: "2LI", psi: 139, stdPsi: 145, temp: 37, battery: 91, status: "stable" },
    ],
    right: [
      { label: "2RI", psi: 142, stdPsi: 145, temp: 39, battery: 93, status: "stable" },
      { label: "2RO", psi: 143, stdPsi: 145, temp: 39, battery: 93, status: "stable" },
    ],
  },
  {
    name: "Axle 3 (Rear)",
    standardPsi: 145,
    left: [
      { label: "3LI", psi: 148, stdPsi: 145, temp: 40, battery: 93, status: "stable" },
      { label: "3LO", psi: 150, stdPsi: 145, temp: 42, battery: 94, status: "stable" },
    ],
    right: [
      { label: "3RI", psi: 143, stdPsi: 145, temp: 39, battery: 93, status: "stable" },
      { label: "3RO", psi: 142, stdPsi: 145, temp: 39, battery: 94, status: "stable" },
    ],
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

function statusColor(status: TyreStatus): string {
  return status === "critical" ? "#ef4444"
       : status === "warning"  ? "#d97706"
       : "#16a34a";
}

function statusBg(status: TyreStatus): string {
  return status === "critical" ? "#fef2f2"
       : status === "warning"  ? "#fffbeb"
       : "#f0fdf4";
}

function statusBorder(status: TyreStatus): string {
  return status === "critical" ? "#fca5a5"
       : status === "warning"  ? "#fcd34d"
       : "#86efac";
}

function statusTag(status: TyreStatus): string {
  return status === "critical" ? "Critical"
       : status === "warning"  ? "Warning"
       : "Stable";
}

// ── Minimalist Tyre Shape ─────────────────────────────────────────────────

function TyreShape({ status }: { status: TyreStatus }) {
  const color = statusColor(status);
  const bg = statusBg(status);
  const border = statusBorder(status);
  return (
    <div
      className="rounded-xl flex items-center justify-center shrink-0"
      style={{
        width: 52,
        height: 80,
        background: bg,
        border: `3px solid ${border}`,
        boxShadow: `inset 0 0 0 8px ${color}18, 0 1px 4px ${color}22`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Tread grooves */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-evenly", paddingBlock: 8 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ height: 2, marginInline: 6, background: `${color}30`, borderRadius: 2 }} />
        ))}
      </div>
      {/* Hub */}
      <div
        style={{
          width: 18,
          height: 46,
          background: color,
          opacity: 0.65,
          borderRadius: 5,
          zIndex: 1,
        }}
      />
    </div>
  );
}

// ── Stat Block (direction-aware) ──────────────────────────────────────────

function StatBlock({ tyre, align }: { tyre: Tyre; align: "left" | "right" }) {
  const color = statusColor(tyre.status);
  const isLeft = align === "left";

  return (
    <div className={`flex flex-col gap-0.5 ${isLeft ? "items-start text-left" : "items-end text-right"}`}>
      <span className="font-bold text-base leading-none" style={{ color }}>
        {tyre.psi} <span className="text-[11px] font-normal text-gray-400">PSI</span>
      </span>
      <span className="text-[11px] text-gray-400">Std: {tyre.stdPsi}</span>
      <span className="text-[11px] text-gray-500">{tyre.temp}°C</span>
      <span className="text-[11px] text-gray-400">{tyre.battery}%</span>
      <span
        className="text-[10px] font-semibold mt-0.5 px-1.5 py-0.5 rounded-full"
        style={{ color, background: statusBg(tyre.status), border: `1px solid ${statusBorder(tyre.status)}` }}
      >
        {statusTag(tyre.status)}
      </span>
    </div>
  );
}

// ── Tyre Unit: shape + stats laid out by side ─────────────────────────────

function TyreUnit({ tyre, side }: { tyre: Tyre; side: "left" | "right" }) {
  // Left tyres: shape on left, stats on right
  // Right tyres: stats on left, shape on right
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[11px] font-semibold text-gray-400 tracking-wide">{tyre.label}</span>
      <div className={`flex items-center gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}>
        <TyreShape status={tyre.status} />
        <StatBlock tyre={tyre} align={side === "left" ? "left" : "right"} />
      </div>
    </div>
  );
}

// ── Axle Row ───────────────────────────────────────────────────────────────

function AxleRow({ axle }: { axle: Axle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Axle Label */}
      <div className="px-5 py-2 bg-gray-50 border-b border-gray-100">
        <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">{axle.name}</span>
      </div>

      {/* Tyre Layout */}
      <div className="flex items-center px-6 py-5 gap-6">
        {/* Left Tyres — outermost first */}
        <div className="flex gap-6 justify-end flex-1">
          {axle.left.map((t) => (
            <TyreUnit key={t.label} tyre={t} side="left" />
          ))}
        </div>

        {/* Centre Standard PSI */}
        <div className="flex flex-col items-center justify-center text-center shrink-0 w-28">
          <div className="text-[11px] text-gray-400 uppercase tracking-wider">Standard PSI</div>
          <div className="text-3xl font-bold text-gray-700 mt-0.5">{axle.standardPsi}</div>
        </div>

        {/* Right Tyres — innermost first */}
        <div className="flex gap-6 justify-start flex-1">
          {axle.right.map((t) => (
            <TyreUnit key={t.label} tyre={t} side="right" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────

export function VehicleDiagram() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto px-6 py-4 space-y-3 bg-gray-50">
      {axles.map((axle) => (
        <AxleRow key={axle.name} axle={axle} />
      ))}
    </div>
  );
}
