import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnomalyTable } from "@/components/anomaly-table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Download, Filter } from "lucide-react"

export default function AnomaliesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Anomaly Detection" text="Comprehensive view of all detected anomalies in sales data.">
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <AlertTriangle className="mr-2 h-4 w-4" />
            Review Flagged
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unauthorized Discounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tax Miscalculations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">-3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Suspicious Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Anomalies</CardTitle>
          <CardDescription>Complete list of detected anomalies with context and severity</CardDescription>
        </CardHeader>
        <CardContent>
          <AnomalyTable />
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

