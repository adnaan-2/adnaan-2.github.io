import { useMemo } from "react";
import SectionReveal from "./SectionReveal";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Seeded random for consistent results
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generateContributions = () => {
  const data: { count: number; date: string }[][] = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);
  
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);
  
  let totalCount = 0;
  const targetTotal = 240;
  const totalDays = 53 * 7;
  
  // Pre-calculate which days will have contributions (~40% fill rate)
  const contributionDays: { week: number; day: number; count: number }[] = [];
  let seed = 42;
  
  for (let w = 0; w < 53; w++) {
    for (let d = 0; d < 7; d++) {
      seed++;
      const rand = seededRandom(seed);
      if (rand < 0.40) { // 40% chance of contribution
        let count = 1;
        const intensityRand = seededRandom(seed + 1000);
        if (intensityRand > 0.85) count = Math.floor(seededRandom(seed + 2000) * 4) + 4; // 4-7
        else if (intensityRand > 0.6) count = Math.floor(seededRandom(seed + 2000) * 3) + 2; // 2-4
        else count = 1;
        
        contributionDays.push({ week: w, day: d, count });
        totalCount += count;
      }
    }
  }
  
  // Adjust to match target (~240)
  const scale = targetTotal / totalCount;
  contributionDays.forEach(cd => {
    cd.count = Math.max(1, Math.round(cd.count * scale));
  });
  
  // Build the grid
  for (let w = 0; w < 53; w++) {
    const week: { count: number; date: string }[] = [];
    for (let d = 0; d < 7; d++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + w * 7 + d);
      
      const contribution = contributionDays.find(cd => cd.week === w && cd.day === d);
      
      week.push({
        count: contribution?.count || 0,
        date: currentDate.toLocaleDateString("en-US", { 
          weekday: "short", 
          year: "numeric", 
          month: "short", 
          day: "numeric" 
        }),
      });
    }
    data.push(week);
  }
  return data;
};

const getColor = (count: number) => {
  if (count === 0) return "bg-[#161b22]";
  if (count === 1) return "bg-[#0e4429]";
  if (count <= 3) return "bg-[#006d32]";
  if (count <= 5) return "bg-[#26a641]";
  return "bg-[#39d353]";
};

const getMonthLabels = (contributions: { count: number; date: string }[][]) => {
  const labels: { month: string; index: number }[] = [];
  let lastMonth = -1;
  
  contributions.forEach((week, index) => {
    const date = new Date(week[0].date);
    const month = date.getMonth();
    if (month !== lastMonth) {
      labels.push({ month: months[month], index });
      lastMonth = month;
    }
  });
  
  return labels;
};

const getTotalContributions = (contributions: { count: number; date: string }[][]) => {
  return contributions.reduce((total, week) => 
    total + week.reduce((weekTotal, day) => weekTotal + day.count, 0), 0
  );
};

const GitHubStats = () => {
  const contributions = useMemo(generateContributions, []);
  const monthLabels = useMemo(() => getMonthLabels(contributions), [contributions]);
  const totalContributions = useMemo(() => getTotalContributions(contributions), [contributions]);

  return (
    <section id="stats" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary">Activity</div>
          <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">Coding Stats</h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex justify-center">
            <div className="w-full max-w-full overflow-x-auto rounded-xl border border-border/50 bg-card/80 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:w-auto sm:p-4">
              <h3 className="mb-3 font-mono text-xs text-muted-foreground sm:text-sm">
                {totalContributions} contributions in the last year
              </h3>
              
              <div className="overflow-x-auto pb-2">
                <div className="relative min-w-[720px]">
                  {/* Month labels */}
                  <div className="mb-1 ml-8 flex">
                    {monthLabels.map((label, i) => (
                      <span
                        key={i}
                        className="absolute font-mono text-[10px] text-muted-foreground sm:text-xs"
                        style={{ left: `${label.index * 13 + 32}px` }}
                      >
                        {label.month}
                      </span>
                    ))}
                  </div>
                  
                  <div className="h-5" />
                  
                  {/* Contribution grid with day labels */}
                  <div className="flex items-start">
                    {/* Day labels */}
                    <div className="flex flex-col gap-[3px] pr-1 w-7">
                      {days.map((day, i) => (
                        <span 
                          key={i} 
                          className={`font-mono text-[10px] text-muted-foreground h-[10px] leading-[10px] ${
                            i % 2 === 0 ? 'opacity-0' : ''
                          }`}
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                    
                    {/* Grid */}
                    <div className="flex gap-[3px]">
                      {contributions.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-[3px]">
                          {week.map((day, di) => (
                            <div
                              key={di}
                              className={`h-[10px] w-[10px] rounded-sm ${getColor(day.count)} transition-all hover:ring-1 hover:ring-muted-foreground`}
                              title={`${day.count} contributions on ${day.date}`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="mt-2 flex items-center justify-end gap-1">
                    <span className="font-mono text-[10px] text-muted-foreground mr-1">Less</span>
                    {[0, 1, 3, 5, 7].map((level) => (
                      <div
                        key={level}
                        className={`h-[10px] w-[10px] rounded-sm ${getColor(level)}`}
                      />
                    ))}
                    <span className="font-mono text-[10px] text-muted-foreground ml-1">More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default GitHubStats;
