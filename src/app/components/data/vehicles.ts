export const vehicles = [
  // Generating 50 records spread across the 8 categories
  ...Array.from({ length: 50 }).map((_, i) => {
    const categories = ['critical', 'warning', 'stable', 'disconnected', 'highPsi', 'lowPsi', 'lowBattery', 'highTemp'];
    const statuses = ['Active', 'Maintenance', 'Idle'];
    
    return {
      id: `NL01C${8243 + i}`,
      name: `Vehicle ${100 + i}`,
      lastUpdated: `${Math.floor(Math.random() * 60)} min ago`,
      battery: Math.floor(Math.random() * 100),
      category: categories[i % categories.length],
      status: statuses[i % statuses.length],
      location: ["North Depot", "South Yard", "Highway 101"][i % 3],
      driver: ["John D.", "Sarah K.", "Mike R."][i % 3]
    };
  })
];