import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { Pill, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const Prescriptions = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              New Prescription
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Prescriptions"
              value="489"
              icon={Pill}
              trend="+67 this month"
              trendUp={true}
            />
            <StatsCard
              title="Active"
              value="156"
              icon={Clock}
              trend="32% of total"
              trendUp={true}
            />
            <StatsCard
              title="Completed"
              value="298"
              icon={CheckCircle}
              trend="61% of total"
              trendUp={true}
            />
            <StatsCard
              title="Expiring Soon"
              value="35"
              icon={AlertTriangle}
              trend="Within 7 days"
              trendUp={false}
            />
          </div>
          
          <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Prescriptions</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-4 p-4 bg-primary/5 rounded-lg font-medium text-foreground">
                <div>Patient</div>
                <div>Medication</div>
                <div>Dosage</div>
                <div>Frequency</div>
                <div>Start Date</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="grid grid-cols-7 gap-4 p-4 bg-white/50 rounded-lg border border-border/30">
                  <div className="font-medium">Patient {i + 1}</div>
                  <div>
                    {i % 4 === 0 ? 'Amoxicillin' : 
                     i % 4 === 1 ? 'Ibuprofen' : 
                     i % 4 === 2 ? 'Metformin' : 'Lisinopril'}
                  </div>
                  <div>{250 + i * 50}mg</div>
                  <div>{i % 3 === 0 ? '3x daily' : i % 3 === 1 ? '2x daily' : '1x daily'}</div>
                  <div>Dec {10 + i}, 2024</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      i % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Expired'}
                    </span>
                  </div>
                  <div className="space-x-2">
                    <button className="text-primary hover:underline text-sm">View</button>
                    <button className="text-primary hover:underline text-sm">Refill</button>
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

export default Prescriptions;