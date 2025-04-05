"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, AlertTriangle, FileText, Settings, Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react"

const items = [
  {
    title: "Overview",
    href: "/",
    icon: BarChart3,
  },
  {
    title: "Anomalies",
    href: "/anomalies",
    icon: AlertTriangle,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: ShoppingCart,
  },
  {
    title: "Employees",
    href: "/employees",
    icon: Users,
  },
  {
    title: "Financial Impact",
    href: "/financial",
    icon: DollarSign,
  },
  {
    title: "Trends",
    href: "/trends",
    icon: TrendingUp,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function SideNav() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-gray-50/40 md:block w-64">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Sales Audit</h2>
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900",
                  pathname === item.href ? "bg-gray-100 text-gray-900" : "text-gray-500",
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

