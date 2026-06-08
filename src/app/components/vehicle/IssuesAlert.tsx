import { AlertTriangle, X } from "lucide-react";

const issues = [
  "High PSI at 1LO, reduce 23 PSI",
  "High PSI at 1RO, reduce 14 PSI",
  "Low PSI at 2LI, increase 9 PSI",
];

export function IssuesAlert() {
  return (
    <div className="mx-6 mt-3 border border-red-200 bg-red-50 rounded p-3 relative">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
        <X size={14} />
      </button>
      <div className="flex items-center gap-2 text-red-600 font-semibold text-sm mb-2">
        <AlertTriangle size={14} />
        {issues.length} Issues Found
      </div>
      <ul className="space-y-1">
        {issues.map((issue, i) => (
          <li key={i} className="text-red-500 text-xs font-medium">• {issue}</li>
        ))}
      </ul>
    </div>
  );
}
