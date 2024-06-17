import Notification from "./@notification/page";
import RevenueMatrix from "./@revenueMatrix/page";
import UserAnalytics from "./@userAnalytics/page";

export default function ComplexdashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div> {children}</div>

      <div className="flex flex-row ">
        <div className="basis-1/2">
          <UserAnalytics />
        </div>
        <div className="basis-1/2 flex flex-col ">
          <div>
            <Notification />
          </div>
          <div>
            <RevenueMatrix />
          </div>
        </div>
      </div>
    </>
  );
}
