import Card from "@/src/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <>
      <Card>
        <div>Archived </div>
        <Link
          className="text-blue-400 font-semibold underline"
          href="/complex-dashboard"
        >
          default
        </Link>
      </Card>
    </>
  );
}
