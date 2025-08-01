import { StaticImport } from "next/dist/shared/lib/get-img-props";
import blog1 from "./BlogBody/blog1";
import blog2 from "./BlogBody/blog2";

export interface Blog {
  id: string;
  img: string | StaticImport;
  alt: string;
  title: string;
  body: React.ReactNode;
  description: string;
}
export const blogs: Blog[] = [
  {
    id: "blog-id-1",
    img: "/test-img-desktop.png",
    alt: "blog-1-alt-img",
    title: "blog 1",
    body: blog1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta qui autem non a! Ipsum, blanditiis. Voluptas atque maiores doloremque sint, praesentium dolorem cum animi tempore optio ratione necessitatibus recusandae?",
  },
  {
    id: "blog-id-2",
    img: "/test-img-desktop.png",
    alt: "blog-1-alt-img",
    title: "blog 2",
    body: blog2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta qui autem non a! Ipsum, blanditiis. Voluptas atque maiores doloremque sint, praesentium dolorem cum animi tempore optio ratione necessitatibus recusandae?",
  },
  {
    id: "blog-id-3",
    img: "/test-img-desktop.png",
    alt: "blog-3-alt-img",
    title: "blog 1",
    body: blog1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta qui autem non a! Ipsum, blanditiis. Voluptas atque maiores doloremque sint, praesentium dolorem cum animi tempore optio ratione necessitatibus recusandae?",
  },
  {
    id: "blog-id-4",
    img: "/test-img-desktop.png",
    alt: "blog-4-alt-img",
    title: "blog 2",
    body: blog2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta qui autem non a! Ipsum, blanditiis. Voluptas atque maiores doloremque sint, praesentium dolorem cum animi tempore optio ratione necessitatibus recusandae?",
  },
];

export const getBlog = (id: string) => {
  const blog = blogs.find((b) => b.id === id);

  return blog;
};
