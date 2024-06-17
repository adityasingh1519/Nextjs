import Card from "@/src/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <>
      <Card>
        <div>Notification </div>
        <Link className="text-blue-400 font-semibold underline" href="/complex-dashboard/archived">Archive</Link>
      </Card>
    </>
  );
}
