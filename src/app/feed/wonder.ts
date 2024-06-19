import { StaticImageData } from "next/image";
import photo1 from "./wonderes/1.png";
import photo2 from "./wonderes/2.png";
import photo3 from "./wonderes/3.png";
import photo4 from "./wonderes/4.png";
import photo5 from "./wonderes/5.png";
import photo6 from "./wonderes/6.png";

export type WonderImages = {
  id: string;
  name: string;
  url: StaticImageData;
  meta: string;
  title: string;
};

const wonderImages: WonderImages[] = [
  {
    id: "0",
    name: "test",
    url: photo1,
    meta: "test",
    title: "this is title 1",
  },
  {
    id: "1",
    name: "test",
    url: photo2,
    meta: "test",
    title: "this is title 2",
  },
  {
    id: "2",
    name: "test",
    url: photo3,
    meta: "test",
    title: "this is title 3",
  },
  {
    id: "3",
    name: "test",
    url: photo4,
    meta: "test",
    title: "this is title 4",
  },
  {
    id: "4",
    name: "test",
    url: photo5,
    meta: "test",
    title: "this is title 5",
  },
  {
    id: "5",
    name: "test",
    url: photo6,
    meta: "test",
    title: "this is title 6",
  }
];

export default wonderImages;
