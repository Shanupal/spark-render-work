import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";

const Patients = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Patients</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Add New Patient
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Patients"
              value="255"
              icon={Users}
              trend="+12 new this month"
              trendUp={true}
            />
            <StatsCard
              title="New Patients"
              value="18"
              icon={UserPlus}
              trend="+3 this week"
              trendUp={true}
            />
            <StatsCard
              title="Active Patients"
              value="198"
              icon={UserCheck}
              trend="77% of total"
              trendUp={true}
            />
            <StatsCard
              title="Inactive Patients"
              value="57"
              icon={UserX}
              trend="-2 from last month"
              trendUp={false}
            />
          </div>
          
          <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Patient List</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 p-4 bg-primary/5 rounded-lg font-medium text-foreground">
                <div>Name</div>
                <div>Age</div>
                <div>Phone</div>
                <div>Last Visit</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 p-4 bg-white/50 rounded-lg border border-border/30">
                  <div className="font-medium">Patient {i + 1}</div>
                  <div>{25 + i * 5}</div>
                  <div>+1 234-567-890{i}</div>
                  <div>Dec {20 + i}, 2024</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {i % 2 === 0 ? 'Active' : 'Pending'}
                    </span>
                  </div>
                  <div className="space-x-2">
                    <button className="text-primary hover:underline text-sm">View</button>
                    <button className="text-primary hover:underline text-sm">Edit</button>
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

export default Patients;