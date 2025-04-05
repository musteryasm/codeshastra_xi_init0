"use client"

import { Progress } from "@/components/ui/progress"

export function SeverityDistribution() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="font-medium">High Severity</span>
          </div>
          <span>42 (17%)</span>
        </div>
        <Progress value={17} className="h-2 bg-gray-100" indicatorClassName="bg-red-500" />
        <p className="text-xs text-muted-foreground">Critical issues requiring immediate attention</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <span className="font-medium">Medium Severity</span>
          </div>
          <span>98 (40%)</span>
        </div>
        <Progress value={40} className="h-2 bg-gray-100" indicatorClassName="bg-yellow-500" />
        <p className="text-xs text-muted-foreground">Significant issues requiring attention within 48 hours</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="font-medium">Low Severity</span>
          </div>
          <span>107 (43%)</span>
        </div>
        <Progress value={43} className="h-2 bg-gray-100" indicatorClassName="bg-green-500" />
        <p className="text-xs text-muted-foreground">Minor issues that should be addressed in regular review cycles</p>
      </div>
    </div>
  )
}

