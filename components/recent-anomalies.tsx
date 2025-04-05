import { AlertTriangle, DollarSign, Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const recentAnomalies = [
  {
    id: "ANM-008",
    type: "Suspicious Transaction",
    time: "2 hours ago",
    description: "Transaction processed outside business hours",
    severity: "high",
  },
  {
    id: "ANM-007",
    type: "Pricing Modification",
    time: "5 hours ago",
    description: "Manual price override without manager approval",
    severity: "low",
  },
  {
    id: "ANM-006",
    type: "Unauthorized Discount",
    time: "8 hours ago",
    description: "Employee discount applied to non-eligible customer",
    severity: "medium",
  },
  {
    id: "ANM-005",
    type: "Tax Miscalculation",
    time: "12 hours ago",
    description: "Tax exempt status applied without verification",
    severity: "medium",
  },
]

export function RecentAnomalies() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Suspicious Transaction":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "Pricing Modification":
        return <DollarSign className="h-4 w-4 text-blue-500" />
      case "Unauthorized Discount":
        return <User className="h-4 w-4 text-purple-500" />
      case "Tax Miscalculation":
        return <Calendar className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

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
      {recentAnomalies.map((anomaly) => (
        <div key={anomaly.id} className="flex items-start space-x-4 p-3 rounded-lg border">
          <div className="mt-0.5">{getIcon(anomaly.type)}</div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{anomaly.type}</p>
              <Badge className={getSeverityColor(anomaly.severity)}>
                {anomaly.severity.charAt(0).toUpperCase() + anomaly.severity.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{anomaly.description}</p>
            <p className="text-xs text-muted-foreground">{anomaly.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

