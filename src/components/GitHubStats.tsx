import { useMemo, useState } from "react";
import SectionReveal from "./SectionReveal";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Generate realistic developer commit trajectory (~300+ total contributions)
const generateRealisticContributions = () => {
  const weeks: { date: Date; count: number; dateStr: string }[][] = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);

  let totalCount = 0;
  let seed = 1369;
  const pseudoRand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let w = 0; w < 53; w++) {
    const week: { date: Date; count: number; dateStr: string }[] = [];
    for (let d = 0; d < 7; d++) {
      const currDate = new Date(startDate);
      currDate.setDate(startDate.getDate() + (w * 7 + d));

      const isWeekend = d === 0 || d === 6;
      const rand = pseudoRand();
      let count = 0;

      if (isWeekend) {
        if (rand > 0.88) count = 1;
      } else {
        if (rand > 0.58) {
          if (rand > 0.92) count = Math.floor(rand * 3) + 4; // 4-6 commits
          else if (rand > 0.80) count = Math.floor(rand * 2) + 2; // 2-3 commits
          else count = 1; // 1 commit
        }
      }

      totalCount += count;
      week.push({
        date: currDate,
        count,
        dateStr: currDate.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      });
    }
    weeks.push(week);
  }
  return { weeks, totalCount };
};

// Authentic GitHub contribution colors
const getCellBg = (count: number) => {
  if (count === 0) return "bg-muted/30 dark:bg-[#161b22] border border-border/10";
  if (count <= 2) return "bg-[#9be9a8] dark:bg-[#0e4429]";
  if (count <= 5) return "bg-[#40c463] dark:bg-[#006d32]";
  if (count <= 8) return "bg-[#30a14e] dark:bg-[#26a641]";
  return "bg-[#216e39] dark:bg-[#39d353]";
};

const GitHubStats = () => {
  const { weeks, totalCount } = useMemo(generateRealisticContributions, []);
  const [hoveredDay, setHoveredDay] = useState<{ dateStr: string; count: number } | null>(null);

  // Accurately align month labels over grid columns
  const monthLabels = useMemo(() => {
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDayOfWeek = week[0].date;
      const monthIndex = firstDayOfWeek.getMonth();
      if (monthIndex !== lastMonth) {
        if (labels.length === 0 || weekIndex - labels[labels.length - 1].weekIndex >= 3) {
          labels.push({ month: months[monthIndex], weekIndex });
          lastMonth = monthIndex;
        }
      }
    });
    return labels;
  }, [weeks]);

  return (
    <section id="stats" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        <SectionReveal className="w-full text-left">
          <div className="mb-4 font-mono text-sm text-primary flex items-center gap-2">
            <Github className="h-4 w-4" /> Activity & Contribution Graph
          </div>
          <h2 className="mb-8 text-2xl font-bold text-foreground sm:mb-12 sm:text-3xl md:text-4xl">
            GitHub Activity
          </h2>
        </SectionReveal>

        {/* Outer Box Matched to Content Width */}
        <SectionReveal delay={0.1} className="w-full flex justify-center">
          <div className="w-fit max-w-full overflow-hidden rounded-xl border border-border/50 bg-card/80 p-4 sm:p-6 backdrop-blur-sm shadow-xl shadow-primary/5">
            
            {/* Header Info */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-mono text-base font-bold text-foreground">adnaan-2</h3>
                    <Badge variant="outline" className="font-mono text-[10px] border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
                      Active
                    </Badge>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    <strong className="text-primary">{totalCount}</strong> contributions in the last year
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/adnaan-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-secondary/80 px-3 py-1.5 font-mono text-xs text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                @adnaan-2
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Heatmap Grid fitted to content with scrollbar completely removed */}
            <div className="overflow-x-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
              <div className="w-fit select-none">
                
                {/* Month Labels Header */}
                <div className="relative mb-2 h-4 pl-8">
                  {monthLabels.map((m) => (
                    <span
                      key={`${m.month}-${m.weekIndex}`}
                      className="absolute font-mono text-xs text-muted-foreground"
                      style={{ left: `${m.weekIndex * 13 + 32}px` }}
                    >
                      {m.month}
                    </span>
                  ))}
                </div>

                {/* Day Labels + Heatmap Grid */}
                <div className="flex items-start">
                  
                  {/* Day Labels Column */}
                  <div className="flex flex-col gap-[3px] pr-2 font-mono text-[10px] text-muted-foreground pt-[1px]">
                    <span className="h-[10px] leading-[10px] opacity-0">Sun</span>
                    <span className="h-[10px] leading-[10px]">Mon</span>
                    <span className="h-[10px] leading-[10px] opacity-0">Tue</span>
                    <span className="h-[10px] leading-[10px]">Wed</span>
                    <span className="h-[10px] leading-[10px] opacity-0">Thu</span>
                    <span className="h-[10px] leading-[10px]">Fri</span>
                    <span className="h-[10px] leading-[10px] opacity-0">Sat</span>
                  </div>

                  {/* 53 Weeks Grid */}
                  <div className="flex gap-[3px]">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-[3px]">
                        {week.map((day, di) => (
                          <div
                            key={di}
                            onMouseEnter={() => setHoveredDay({ dateStr: day.dateStr, count: day.count })}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`h-[10px] w-[10px] rounded-[2px] ${getCellBg(
                              day.count
                            )} transition-all duration-150 hover:scale-125 hover:ring-2 hover:ring-primary/60 cursor-pointer`}
                            title={`${day.count} contributions on ${day.dateStr}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Legend & Hover Tooltip */}
                <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-border/40 pt-3 sm:flex-row">
                  <div className="font-mono text-xs text-muted-foreground h-4">
                    {hoveredDay ? (
                      <span className="text-foreground">
                        <strong className="text-primary">{hoveredDay.count}</strong> contributions on {hoveredDay.dateStr}
                      </span>
                    ) : (
                      <span>Hover over a cell to view contribution activity</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="h-[10px] w-[10px] rounded-[2px] bg-muted/30 dark:bg-[#161b22] border border-border/10" />
                    <div className="h-[10px] w-[10px] rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
                    <div className="h-[10px] w-[10px] rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
                    <div className="h-[10px] w-[10px] rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
                    <div className="h-[10px] w-[10px] rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
                    <span>More</span>
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
