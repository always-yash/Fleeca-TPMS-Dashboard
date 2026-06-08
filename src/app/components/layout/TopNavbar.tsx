import { Bell, Filter } from "lucide-react";

export function TopNavbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
          N
        </div>
        <div>
          <div className="font-bold text-gray-900 leading-tight">TPMS Dashboard</div>
          <div className="text-orange-500 text-[11px]">TPMS Dashboard</div>
        </div>
      </div>

      {/* Right: Company Name + Icons */}
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <span className="font-semibold">FLEETAID PROFESSIONAL PRIVATE LIMITED</span>
        <Bell size={16} className="text-gray-500 cursor-pointer" />
        <Filter size={16} className="text-gray-500 cursor-pointer" />
        <span className="text-gray-500 cursor-pointer">Filter</span>
      </div>
    </div>
  );
}
