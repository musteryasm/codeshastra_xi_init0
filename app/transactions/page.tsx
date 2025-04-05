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
import { ShoppingCart, Search, Filter, MoreHorizontal, Download, Calendar } from "lucide-react"

const transactions = [
  {
    id: "TRX-78945",
    date: "2025-04-01",
    employee: "John Smith",
    customer: "Sarah Johnson",
    items: 5,
    total: "$1,245.78",
    status: "completed",
    anomalies: 2,
  },
  {
    id: "TRX-78946",
    date: "2025-04-01",
    employee: "Maria Garcia",
    customer: "David Wilson",
    items: 3,
    total: "$432.45",
    status: "completed",
    anomalies: 1,
  },
  {
    id: "TRX-78950",
    date: "2025-04-02",
    employee: "Robert Chen",
    customer: "Emily Brown",
    items: 7,
    total: "$978.99",
    status: "completed",
    anomalies: 1,
  },
  {
    id: "TRX-78955",
    date: "2025-04-02",
    employee: "John Smith",
    customer: "Michael Davis",
    items: 2,
    total: "$523.67",
    status: "voided",
    anomalies: 1,
  },
  {
    id: "TRX-78960",
    date: "2025-04-03",
    employee: "Lisa Wong",
    customer: "James Miller",
    items: 4,
    total: "$687.22",
    status: "completed",
    anomalies: 1,
  },
  {
    id: "TRX-78965",
    date: "2025-04-03",
    employee: "Maria Garcia",
    customer: "Jennifer Taylor",
    items: 6,
    total: "$845.99",
    status: "completed",
    anomalies: 1,
  },
  {
    id: "TRX-78970",
    date: "2025-04-04",
    employee: "Robert Chen",
    customer: "William Anderson",
    items: 1,
    total: "$112.50",
    status: "completed",
    anomalies: 1,
  },
  {
    id: "TRX-78975",
    date: "2025-04-04",
    employee: "John Smith",
    customer: "Elizabeth Thomas",
    items: 8,
    total: "$1,345.00",
    status: "completed",
    anomalies: 1,
  },
]

export default function TransactionsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "voided":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Transactions" text="View and analyze all sales transactions.">
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
            <ShoppingCart className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$745.32</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Voided Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">-8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Flagged Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">19.8% of total</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction List</CardTitle>
          <CardDescription>View all transactions with anomaly indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Search transactions..." className="w-[300px]" />
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
                    <TableHead>Date</TableHead>
                    <TableHead>Employee</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Anomalies</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.employee}</TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell>{transaction.items}</TableCell>
                      <TableCell>{transaction.total}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {transaction.anomalies > 0 ? (
                          <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">
                            {transaction.anomalies} {transaction.anomalies === 1 ? "issue" : "issues"}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                            None
                          </Badge>
                        )}
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
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>View Anomalies</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Export</DropdownMenuItem>
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

