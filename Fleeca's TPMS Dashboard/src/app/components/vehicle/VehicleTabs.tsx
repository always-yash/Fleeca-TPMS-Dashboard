import { useState } from "react";

const tabs = ["TPMS", "Analysis", "Fleece Center", "Inflation Summary"];

interface VehicleTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function VehicleTabs({ activeTab, onTabChange }: VehicleTabsProps) {
  return (
    <div className="flex border-b border-gray-200 bg-white px-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === tab
              ? "border-orange-500 text-orange-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
