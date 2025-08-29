import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { UserCheck, Users, Clock, Award } from "lucide-react";

const Staff = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Add Staff Member
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Staff"
              value="24"
              icon={Users}
              trend="+2 new hires"
              trendUp={true}
            />
            <StatsCard
              title="Active Today"
              value="18"
              icon={UserCheck}
              trend="75% attendance"
              trendUp={true}
            />
            <StatsCard
              title="On Leave"
              value="3"
              icon={Clock}
              trend="12.5% of total"
              trendUp={false}
            />
            <StatsCard
              title="Certifications"
              value="98%"
              icon={Award}
              trend="All up to date"
              trendUp={true}
            />
          </div>
          
          <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Staff Directory</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 p-4 bg-primary/5 rounded-lg font-medium text-foreground">
                <div>Name</div>
                <div>Role</div>
                <div>Department</div>
                <div>Shift</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 p-4 bg-white/50 rounded-lg border border-border/30">
                  <div className="font-medium">
                    Dr. {i % 2 === 0 ? 'Sarah' : 'John'} {['Smith', 'Johnson', 'Williams', 'Brown', 'Davis', 'Miller'][i]}
                  </div>
                  <div>
                    {i % 4 === 0 ? 'Doctor' : 
                     i % 4 === 1 ? 'Nurse' : 
                     i % 4 === 2 ? 'Technician' : 'Administrator'}
                  </div>
                  <div>
                    {i % 3 === 0 ? 'Cardiology' : 
                     i % 3 === 1 ? 'General' : 'Emergency'}
                  </div>
                  <div>{i % 2 === 0 ? 'Day (9-5)' : 'Night (5-1)'}</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      i % 4 === 0 ? 'bg-green-100 text-green-800' : 
                      i % 4 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      i % 4 === 2 ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {i % 4 === 0 ? 'Active' : i % 4 === 1 ? 'Break' : i % 4 === 2 ? 'Off Duty' : 'Available'}
                    </span>
                  </div>
                  <div className="space-x-2">
                    <button className="text-primary hover:underline text-sm">View</button>
                    <button className="text-primary hover:underline text-sm">Schedule</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Staff;