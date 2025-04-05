"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Search, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const mockAnomalies = [
  {
    id: "ANM-001",
    transactionId: "TRX-78945",
    date: "2025-04-01",
    type: "Unauthorized Discount",
    description: "Discount applied exceeds authorized limit (35% vs 20%)",
    severity: "high",
    impact: "$245.78",
  },
  {
    id: "ANM-002",
    transactionId: "TRX-78946",
    date: "2025-04-01",
    type: "Tax Miscalculation",
    description: "Sales tax calculated at 5% instead of 8.25%",
    severity: "medium",
    impact: "$32.45",
  },
  {
    id: "ANM-003",
    transactionId: "TRX-78950",
    date: "2025-04-02",
    type: "Pricing Modification",
    description: "Item price manually adjusted below minimum threshold",
    severity: "high",
    impact: "$178.99",
  },
  {
    id: "ANM-004",
    transactionId: "TRX-78955",
    date: "2025-04-02",
    type: "Suspicious Transaction",
    description: "Multiple voided transactions by same employee",
    severity: "high",
    impact: "$523.67",
  },
  {
    id: "ANM-005",
    transactionId: "TRX-78960",
    date: "2025-04-03",
    type: "Tax Miscalculation",
    description: "Tax exempt status applied without verification",
    severity: "medium",
    impact: "$87.22",
  },
  {
    id: "ANM-006",
    transactionId: "TRX-78965",
    date: "2025-04-03",
    type: "Unauthorized Discount",
    description: "Employee discount applied to non-eligible customer",
    severity: "medium",
    impact: "$45.99",
  },
  {
    id: "ANM-007",
    transactionId: "TRX-78970",
    date: "2025-04-04",
    type: "Pricing Modification",
    description: "Manual price override without manager approval",
    severity: "low",
    impact: "$12.50",
  },
  {
    id: "ANM-008",
    transactionId: "TRX-78975",
    date: "2025-04-04",
    type: "Suspicious Transaction",
    description: "Transaction processed outside business hours",
    severity: "high",
    impact: "$345.00",
  },
]

export function AnomalyTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAnomalies = mockAnomalies.filter(
    (anomaly) =>
      anomaly.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anomaly.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anomaly.transactionId.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search anomalies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[300px]"
          />
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
              <TableHead>Transaction</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="max-w-[300px]">Description</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAnomalies.map((anomaly) => (
              <TableRow key={anomaly.id}>
                <TableCell className="font-medium">{anomaly.id}</TableCell>
                <TableCell>{anomaly.transactionId}</TableCell>
                <TableCell>{anomaly.date}</TableCell>
                <TableCell>{anomaly.type}</TableCell>
                <TableCell className="max-w-[300px] truncate">{anomaly.description}</TableCell>
                <TableCell>
                  <Badge className={getSeverityColor(anomaly.severity)}>
                    {anomaly.severity.charAt(0).toUpperCase() + anomaly.severity.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{anomaly.impact}</TableCell>
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
                      <DropdownMenuItem>Mark as Reviewed</DropdownMenuItem>
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
  )
}

