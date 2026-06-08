import { MapPin, Image, Bell, ChevronDown } from "lucide-react";

interface VehicleHeaderProps {
  vehicle: { id: string };
}

export function VehicleHeader({
  vehicle,
}: VehicleHeaderProps) {
  return (
    <div className="px-6 pt-4 pb-0 border-b border-gray-200 bg-white">
      {/* Title Row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">{vehicle?.id ?? "Vehicle"} (Ashok Leyland 1213)</span>
          <span className="flex items-center gap-1 text-orange-500 text-sm">
            <MapPin size={13} />
            Rewari, Haryana
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image size={16} className="text-gray-400 cursor-pointer" />
          <button className="flex items-center gap-1 border border-gray-300 rounded px-2 py-1 text-xs text-gray-600">
            View History <ChevronDown size={12} />
          </button>
          <Bell size={16} className="text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Status Row */}
      <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
        <span>• Last Activity : 07-08-2026 17:50:34</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          Running: 0 KM
        </span>
        <span className="bg-green-500 text-white rounded px-2 py-0.5 font-medium">Running: 00:00 Hrs</span>
        <span className="bg-gray-300 text-gray-700 rounded px-2 py-0.5 font-medium">Idle: 00:00 Hrs</span>
      </div>
    </div>
  );
}
