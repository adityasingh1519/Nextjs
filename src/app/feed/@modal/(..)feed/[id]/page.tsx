import Modal from "@/src/components/modal";
import Image from "next/image";
import wonderImages, { WonderImages } from "../../../wonder";

export default function FeetId({ params: { id } }: { params: { id: string } }) {
  const result: WonderImages = wonderImages.find((r) => r.id === id )!;
  return (
    <>
      <Modal>
        <Image alt={result.meta} src={result.url} />
        <div>
          <h2 className="text-xl font-semibold">{result.name}</h2>
          <h3>{result.title}</h3>
        </div>
      </Modal>
    </>
  );
}
