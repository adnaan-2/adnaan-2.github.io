import { useMemo } from "react";
import SectionReveal from "./SectionReveal";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const generateContributions = () => {
  const data: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(Math.random() > 0.3 ? Math.floor(Math.random() * 10) : 0);
    }
    data.push(week);
  }
  return data;
};

const monthlyData = [
  { month: "Jan", commits: 45 },
  { month: "Feb", commits: 62 },
  { month: "Mar", commits: 78 },
  { month: "Apr", commits: 53 },
  { month: "May", commits: 91 },
  { month: "Jun", commits: 67 },
  { month: "Jul", commits: 84 },
  { month: "Aug", commits: 72 },
  { month: "Sep", commits: 95 },
  { month: "Oct", commits: 88 },
  { month: "Nov", commits: 61 },
  { month: "Dec", commits: 76 },
];

const getColor = (count: number) => {
  if (count === 0) return "bg-secondary";
  if (count < 3) return "bg-primary/30";
  if (count < 6) return "bg-primary/60";
  return "bg-primary";
};

const GitHubStats = () => {
  const contributions = useMemo(generateContributions, []);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary">{"## Activity"}</div>
          <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">Coding Stats</h2>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionReveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm text-muted-foreground">Contribution Graph</h3>
              <div className="overflow-x-auto">
                <div className="flex gap-[3px]">
                  {contributions.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((count, di) => (
                        <div
                          key={di}
                          className={`h-3 w-3 rounded-sm ${getColor(count)}`}
                          title={`${count} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm text-muted-foreground">Monthly Commits</h3>
              <ResponsiveContainer width="100%" height={230}>
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="commits" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
