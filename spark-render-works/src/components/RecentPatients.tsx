import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentPatients = [
  {
    id: 1,
    name: "Sarah Johnson",
    time: "10:30 AM",
    status: "Completed",
    avatar: "/placeholder.svg",
    condition: "Follow-up"
  },
  {
    id: 2,
    name: "Michael Chen",
    time: "11:15 AM", 
    status: "In Progress",
    avatar: "/placeholder.svg",
    condition: "Check-up"
  },
  {
    id: 3,
    name: "Emma Davis",
    time: "2:00 PM",
    status: "Scheduled",
    avatar: "/placeholder.svg",
    condition: "Consultation"
  },
  {
    id: 4,
    name: "James Wilson",
    time: "3:30 PM",
    status: "Scheduled", 
    avatar: "/placeholder.svg",
    condition: "Treatment"
  }
];

export const RecentPatients = () => {
  return (
    <Card className="bg-medical-stats">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Patients</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPatients.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={patient.avatar} />
                <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{patient.name}</p>
                <p className="text-sm text-muted-foreground">{patient.condition}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {patient.time}
                </div>
                <Badge 
                  variant={
                    patient.status === "Completed" ? "secondary" :
                    patient.status === "In Progress" ? "default" : "outline"
                  }
                  className="mt-1"
                >
                  {patient.status}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};