import { Sidebar } from "@/components/dashboard/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <div>{children}</div>
    </main>
  );
};

export default DashboardLayout;