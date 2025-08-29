import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { BarChart3, TrendingUp, DollarSign, Activity } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Generate Report
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Patient Growth"
              value="+18%"
              icon={TrendingUp}
              trend="vs last quarter"
              trendUp={true}
            />
            <StatsCard
              title="Revenue Growth"
              value="+24%"
              icon={DollarSign}
              trend="$45,230 this month"
              trendUp={true}
            />
            <StatsCard
              title="Appointment Rate"
              value="94%"
              icon={BarChart3}
              trend="+3% from last month"
              trendUp={true}
            />
            <StatsCard
              title="Patient Satisfaction"
              value="4.8/5"
              icon={Activity}
              trend="Based on 156 reviews"
              trendUp={true}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Monthly Performance</h3>
              <div className="space-y-4">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                  <div key={month} className="flex items-center justify-between p-3 bg-white/30 rounded">
                    <span className="font-medium">{month} 2024</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{150 + i * 20} patients</span>
                      <span className="text-sm font-medium text-primary">${(3000 + i * 500).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Top Treatments</h3>
              <div className="space-y-4">
                {[
                  { name: 'General Consultation', count: 89, percentage: 35 },
                  { name: 'Preventive Care', count: 67, percentage: 28 },
                  { name: 'Chronic Disease Management', count: 45, percentage: 18 },
                  { name: 'Mental Health', count: 32, percentage: 13 },
                  { name: 'Emergency Care', count: 15, percentage: 6 }
                ].map((treatment, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/30 rounded">
                    <div>
                      <div className="font-medium">{treatment.name}</div>
                      <div className="text-sm text-muted-foreground">{treatment.count} cases</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-primary">{treatment.percentage}%</div>
                      <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${treatment.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;