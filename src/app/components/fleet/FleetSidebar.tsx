import { useMemo, useState } from "react";
import { vehicles } from "../data/vehicles";
import {
  BatteryCharging,
  Bell,
  ChevronUp,
  Copy,
  Expand,
  MapPin,
  RefreshCw,
} from "lucide-react";

const fleetCategories = [
  { id: "critical", label: "Critical", count: 7, bg: "bg-red-50", iconColor: "text-red-500" },
  { id: "warning", label: "Warning", count: 23, bg: "bg-amber-50", iconColor: "text-amber-500" },
  { id: "stable", label: "Stable", count: 842, bg: "bg-green-50", iconColor: "text-green-500" },
  { id: "disconnected", label: "Disconnected", count: 14, bg: "bg-gray-50", iconColor: "text-gray-500" },
  { id: "highPsi", label: "High PSI", count: 18, bg: "bg-violet-50", iconColor: "text-violet-500" },
  { id: "lowPsi", label: "Low PSI", count: 31, bg: "bg-blue-50", iconColor: "text-blue-500" },
  { id: "highTemp", label: "High Temp", count: 5, bg: "bg-orange-50", iconColor: "text-orange-500" },
  { id: "lowBattery", label: "Low Battery", count: 12, bg: "bg-cyan-50", iconColor: "text-cyan-500" },
];

interface FleetSidebarProps {
  selectedVehicle: any;
  setSelectedVehicle: (vehicle: any) => void;
}

function SummaryCard({ vehicle }: { vehicle: any }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-1 text-sm font-semibold text-orange-400">
              {vehicle?.id ?? "NLOC8243"}
            </div>
            <MapPin size={14} className="shrink-0 text-orange-500" />
          </div>

          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span className="flex items-center gap-1 text-blue-600 font-semibold">
              <BatteryCharging size={13} />
              {vehicle?.battery ?? 93}%
            </span>
            <Bell size={13} className="text-gray-400" />
            <Expand size={13} className="text-gray-400" />
            <Copy size={13} className="text-gray-400" />
            <button className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <ChevronUp size={11} />
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-600">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span>Last Updated : {vehicle?.lastUpdated ?? "Yesterday 17:50:34"}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-4">
        <div className="grid grid-cols-3 gap-x-4 gap-y-4">
          <div>
            <div className="text-sm font-medium text-red-500">Critical</div>
            <div className="text-base text-red-500">2</div>
          </div>
          <div>
            <div className="text-sm font-medium text-amber-500">Warning</div>
            <div className="text-base text-amber-500">1</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-400">Offline</div>
            <div className="text-base text-slate-400">0</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-400">Over inflated</div>
            <div className="text-base text-slate-700">2</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-400">Under inflated</div>
            <div className="text-base text-slate-700">1</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-400">High Temp</div>
            <div className="text-base text-slate-700">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FleetSidebar({ selectedVehicle, setSelectedVehicle }: FleetSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryCounts = useMemo(() => {
    return fleetCategories.reduce(
      (counts, category) => {
        counts[category.id] = vehicles.filter((vehicle) => vehicle.category === category.id).length;
        return counts;
      },
      {} as Record<string, number>,
    );
  }, []);

  const fleetSummary = useMemo(() => {
    const summary = {
      critical: 0,
      warning: 0,
      stable: 0,
      disconnected: 0,
      total: vehicles.length,
    };

    for (const vehicle of vehicles) {
      if (vehicle.category === "critical") summary.critical += 1;
      if (vehicle.category === "warning") summary.warning += 1;
      if (vehicle.category === "stable") summary.stable += 1;
      if (vehicle.category === "disconnected") summary.disconnected += 1;
    }

    return summary;
  }, []);

  const filteredVehicles = vehicles.filter((vehicle) => vehicle.category === selectedCategory);

  if (selectedCategory) {
    const activeVehicle = selectedVehicle ?? filteredVehicles[0];

    return (
      <div className="h-full w-full rounded-xl border border-gray-200 bg-white flex flex-col overflow-hidden">
        <div className="p-4 border-b">
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
          >
            <span aria-hidden="true">←</span>
            Back
          </button>
          <h3 className="mt-3 font-semibold">
            {fleetCategories.find((category) => category.id === selectedCategory)?.label} Vehicles
          </h3>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-3">
          <SummaryCard vehicle={activeVehicle} />

          <div className="mt-4 space-y-3 pb-4">
            {filteredVehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => setSelectedVehicle(vehicle)}
                className={`w-full text-left rounded-xl border bg-white shadow-sm overflow-hidden transition-colors ${
                  selectedVehicle?.id === vehicle.id
                    ? "border-orange-300 ring-1 ring-orange-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <SummaryCard vehicle={vehicle} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
      <div className="h-full w-full rounded-xl border border-gray-200 bg-white flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          Current Fleet Status
          <RefreshCw size={14} className="text-orange-500 cursor-pointer" />
        </div>
        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full font-medium">
          {fleetSummary.total}
        </span>
      </div>

      <div className="px-4 py-3 border-b border-gray-100">
        <div className="w-full h-5 bg-orange-500 rounded flex items-center justify-end pr-2">
          <span className="text-white text-[11px] font-semibold">100.00%</span>
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-500">{fleetSummary.total}</span>
        </div>
      </div>

      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            Critical {fleetSummary.critical}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            Warning {fleetSummary.warning}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Stable {fleetSummary.stable}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
            Disconnected {fleetSummary.disconnected}
          </span>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200 bg-white">
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Search vehicles..."
        />
      </div>

      <div className="px-4 py-2 border-b border-gray-100">
        <div className="grid grid-cols-2 gap-3">
          {fleetCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                ${category.bg}
                rounded-xl
                p-3
                text-left
                border
                border-gray-100
                hover:shadow-sm
                transition-all
              `}
            >
              <div className={`font-bold text-2xl ${category.iconColor}`}>
                {categoryCounts[category.id] ?? category.count}
              </div>
              <div className="text-xs font-medium text-gray-700 mt-1">{category.label}</div>
              <div className="text-[11px] text-gray-400 mt-2">View all →</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
