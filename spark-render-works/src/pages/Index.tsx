import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { RecentPatients } from "@/components/RecentPatients";
import { Users, Calendar, DollarSign, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Patients"
              value="255"
              icon={Users}
              trend="+12% from last month"
              trendUp={true}
            />
            <StatsCard
              title="Today's Appointments"
              value="55"
              icon={Calendar}
              trend="+5% from yesterday"
              trendUp={true}
            />
            <StatsCard
              title="Monthly Revenue"
              value="$5,540"
              icon={DollarSign}
              trend="+18% from last month"
              trendUp={true}
            />
            <StatsCard
              title="Active Treatments"
              value="5"
              icon={Activity}
              trend="2 completing this week"
              trendUp={true}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentPatients />
            
            <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary/20">
                  <div className="text-primary font-medium">Add New Patient</div>
                  <div className="text-sm text-muted-foreground mt-1">Register a new patient</div>
                </button>
                <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary/20">
                  <div className="text-primary font-medium">Schedule Appointment</div>
                  <div className="text-sm text-muted-foreground mt-1">Book new appointment</div>
                </button>
                <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary/20">
                  <div className="text-primary font-medium">View Reports</div>
                  <div className="text-sm text-muted-foreground mt-1">Medical reports & analytics</div>
                </button>
                <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary/20">
                  <div className="text-primary font-medium">Manage Prescriptions</div>
                  <div className="text-sm text-muted-foreground mt-1">Create & manage prescriptions</div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
