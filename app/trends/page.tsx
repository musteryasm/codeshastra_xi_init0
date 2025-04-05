import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Download, Calendar, AlertTriangle } from "lucide-react"
import { LineChart } from "@/components/charts"

export default function TrendsPage() {
  const monthlyAnomalyData = [
    {
      name: "Jan",
      unauthorized: 20,
      tax: 15,
      pricing: 10,
      suspicious: 5,
    },
    {
      name: "Feb",
      unauthorized: 25,
      tax: 18,
      pricing: 12,
      suspicious: 8,
    },
    {
      name: "Mar",
      unauthorized: 30,
      tax: 22,
      pricing: 18,
      suspicious: 10,
    },
    {
      name: "Apr",
      unauthorized: 35,
      tax: 28,
      pricing: 22,
      suspicious: 15,
    },
  ]

  const severityTrendData = [
    {
      name: "Jan",
      high: 12,
      medium: 25,
      low: 13,
    },
    {
      name: "Feb",
      high: 18,
      medium: 30,
      low: 15,
    },
    {
      name: "Mar",
      high: 25,
      medium: 42,
      low: 23,
    },
    {
      name: "Apr",
      high: 42,
      medium: 98,
      low: 107,
    },
  ]

  const employeeTrendData = [
    {
      name: "Week 1",
      "John Smith": 3,
      "Maria Garcia": 2,
      "Robert Chen": 1,
      "Lisa Wong": 2,
    },
    {
      name: "Week 2",
      "John Smith": 4,
      "Maria Garcia": 2,
      "Robert Chen": 1,
      "Lisa Wong": 1,
    },
    {
      name: "Week 3",
      "John Smith": 5,
      "Maria Garcia": 3,
      "Robert Chen": 2,
      "Lisa Wong": 2,
    },
    {
      name: "Week 4",
      "John Smith": 3,
      "Maria Garcia": 1,
      "Robert Chen": 1,
      "Lisa Wong": 2,
    },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Trend Analysis" text="Analyze anomaly trends and patterns over time.">
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
            <TrendingUp className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.8%</div>
            <p className="text-xs text-muted-foreground">Anomaly detection rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Most Common Anomaly</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Unauthorized Discounts</div>
            <p className="text-xs text-muted-foreground">35 instances in April</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Fastest Growing Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Suspicious Transactions</div>
            <p className="text-xs text-muted-foreground">+50% month-over-month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">AI model performance</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="anomaly-trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="anomaly-trends">Anomaly Trends</TabsTrigger>
          <TabsTrigger value="severity-trends">Severity Trends</TabsTrigger>
          <TabsTrigger value="employee-trends">Employee Trends</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="anomaly-trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Anomaly Trends</CardTitle>
              <CardDescription>Anomaly detection trends by category over time</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart data={monthlyAnomalyData} />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Growth Rate by Type</CardTitle>
                <CardDescription>Month-over-month growth rate by anomaly type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="font-medium">Unauthorized Discounts</span>
                      </div>
                      <span className="font-bold">+16.7%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "16.7%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="font-medium">Tax Miscalculations</span>
                      </div>
                      <span className="font-bold">+27.3%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "27.3%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="font-medium">Pricing Modifications</span>
                      </div>
                      <span className="font-bold">+22.2%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "22.2%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="font-medium">Suspicious Transactions</span>
                      </div>
                      <span className="font-bold">+50.0%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "50.0%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Patterns</CardTitle>
                <CardDescription>Identified seasonal patterns in anomaly detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">End of Month Spike</h3>
                    <p className="text-sm text-muted-foreground">
                      Unauthorized discounts increase by 35% during the last week of each month, potentially related to
                      sales quotas.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Weekend Anomalies</h3>
                    <p className="text-sm text-muted-foreground">
                      Suspicious transactions are 28% more likely to occur on weekends when management supervision is
                      reduced.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Holiday Correlation</h3>
                    <p className="text-sm text-muted-foreground">
                      Tax miscalculations increase by 42% during holiday sales periods when transaction volume is
                      higher.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="severity-trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Severity Trends Over Time</CardTitle>
              <CardDescription>Monthly trends in anomaly severity levels</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart data={severityTrendData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Severity Growth Analysis</CardTitle>
              <CardDescription>Analysis of severity level trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">High Severity Growth</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>Month-over-Month Growth</span>
                    <span className="font-bold text-red-600">+68.0%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    High severity anomalies have shown the fastest growth rate, increasing from 25 in March to 42 in
                    April. This indicates a concerning trend that requires immediate attention.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Medium Severity Patterns</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>Month-over-Month Growth</span>
                    <span className="font-bold text-yellow-600">+133.3%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Medium severity anomalies have more than doubled from 42 in March to 98 in April. This significant
                    increase suggests systemic issues that need to be addressed through process improvements.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Low Severity Trends</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>Month-over-Month Growth</span>
                    <span className="font-bold text-green-600">+365.2%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Low severity anomalies have shown the most dramatic increase, growing from 23 in March to 107 in
                    April. This may be attributed to improved detection capabilities rather than an actual increase in
                    issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employee-trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Anomaly Trends</CardTitle>
              <CardDescription>Weekly anomaly trends by top employees</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart data={employeeTrendData} />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Employee Pattern Analysis</CardTitle>
                <CardDescription>Identified patterns in employee-related anomalies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">New Employee Correlation</h3>
                    <p className="text-sm text-muted-foreground">
                      Employees with less than 3 months of experience account for 45% of all anomalies, suggesting a
                      need for improved training.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Shift Pattern Correlation</h3>
                    <p className="text-sm text-muted-foreground">
                      Anomalies are 37% more likely to occur during evening shifts when supervision is reduced and
                      customer traffic is lower.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Workload Correlation</h3>
                    <p className="text-sm text-muted-foreground">
                      Employees handling more than 50 transactions per day show a 28% higher anomaly rate, indicating
                      potential fatigue or rushing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Employee Risk Trends</CardTitle>
                <CardDescription>Changes in employee risk levels over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">John Smith</h3>
                      <p className="text-xs text-muted-foreground">Risk trend: Increasing</p>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500 font-medium">+25%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Maria Garcia</h3>
                      <p className="text-xs text-muted-foreground">Risk trend: Stable</p>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-500 font-medium">+5%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Robert Chen</h3>
                      <p className="text-xs text-muted-foreground">Risk trend: Increasing</p>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500 font-medium">+15%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Lisa Wong</h3>
                      <p className="text-xs text-muted-foreground">Risk trend: Decreasing</p>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1 transform rotate-180" />
                      <span className="text-green-500 font-medium">-10%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Anomaly Predictions</CardTitle>
              <CardDescription>AI-powered predictions for future anomaly trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">May 2025 Forecast</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium">Predicted Anomalies</p>
                      <p className="text-2xl font-bold">285</p>
                      <p className="text-xs text-muted-foreground">+15.4% from April</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Predicted Financial Impact</p>
                      <p className="text-2xl font-bold">$28,750</p>
                      <p className="text-xs text-muted-foreground">+17.9% from April</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="font-medium">Unauthorized Discounts</span>
                      </div>
                      <span>42 predicted</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="font-medium">Tax Miscalculations</span>
                      </div>
                      <span>35 predicted</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="font-medium">Pricing Modifications</span>
                      </div>
                      <span>28 predicted</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="font-medium">Suspicious Transactions</span>
                      </div>
                      <span>20 predicted</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Risk Areas to Monitor</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Weekend Transactions</p>
                        <p className="text-sm text-muted-foreground">
                          AI predicts a 45% increase in suspicious transactions during weekends in May. Implement
                          additional verification steps.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">New Product Launches</p>
                        <p className="text-sm text-muted-foreground">
                          Pricing modifications are predicted to increase by 35% during the upcoming product launch.
                          Ensure pricing policies are clearly communicated.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">End-of-Month Sales</p>
                        <p className="text-sm text-muted-foreground">
                          Unauthorized discounts are predicted to spike by 50% during the last week of May. Implement
                          additional approval requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

