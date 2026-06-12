import { useState } from "react";
import { vehicles } from "./components/data/vehicles";
import { TopNavbar } from "./components/layout/TopNavbar";
import { FleetSidebar } from "./components/fleet/FleetSidebar";
import { VehicleHeader } from "./components/vehicle/VehicleHeader";
import { VehicleTabs } from "./components/vehicle/VehicleTabs";
import { TyreLegend } from "./components/vehicle/TyreLegend";
import { IssuesAlert } from "./components/vehicle/IssuesAlert";
import { VehicleDiagram } from "./components/vehicle/VehicleDiagram";

export default function App() {
  const [activeTab, setActiveTab] = useState("TPMS");
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  return (
    <div className="min-h-screen bg-[#e9edf3] overflow-hidden">
      <TopNavbar />

      <div className="mx-[18px] mt-[20px] flex h-[calc(100vh-102px)] gap-[18px]">
        <div className="h-full shrink-0 w-[33%] min-w-[340px] max-w-[520px]">
          <FleetSidebar
            selectedVehicle={selectedVehicle}
            setSelectedVehicle={setSelectedVehicle}
          />
        </div>

        <div className="flex-[2] min-w-0 overflow-hidden rounded-xl bg-white flex flex-col">
          <VehicleHeader vehicle={selectedVehicle} />
          <VehicleTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <TyreLegend />
          <IssuesAlert />
          <VehicleDiagram />
        </div>
      </div>
    </div>
  );
}
