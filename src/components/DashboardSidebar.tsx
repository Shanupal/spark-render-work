import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  HeartHandshake,
  Stethoscope,
  Pill,
  UserCheck,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Patients", path: "/patients" },
  { icon: Calendar, label: "Appointments", path: "/appointments" },
  { icon: Stethoscope, label: "Consultations", path: "/consultations" },
  { icon: FileText, label: "Medical Records", path: "/medical-records" },
  { icon: Pill, label: "Prescriptions", path: "/prescriptions" },
  { icon: UserCheck, label: "Staff", path: "/staff" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: HeartHandshake, label: "Affiliates", path: "/affiliates" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-medical-sidebar border-r border-border h-screen">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground">AMRUTAM</span>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={index}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-12 px-4",
                  isActive && "bg-primary/10 text-primary border border-primary/20"
                )}
                onClick={() => navigate(item.path)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};