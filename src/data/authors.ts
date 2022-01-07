import __authors from "./json/__users.json";
import { AuthorType } from "./types";

const imgs = [
  "/images/avatars/Image-1.png",
  "/images/avatars/Image-2.png",
  "/images/avatars/Image-3.png",
  "/images/avatars/Image-4.png",
  "/images/avatars/Image-5.png",
  "/images/avatars/Image-6.png",
  "/images/avatars/Image-7.png",
  "/images/avatars/Image-8.png",
  "/images/avatars/Image-9.png",
  "/images/avatars/Image-10.png",
  "/images/avatars/Image-11.png",
  "/images/avatars/Image-12.png",
  "/images/avatars/Image-13.png",
  "/images/avatars/Image-14.png",
  "/images/avatars/Image-15.png",
  "/images/avatars/Image-16.png",
  "/images/avatars/Image-17.png",
  "/images/avatars/Image-18.png",
  "/images/avatars/Image-19.png",
  "/images/avatars/Image-20.png",
];

const DEMO_AUTHORS: AuthorType[] = __authors.map((item, index) => ({
  ...item,
  avatar: imgs[index] || item.avatar,
}));

export { DEMO_AUTHORS };
