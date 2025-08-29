import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Settings as SettingsIcon, User, Bell, Lock, Database } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Profile Settings</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Dr. Sarah Johnson" 
                    className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    defaultValue="sarah.johnson@amrutam.com" 
                    className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input 
                    type="tel" 
                    defaultValue="+1 234-567-8900" 
                    className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Email Notifications', enabled: true },
                  { label: 'SMS Alerts', enabled: false },
                  { label: 'Appointment Reminders', enabled: true },
                  { label: 'System Updates', enabled: true },
                  { label: 'Marketing Communications', enabled: false }
                ].map((setting, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/30 rounded">
                    <span className="font-medium">{setting.label}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        defaultChecked={setting.enabled}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Security</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                  <input 
                    type="password" 
                    className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                  <input 
                    type="password" 
                    className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">System Preferences</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Language</label>
                  <select className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Timezone</label>
                  <select className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>EST (UTC-5)</option>
                    <option>PST (UTC-8)</option>
                    <option>GMT (UTC+0)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Date Format</label>
                  <select className="w-full p-3 border border-border/50 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;