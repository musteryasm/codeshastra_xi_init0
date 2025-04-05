import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, Download, AlertTriangle } from "lucide-react"
import { BarChart } from "@/components/charts"

const employees = [
  {
    id: "EMP-001",
    name: "John Smith",
    position: "Sales Associate",
    transactions: 423,
    anomalies: 15,
    riskScore: "high",
  },
  {
    id: "EMP-002",
    name: "Maria Garcia",
    position: "Sales Associate",
    transactions: 387,
    anomalies: 8,
    riskScore: "medium",
  },
  {
    id: "EMP-003",
    name: "Robert Chen",
    position: "Sales Manager",
    transactions: 256,
    anomalies: 5,
    riskScore: "low",
  },
  {
    id: "EMP-004",
    name: "Lisa Wong",
    position: "Sales Associate",
    transactions: 312,
    anomalies: 7,
    riskScore: "medium",
  },
  {
    id: "EMP-005",
    name: "Michael Johnson",
    position: "Sales Associate",
    transactions: 298,
    anomalies: 12,
    riskScore: "high",
  },
  {
    id: "EMP-006",
    name: "Emily Davis",
    position: "Sales Manager",
    transactions: 187,
    anomalies: 3,
    riskScore: "low",
  },
  {
    id: "EMP-007",
    name: "David Wilson",
    position: "Sales Associate",
    transactions: 342,
    anomalies: 9,
    riskScore: "medium",
  },
  {
    id: "EMP-008",
    name: "Sarah Brown",
    position: "Sales Associate",
    transactions: 276,
    anomalies: 4,
    riskScore: "low",
  },
]

export default function EmployeesPage() {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const topEmployeeData = [
    { name: "John Smith", anomalies: 15 },
    { name: "Michael Johnson", anomalies: 12 },
    { name: "David Wilson", anomalies: 9 },
    { name: "Maria Garcia", anomalies: 8 },
    { name: "Lisa Wong", anomalies: 7 },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Employee Analysis" text="Monitor employee sales patterns and anomalies.">
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <AlertTriangle className="mr-2 h-4 w-4" />
            View High Risk
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Active sales personnel</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Risk Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">20.8% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Anomalies per Employee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.8</div>
            <p className="text-xs text-muted-foreground">+2.3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Training Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Up-to-date on training</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7 mb-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Top Employees by Anomalies</CardTitle>
            <CardDescription>Employees with the highest number of detected anomalies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <BarChart data={topEmployeeData.map((emp) => ({ name: emp.name, anomalies: emp.anomalies }))} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Risk Distribution</CardTitle>
            <CardDescription>Employee risk level breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="font-medium">High Risk</span>
                  </div>
                  <span>5 (20.8%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "20.8%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="font-medium">Medium Risk</span>
                  </div>
                  <span>8 (33.3%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "33.3%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="font-medium">Low Risk</span>
                  </div>
                  <span>11 (45.9%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "45.9%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
          <CardDescription>All employees with anomaly statistics and risk scores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Search employees..." className="w-[300px]" />
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Anomalies</TableHead>
                    <TableHead>Anomaly Rate</TableHead>
                    <TableHead>Risk Score</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.transactions}</TableCell>
                      <TableCell>{employee.anomalies}</TableCell>
                      <TableCell>{((employee.anomalies / employee.transactions) * 100).toFixed(2)}%</TableCell>
                      <TableCell>
                        <Badge className={getRiskColor(employee.riskScore)}>
                          {employee.riskScore.charAt(0).toUpperCase() + employee.riskScore.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>View Transactions</DropdownMenuItem>
                            <DropdownMenuItem>View Anomalies</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Export Data</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

