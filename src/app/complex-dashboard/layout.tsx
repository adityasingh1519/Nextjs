export default function ComplexdashboardLayout({
  children,
  userAnalytics,
  notification,
  revenueMatrix,
  login,
}: Readonly<{
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  notification: React.ReactNode;
  revenueMatrix: React.ReactNode;
  login: React.ReactNode;
}>) {
  const isLogin = true;
  return isLogin? (
    <>
      <div>This Complex LAYOUT </div>
      <div className="flex flex-row ">
        <div className="basis-1/2">{userAnalytics}</div>
        <div className="basis-1/2 flex flex-col ">
          <div>{notification}</div>
          <div>{revenueMatrix}</div>
        </div>
      </div>
    </>
  ) : (
    login
  );
}
