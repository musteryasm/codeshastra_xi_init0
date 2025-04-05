"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, PieChart } from "@/components/charts"
import { AnomalyTable } from "@/components/anomaly-table"
import { RecentAnomalies } from "@/components/recent-anomalies"
import { SeverityDistribution } from "@/components/severity-distribution"
import { AnomalyTrends } from "@/components/anomaly-trends"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BarChart3, AlertTriangle, TrendingUp, DollarSign } from "lucide-react"
import AuditMaps from "./maps"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Sales Anomaly Dashboard"
        text="AI-powered auditing system for detecting and analyzing sales data anomalies."
      >
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Export Audit Report
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Run New Audit
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Anomalies</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Severity</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Financial Impact</CardTitle>
            <DollarSign className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,389</div>
            <p className="text-xs text-muted-foreground">Potential revenue at risk</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Audit Coverage</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.3%</div>
            <p className="text-xs text-muted-foreground">Of transactions analyzed</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
          <TabsTrigger value="severity">Severity Analysis</TabsTrigger>
          <TabsTrigger value="reports">Maps</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Anomaly Trends</CardTitle>
                <CardDescription>Monthly anomaly detection trends over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <AnomalyTrends />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Anomaly Distribution</CardTitle>
                <CardDescription>Breakdown by anomaly category</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: "Unauthorized Discounts", value: 35 },
                    { name: "Tax Miscalculations", value: 28 },
                    { name: "Pricing Modifications", value: 22 },
                    { name: "Suspicious Transactions", value: 15 },
                  ]}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Anomalies</CardTitle>
                <CardDescription>Latest detected anomalies</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentAnomalies />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Severity Distribution</CardTitle>
                <CardDescription>Anomalies by severity level</CardDescription>
              </CardHeader>
              <CardContent>
                <SeverityDistribution />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="anomalies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Anomaly Detection Results</CardTitle>
              <CardDescription>Comprehensive list of detected anomalies with context</CardDescription>
            </CardHeader>
            <CardContent>
              <AnomalyTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="severity" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Severity by Category</CardTitle>
                <CardDescription>Distribution of severity levels across anomaly categories</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "Unauthorized Discounts", high: 15, medium: 12, low: 8 },
                    { name: "Tax Miscalculations", high: 8, medium: 14, low: 6 },
                    { name: "Pricing Modifications", high: 10, medium: 8, low: 4 },
                    { name: "Suspicious Transactions", high: 9, medium: 4, low: 2 },
                  ]}
                />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>Financial impact by severity level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span>High Severity</span>
                    </div>
                    <span className="font-bold">$18,245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                      <span>Medium Severity</span>
                    </div>
                    <span className="font-bold">$5,128</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Low Severity</span>
                    </div>
                    <span className="font-bold">$1,016</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
            <Card>
              <AuditMaps></AuditMaps>
            </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

