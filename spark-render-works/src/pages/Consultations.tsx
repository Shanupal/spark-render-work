import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { Stethoscope, Video, Phone, MessageCircle } from "lucide-react";

const Consultations = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Consultations</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              New Consultation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Consultations"
              value="89"
              icon={Stethoscope}
              trend="+15 this week"
              trendUp={true}
            />
            <StatsCard
              title="Video Calls"
              value="34"
              icon={Video}
              trend="38% of total"
              trendUp={true}
            />
            <StatsCard
              title="Phone Calls"
              value="28"
              icon={Phone}
              trend="31% of total"
              trendUp={false}
            />
            <StatsCard
              title="In-Person"
              value="27"
              icon={MessageCircle}
              trend="30% of total"
              trendUp={true}
            />
          </div>
          
          <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Consultations</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 p-4 bg-primary/5 rounded-lg font-medium text-foreground">
                <div>Patient</div>
                <div>Date</div>
                <div>Type</div>
                <div>Duration</div>
                <div>Diagnosis</div>
                <div>Actions</div>
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 p-4 bg-white/50 rounded-lg border border-border/30">
                  <div className="font-medium">Patient {i + 1}</div>
                  <div>Dec {18 + i}, 2024</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      i % 3 === 0 ? 'bg-blue-100 text-blue-800' : 
                      i % 3 === 1 ? 'bg-green-100 text-green-800' : 
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {i % 3 === 0 ? 'Video' : i % 3 === 1 ? 'Phone' : 'In-Person'}
                    </span>
                  </div>
                  <div>{20 + i * 5} min</div>
                  <div className="text-sm text-muted-foreground">
                    {i % 2 === 0 ? 'Routine Check-up' : 'Follow-up Treatment'}
                  </div>
                  <div className="space-x-2">
                    <button className="text-primary hover:underline text-sm">View</button>
                    <button className="text-primary hover:underline text-sm">Notes</button>
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

export default Consultations;