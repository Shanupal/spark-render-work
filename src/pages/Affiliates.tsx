import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { HeartHandshake, Building, UserPlus, DollarSign } from "lucide-react";

const Affiliates = () => {
  return (
    <div className="min-h-screen bg-medical-bg flex">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Affiliate Partners</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Add New Partner
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Partners"
              value="12"
              icon={Building}
              trend="+2 new partnerships"
              trendUp={true}
            />
            <StatsCard
              title="Active Referrals"
              value="45"
              icon={UserPlus}
              trend="+8 this month"
              trendUp={true}
            />
            <StatsCard
              title="Partnership Value"
              value="$12,450"
              icon={DollarSign}
              trend="+15% growth"
              trendUp={true}
            />
            <StatsCard
              title="Success Rate"
              value="87%"
              icon={HeartHandshake}
              trend="Above industry avg"
              trendUp={true}
            />
          </div>
          
          <div className="bg-medical-stats rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Partner Organizations</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 p-4 bg-primary/5 rounded-lg font-medium text-foreground">
                <div>Organization</div>
                <div>Type</div>
                <div>Referrals</div>
                <div>Success Rate</div>
                <div>Revenue</div>
                <div>Actions</div>
              </div>
              {[
                { name: 'City General Hospital', type: 'Hospital', referrals: 23, rate: '92%', revenue: '$4,230' },
                { name: 'MedLab Diagnostics', type: 'Laboratory', referrals: 15, rate: '88%', revenue: '$2,890' },
                { name: 'PharmaCare Plus', type: 'Pharmacy', referrals: 34, rate: '95%', revenue: '$3,450' },
                { name: 'Wellness Clinic', type: 'Clinic', referrals: 12, rate: '85%', revenue: '$1,680' },
                { name: 'Rehab Center', type: 'Therapy', referrals: 8, rate: '90%', revenue: '$1,120' }
              ].map((partner, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 p-4 bg-white/50 rounded-lg border border-border/30">
                  <div className="font-medium">{partner.name}</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      partner.type === 'Hospital' ? 'bg-red-100 text-red-800' :
                      partner.type === 'Laboratory' ? 'bg-blue-100 text-blue-800' :
                      partner.type === 'Pharmacy' ? 'bg-green-100 text-green-800' :
                      partner.type === 'Clinic' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {partner.type}
                    </span>
                  </div>
                  <div>{partner.referrals}</div>
                  <div className="text-green-600 font-medium">{partner.rate}</div>
                  <div className="font-medium text-primary">{partner.revenue}</div>
                  <div className="space-x-2">
                    <button className="text-primary hover:underline text-sm">View</button>
                    <button className="text-primary hover:underline text-sm">Contact</button>
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

export default Affiliates;