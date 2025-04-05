"use client"

import { LineChart } from "@/components/charts"

const trendData = [
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

export function AnomalyTrends() {
  return <LineChart data={trendData} />
}

