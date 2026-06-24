# Fleeca India Pvt. Ltd. — Internship Projects

A collection of projects built during my internship at **Fleeca India Pvt. Ltd.**, focused on TPMS (Tyre Pressure Monitoring System) dashboards, email templates, and product design.

---

## Projects

### 1. Fleeca's TPMS Dashboard

**Problem**
The existing dashboard had a cluttered layout. The search bar was placed in the main content area, pushing the actual vehicle diagnostics down and making the fleet list hard to navigate.

**Solution**
- Moved the search bar from the center content area to the **top of the fleet sidebar**.
- Restructured the layout using a three-column flex design: Sidebar → Main Content → Detail Panel.
- Added category-based fleet filtering (Critical, Warning, Stable, Disconnected, High PSI, Low PSI, High Temp, Low Battery).
- Built a dynamic vehicle detail panel that updates on selection.

**Tech Stack**
React, TypeScript, Tailwind CSS, Vite, shadcn/ui components, Lucide icons.

**Process**
- Analyzed the existing layout and identified UX pain points.
- Iterated on the sidebar structure to lock the search bar at the top while keeping the fleet list scrollable.
- Used flexbox utilities (`flex-col`, `flex-1`, `overflow-y-auto`) to ensure independent scrolling between panels.
- Tested responsive behavior across different screen sizes.

---

### 2. TPMS Dashboard Redesign (v1 & v2)

**Problem**
The original TPMS dashboard needed a visual overhaul — cleaner typography, better spacing, and a more professional look for fleet operators.

**Solution**
- Redesigned the UI with a modern card-based layout.
- Improved visual hierarchy using consistent color coding for tyre statuses.
- Created two versions (v1 and v2) with incremental improvements in spacing, contrast, and component alignment.

**Deliverables**
- `TPMS Dashboard.pdf` — v1 redesign mockup.
- `TPMS Dashboard v2.pdf` — v2 redesign mockup with refined visuals.

---

### 3. TPMS Install Status Outlook Template

**Problem**
After TPMS installation, clients needed a professional email notification confirming successful device activation. The existing template was plain and lacked branding.

**Solution**
- Built a responsive HTML email template compatible with Microsoft Outlook.
- Used table-based layout and inline CSS for maximum email client compatibility.
- Added dynamic placeholders (`{{$fitment_update->vehicle}}`, `{{$fitment_update->firmName}}`, etc.) for server-side rendering via Laravel/PHP.
- Included installation summary cards, device details, CTA buttons (Download App, Open Dashboard), and support contact info.

**Key Technical Decisions**
- Used `border-collapse: separate` and `border-radius` workarounds for Outlook compatibility.
- Hosted images on Fleeca's CDN (`api-app.fleeca.in`) for reliable delivery.
- Added social media icons and footer with pan-India office locations.

---

### 4. Tyre OS — Interactive Dashboard

**Problem**
Fleeca needed a conceptual dashboard to showcase its "Tyre OS" platform — an AI-driven tyre management ecosystem connecting multiple stakeholders (Bankers, Fleet Operators, Tyre Manufacturers, OEMs, Service Partners, Insurers).

**Solution**
- Built an interactive radial wheel dashboard using **pure HTML, CSS, and JavaScript** (no framework).
- Designed a 6-sector SVG wheel where each clickable sector represents a stakeholder node.
- Implemented a state management system that highlights the active sector and displays corresponding info cards in the side panels.
- Added micro-charts with animated progress bars for each node's KPIs.

**Key Technical Decisions**
- Used SVG `<path>` elements with precise arc geometry for the wheel sectors.
- Implemented a unified toggle engine (`executeToggle`) that synchronizes SVG state, card state, and indicator nodes.
- Central hub button toggles all sectors on/off.
- Fully responsive — collapses to single-column on smaller screens.

**Sector Nodes**
| Node | Focus |
|------|-------|
| Banker | Asset depreciation tracking, credit risk mitigation |
| Fleet / Govt. | Uptime prevention, carbon reduction |
| Tyre Manufacturers | Wear degradation loops, R&D telemetry |
| Vehicle OEM | CAN-bus telemetry, factory delivery |
| Service Partner | Proactive work orders, SLA compliance |
| Insurer | Dynamic risk profiling, claims fraud filtering |

---

## How to Run

### TPMS Dashboard
```bash
cd "Fleeca's TPMS Dashboard"
npm install
npm run dev
```

### Tyre OS / Outlook Template
Open `index.html` directly in a browser — no build step required.

---

## About Fleeca

Fleeca India Pvt. Ltd. is a fleet technology company based in India, specializing in TPMS and smart tyre management solutions for commercial fleets, OEMs, and logistics operators.

---

*Built during internship at Fleeca India Pvt. Ltd.*
