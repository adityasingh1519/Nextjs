import Image from "next/image";
import wonderImages from "../wonder";

export default function FeetId({ params: { id } }: { params: { id: String } }) {
  const index = parseInt(id);
  return (
    <>
      <h1>
        This is the title
        <span className="bg-yellow-400 p-2 font-bold">
          {wonderImages[index].title}
        </span>
      </h1>
      <Image src={wonderImages[index].url}  alt={wonderImages[index].meta} />
    </>
  );
}
