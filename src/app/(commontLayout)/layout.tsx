export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>navbar</p>
      {children}
      <p>footer</p>
    </div>
  );
}
