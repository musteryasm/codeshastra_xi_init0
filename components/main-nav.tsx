"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AlertTriangle, BarChart3, Settings, Bell } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-6 mr-6">
        <Link href="/" className="font-bold text-xl flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
          <span>AnomalyGuard</span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/anomalies"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/anomalies" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Anomalies
          </Link>
          <Link
            href="/reports"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/reports" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Reports
          </Link>
          <Link
            href="/settings"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/settings" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Settings
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="ml-2">
          <BarChart3 className="mr-2 h-4 w-4" />
          Run Audit
        </Button>
      </div>
    </div>
  )
}

