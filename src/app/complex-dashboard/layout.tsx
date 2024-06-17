
export default function ComplexdashboardLayout({
  children,
  userAnalytics,
  notification,
  revenueMatrix,
}: Readonly<{
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  notification: React.ReactNode;
  revenueMatrix: React.ReactNode;
}>) {
  return (
    <>
      <div> {children}</div>
      <div className="flex flex-row ">
        <div className="basis-1/2">{userAnalytics}</div>
        <div className="basis-1/2 flex flex-col ">
          <div>{notification}</div>
          <div>{revenueMatrix}</div>
        </div>
      </div>
    </>
  );
}
