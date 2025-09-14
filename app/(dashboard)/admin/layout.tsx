export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="border-b-2">Dashboard Layout</h1>
      {children}
    </div>
  );
}
