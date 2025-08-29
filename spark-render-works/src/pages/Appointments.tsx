import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";

const Appointments = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Schedule Appointment
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Today's Appointments"
              value="55"
              icon={Calendar}
              trend="+5 from yesterday"
              trendUp={true}
            />
            <StatsCard
              title="Pending"
              value="12"
              icon={Clock}
              trend="3 urgent"
              trendUp={false}
            />
            <StatsCard
              title="Completed"
              value="38"
              icon={CheckCircle}
              trend="89% completion rate"
              trendUp={true}
            />
            <StatsCard
              title="Cancelled"
              value="5"
              icon={XCircle}
              trend="-2 from yesterday"
              trendUp={true}
            />
          </div>
          
          <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Today's Schedule</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-4 p-4 bg-primary/5 rounded-lg font-medium text-foreground">
                <div>Time</div>
                <div>Patient</div>
                <div>Type</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 p-4 bg-white/50 rounded-lg border border-border/30">
                  <div className="font-medium">{9 + i}:00 AM</div>
                  <div>Patient {i + 1}</div>
                  <div>{i % 3 === 0 ? 'Consultation' : i % 3 === 1 ? 'Follow-up' : 'Check-up'}</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      i % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'Pending' : 'Confirmed'}
                    </span>
                  </div>
                  <div className="space-x-2">
                    <button className="text-primary hover:underline text-sm">View</button>
                    <button className="text-primary hover:underline text-sm">Reschedule</button>
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

export default Appointments;