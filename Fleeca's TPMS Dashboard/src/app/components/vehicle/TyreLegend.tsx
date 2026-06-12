export function TyreLegend() {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white border-b border-gray-100">
      {/* Status Legend */}
      <div className="flex items-center gap-4 text-[11px] text-gray-600">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" />Critical</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />Warning</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />Stable</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />Disconnected</span>
      </div>

      {/* Reading Toggles */}
      <div className="flex items-center gap-3 text-[11px] text-gray-600">
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-3 h-3" /> Battery
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-3 h-3" /> Pressure
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-3 h-3" /> Temperature
        </label>
      </div>
    </div>
  );
}
