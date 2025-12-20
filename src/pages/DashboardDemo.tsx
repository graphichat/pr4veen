import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp, ArrowDown, Users, TrendingUp, DollarSign, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

// Mock data for dashboard
const stats = [
  {
    title: "Total Users",
    value: "12,543",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Growth Rate",
    value: "23.4%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Active Sessions",
    value: "1,234",
    change: "-3.2%",
    trend: "down",
    icon: Users,
  },
];

const recentActivity = [
  { id: 1, user: "John Doe", action: "Created new project", time: "2 minutes ago" },
  { id: 2, user: "Jane Smith", action: "Updated settings", time: "15 minutes ago" },
  { id: 3, user: "Bob Johnson", action: "Completed task", time: "1 hour ago" },
  { id: 4, user: "Alice Williams", action: "Uploaded file", time: "2 hours ago" },
  { id: 5, user: "Charlie Brown", action: "Joined team", time: "3 hours ago" },
];

// Chart data
const revenueData = [
  { name: "Jan", value: 32000 },
  { name: "Feb", value: 35000 },
  { name: "Mar", value: 38000 },
  { name: "Apr", value: 42000 },
  { name: "May", value: 45000 },
  { name: "Jun", value: 48000 },
  { name: "Jul", value: 45231 },
];

const userGrowthData = [
  { name: "Jan", value: 8500 },
  { name: "Feb", value: 9200 },
  { name: "Mar", value: 10100 },
  { name: "Apr", value: 11000 },
  { name: "May", value: 11800 },
  { name: "Jun", value: 12300 },
  { name: "Jul", value: 12543 },
];

export function DashboardDemo() {
  const statsRef = useRef<HTMLDivElement>(null);
  const chartsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate stats cards
    if (statsRef.current) {
      const cards = statsRef.current.querySelectorAll("[data-stat-card]");
      inView(
        statsRef.current,
        () => {
          animate(
            cards as NodeListOf<HTMLElement>,
            {
              opacity: [0, 1],
              y: [20, 0],
            },
            {
              duration: 0.5,
              delay: stagger(0.1),
            }
          );
        },
        {
          margin: "-50px",
        }
      );
    }

    // Animate charts
    if (chartsRef.current) {
      const charts = chartsRef.current.querySelectorAll("[data-chart]");
      inView(
        chartsRef.current,
        () => {
          animate(
            charts as NodeListOf<HTMLElement>,
            {
              opacity: [0, 1],
              scale: [0.95, 1],
            },
            {
              duration: 0.6,
              delay: stagger(0.15),
            }
          );
        },
        {
          margin: "-100px",
        }
      );
    }

    // Page entrance
    animate(
      document.body,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.4,
      }
    );
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <MotionDiv animation="slideDown" trigger="mount" duration={0.5}>
          <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Real-time insights and metrics for your business
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Designed with focus on data visualization best practices and accessibility
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/">← Back to Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </MotionDiv>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <MotionDiv animation="fadeIn" trigger="inView" delay={0.2}>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search metrics, users, or activities..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </MotionDiv>

          {/* Stats Grid */}
          <div ref={statsRef} className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} data-stat-card className="transition-all hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      {stat.trend === "up" ? (
                        <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                      ) : (
                        <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                      )}
                      <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                        {stat.change}
                      </span>
                      <span className="ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts */}
          <div ref={chartsRef} className="mb-8 grid gap-4 md:grid-cols-2">
            <Card data-chart>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <AreaChart data={revenueData} dataKey="value" color="hsl(var(--chart-1))" />
                </div>
              </CardContent>
            </Card>
            <Card data-chart>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>New user registrations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <BarChart data={userGrowthData} dataKey="value" color="hsl(var(--chart-2))" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>A list of recent user actions and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium">User</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity) => (
                      <tr key={activity.id} className="border-b transition-colors hover:bg-muted/50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Users className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-medium">{activity.user}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{activity.action}</td>
                        <td className="px-4 py-3 text-muted-foreground">{activity.time}</td>
                        <td className="px-4 py-3">
                          <Badge variant="secondary">Active</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

