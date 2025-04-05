import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, RefreshCw, Database, Shield, Users } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Configure your anomaly detection system.">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="detection">Detection Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure general system settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Acme Corporation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                    <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="mm-dd-yyyy">
                  <SelectTrigger id="date-format">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                    <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the dashboard</p>
                </div>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save General Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>View system information and status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Version</p>
                  <p className="text-sm text-muted-foreground">v2.5.0</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Last Updated</p>
                  <p className="text-sm text-muted-foreground">April 3, 2025</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Database Status</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-sm text-muted-foreground">Connected</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">AI Model Status</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-sm text-muted-foreground">Operational</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Check for Updates
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="detection" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Anomaly Detection Settings</CardTitle>
              <CardDescription>Configure anomaly detection parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sensitivity">Detection Sensitivity</Label>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={1} />
                <p className="text-sm text-muted-foreground">
                  Higher sensitivity detects more anomalies but may increase false positives
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="scan-frequency">Scan Frequency</Label>
                <Select defaultValue="hourly">
                  <SelectTrigger id="scan-frequency">
                    <SelectValue placeholder="Select scan frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Anomaly Types to Monitor</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="unauthorized-discounts" defaultChecked />
                    <Label htmlFor="unauthorized-discounts">Unauthorized Discounts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="tax-miscalculations" defaultChecked />
                    <Label htmlFor="tax-miscalculations">Tax Miscalculations</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="pricing-modifications" defaultChecked />
                    <Label htmlFor="pricing-modifications">Pricing Modifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="suspicious-transactions" defaultChecked />
                    <Label htmlFor="suspicious-transactions">Suspicious Transactions</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="severity-threshold">Severity Threshold</Label>
                <Select defaultValue="low">
                  <SelectTrigger id="severity-threshold">
                    <SelectValue placeholder="Select severity threshold" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Only</SelectItem>
                    <SelectItem value="medium">Medium and Above</SelectItem>
                    <SelectItem value="low">All Severities</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Only flag anomalies at or above the selected severity level
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Detection Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Model Configuration</CardTitle>
              <CardDescription>Configure AI model parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="model-type">AI Model Type</Label>
                <Select defaultValue="advanced">
                  <SelectTrigger id="model-type">
                    <SelectValue placeholder="Select model type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (Lower resource usage)</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="advanced">Advanced (Higher accuracy)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="learning-rate">Learning Rate</Label>
                  <span className="text-sm text-muted-foreground">0.05</span>
                </div>
                <Slider defaultValue={[5]} max={10} step={1} />
                <p className="text-sm text-muted-foreground">
                  Controls how quickly the model adapts to new patterns (0.01 to 0.1)
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="adaptive-learning">Adaptive Learning</Label>
                  <p className="text-sm text-muted-foreground">Allow the model to continuously learn from new data</p>
                </div>
                <Switch id="adaptive-learning" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save AI Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Notification Channels</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="email-notifications" defaultChecked />
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="sms-notifications" />
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="slack-notifications" defaultChecked />
                    <Label htmlFor="slack-notifications">Slack Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="in-app-notifications" defaultChecked />
                    <Label htmlFor="in-app-notifications">In-App Notifications</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Notification Triggers</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="high-severity" defaultChecked />
                    <Label htmlFor="high-severity">High Severity Anomalies</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="medium-severity" defaultChecked />
                    <Label htmlFor="medium-severity">Medium Severity Anomalies</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="low-severity" />
                    <Label htmlFor="low-severity">Low Severity Anomalies</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="system-updates" defaultChecked />
                    <Label htmlFor="system-updates">System Updates</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-recipients">Email Recipients</Label>
                <Input id="email-recipients" defaultValue="admin@example.com, finance@example.com" />
                <p className="text-sm text-muted-foreground">Comma-separated list of email addresses</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notification-frequency">Notification Frequency</Label>
                <Select defaultValue="realtime">
                  <SelectTrigger id="notification-frequency">
                    <SelectValue placeholder="Select notification frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="hourly">Hourly Digest</SelectItem>
                    <SelectItem value="daily">Daily Digest</SelectItem>
                    <SelectItem value="weekly">Weekly Digest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Integrations</CardTitle>
              <CardDescription>Configure integrations with external systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Database className="h-8 w-8 mr-4 text-blue-500" />
                  <div>
                    <h3 className="font-medium">POS System</h3>
                    <p className="text-sm text-muted-foreground">Connected to RetailPro v4.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-muted-foreground mr-4">Connected</span>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Database className="h-8 w-8 mr-4 text-purple-500" />
                  <div>
                    <h3 className="font-medium">ERP System</h3>
                    <p className="text-sm text-muted-foreground">Connected to SAP Business One</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-muted-foreground mr-4">Connected</span>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Database className="h-8 w-8 mr-4 text-gray-500" />
                  <div>
                    <h3 className="font-medium">CRM System</h3>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button size="sm">Connect</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Database className="h-8 w-8 mr-4 text-gray-500" />
                  <div>
                    <h3 className="font-medium">Accounting Software</h3>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button size="sm">Connect</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Connections
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>Configure API access for external systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex space-x-2">
                  <Input id="api-key" type="password" value="••••••••••••••••••••••••••••••" readOnly />
                  <Button variant="outline">Regenerate</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>API Access Control</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="read-access" defaultChecked />
                    <Label htmlFor="read-access">Read Access</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="write-access" />
                    <Label htmlFor="write-access">Write Access</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="admin-access" />
                    <Label htmlFor="admin-access">Admin Access</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" defaultValue="https://example.com/webhook/anomaly" />
                <p className="text-sm text-muted-foreground">URL to receive anomaly detection webhooks</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save API Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user access and permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge className="mr-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Admin</Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">jane.smith@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge className="mr-4 bg-green-100 text-green-800 hover:bg-green-200">Analyst</Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Robert Johnson</h3>
                    <p className="text-sm text-muted-foreground">robert.johnson@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge className="mr-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Manager</Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Sarah Williams</h3>
                    <p className="text-sm text-muted-foreground">sarah.williams@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge className="mr-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Viewer</Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security settings for the system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for all admin users</p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                </div>
                <Switch id="session-timeout" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeout-duration">Timeout Duration (minutes)</Label>
                <Input id="timeout-duration" type="number" defaultValue="30" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="ip-restriction">IP Restriction</Label>
                  <p className="text-sm text-muted-foreground">Restrict access to specific IP addresses</p>
                </div>
                <Switch id="ip-restriction" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Shield className="mr-2 h-4 w-4" />
                Save Security Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

