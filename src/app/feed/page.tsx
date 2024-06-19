import Link from "next/link";
import wonderImages from "./wonder";
import Image from "next/image";

export default function PageFeed() {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {wonderImages.map(({ id, url, name }) => (
          <Link key={id} href={`/feed/${id}`}>
            <Image
              alt={name}
              src={url}
              className="w-full object-cover  aspect-[2/1]"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
