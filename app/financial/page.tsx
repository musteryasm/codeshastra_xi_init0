import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Download, Calendar } from "lucide-react"
import { LineChart, PieChart } from "@/components/charts"

export default function FinancialImpactPage() {
  const anomalyImpactData = [
    {
      name: "Jan",
      unauthorized: 5420,
      tax: 3250,
      pricing: 4120,
      suspicious: 7890,
    },
    {
      name: "Feb",
      unauthorized: 6120,
      tax: 3780,
      pricing: 3950,
      suspicious: 8450,
    },
    {
      name: "Mar",
      unauthorized: 7340,
      tax: 4220,
      pricing: 5180,
      suspicious: 9120,
    },
    {
      name: "Apr",
      unauthorized: 8245,
      tax: 5128,
      pricing: 6780,
      suspicious: 10235,
    },
  ]

  const impactByTypeData = [
    { name: "Unauthorized Discounts", value: 8245 },
    { name: "Tax Miscalculations", value: 5128 },
    { name: "Pricing Modifications", value: 6780 },
    { name: "Suspicious Transactions", value: 10235 },
  ]

  const impactBySeverityData = [
    { name: "High", value: 18245 },
    { name: "Medium", value: 5128 },
    { name: "Low", value: 1016 },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Financial Impact" text="Analyze the financial impact of detected anomalies.">
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <DollarSign className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Financial Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,389</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Severity Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,245</div>
            <p className="text-xs text-muted-foreground">74.8% of total impact</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Impact per Anomaly</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$98.74</div>
            <p className="text-xs text-muted-foreground">Based on 247 anomalies</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recovered Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,752</div>
            <p className="text-xs text-muted-foreground">35.9% recovery rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="by-type">By Anomaly Type</TabsTrigger>
          <TabsTrigger value="by-severity">By Severity</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Financial Impact Trends</CardTitle>
                <CardDescription>Monthly financial impact by anomaly type</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart data={anomalyImpactData} />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Impact Distribution</CardTitle>
                <CardDescription>Financial impact by anomaly type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart data={impactByTypeData} />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Impact Summary</CardTitle>
              <CardDescription>Detailed breakdown of financial impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 border rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="font-medium">Unauthorized Discounts</span>
                    </div>
                    <div className="text-2xl font-bold">$8,245</div>
                    <p className="text-xs text-muted-foreground">35 anomalies detected</p>
                  </div>

                  <div className="space-y-2 border rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="font-medium">Tax Miscalculations</span>
                    </div>
                    <div className="text-2xl font-bold">$5,128</div>
                    <p className="text-xs text-muted-foreground">28 anomalies detected</p>
                  </div>

                  <div className="space-y-2 border rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="font-medium">Pricing Modifications</span>
                    </div>
                    <div className="text-2xl font-bold">$6,780</div>
                    <p className="text-xs text-muted-foreground">22 anomalies detected</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 border rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="font-medium">Suspicious Transactions</span>
                    </div>
                    <div className="text-2xl font-bold">$10,235</div>
                    <p className="text-xs text-muted-foreground">15 anomalies detected</p>
                  </div>

                  <div className="space-y-2 border rounded-lg p-4 col-span-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                      <span className="font-medium">Recovery Potential</span>
                    </div>
                    <div className="text-2xl font-bold">$15,637</div>
                    <p className="text-xs text-muted-foreground">64.1% of total impact potentially recoverable</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-type" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Impact by Anomaly Type</CardTitle>
              <CardDescription>Detailed breakdown of financial impact by anomaly category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <PieChart data={impactByTypeData} />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="font-medium">Unauthorized Discounts</span>
                      </div>
                      <span className="font-bold">$8,245</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "33.8%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">33.8% of total impact</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="font-medium">Tax Miscalculations</span>
                      </div>
                      <span className="font-bold">$5,128</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "21.0%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">21.0% of total impact</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="font-medium">Pricing Modifications</span>
                      </div>
                      <span className="font-bold">$6,780</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "27.8%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">27.8% of total impact</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="font-medium">Suspicious Transactions</span>
                      </div>
                      <span className="font-bold">$10,235</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "42.0%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">42.0% of total impact</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-severity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Impact by Severity Level</CardTitle>
              <CardDescription>Financial impact breakdown by anomaly severity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <PieChart data={impactBySeverityData} />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="font-medium">High Severity</span>
                      </div>
                      <span className="font-bold">$18,245</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "74.8%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">74.8% of total impact</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="font-medium">Medium Severity</span>
                      </div>
                      <span className="font-bold">$5,128</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "21.0%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">21.0% of total impact</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="font-medium">Low Severity</span>
                      </div>
                      <span className="font-bold">$1,016</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "4.2%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">4.2% of total impact</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Impact Trends</CardTitle>
              <CardDescription>Monthly financial impact trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart data={anomalyImpactData} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

