import DashboardSidebar from "@/components/modules/dashboard/shared/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex border-r border-gray-200 h-screen">
      <DashboardSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
