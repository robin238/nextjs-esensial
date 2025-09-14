export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="border-b-2">Admin Layout</h1>
      {children}
    </div>
  );
}
