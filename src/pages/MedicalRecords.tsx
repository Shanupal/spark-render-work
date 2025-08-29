import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { FileText, Upload, Archive, Search } from "lucide-react";

const MedicalRecords = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Medical Records</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Upload Record
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Records"
              value="1,245"
              icon={FileText}
              trend="+45 this month"
              trendUp={true}
            />
            <StatsCard
              title="New Uploads"
              value="23"
              icon={Upload}
              trend="+8 this week"
              trendUp={true}
            />
            <StatsCard
              title="Archived"
              value="156"
              icon={Archive}
              trend="12.5% of total"
              trendUp={false}
            />
            <StatsCard
              title="Pending Review"
              value="12"
              icon={Search}
              trend="Priority: 3"
              trendUp={false}
            />
          </div>
          
          <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Records</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 p-4 bg-primary/5 rounded-lg font-medium text-foreground">
                <div>Patient</div>
                <div>Record Type</div>
                <div>Date Created</div>
                <div>File Size</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 p-4 bg-white/50 rounded-lg border border-border/30">
                  <div className="font-medium">Patient {i + 1}</div>
                  <div>
                    {i % 4 === 0 ? 'Lab Results' : 
                     i % 4 === 1 ? 'X-Ray' : 
                     i % 4 === 2 ? 'Prescription' : 'Consultation Notes'}
                  </div>
                  <div>Dec {15 + i}, 2024</div>
                  <div>{1.2 + i * 0.3} MB</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      i % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {i % 3 === 0 ? 'Approved' : i % 3 === 1 ? 'Pending' : 'Reviewed'}
                    </span>
                  </div>
                  <div className="space-x-2">
                    <button className="text-primary hover:underline text-sm">View</button>
                    <button className="text-primary hover:underline text-sm">Download</button>
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

export default MedicalRecords;