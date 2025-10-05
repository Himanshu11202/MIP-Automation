import Image from "@/components/Shared/BlogUIKit/Image";
import Title from "@/components/Shared/BlogUIKit/Title";
import { getBlog } from "@/app/blog/blogs/blogs";
import { notFound } from "next/navigation";
import React from "react";

// params is a Promise<{ id: string }>
type Props = {
  params: Promise<{ id: string }>;
};

export default function BlogPostPage({ params }: Props) {
  const { id } = React.use(params);

  const blog = getBlog(id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="w-full p-8 flex flex-col justify-center items-center dark:bg-trueGray-900">
      <Image src={blog.img} alt={blog.alt} className="object-cover" />
      <section className="w-full max-w-5xl">
        <Title>{blog.title}</Title>
        {blog.body}
      </section>
    </article>
  );
}
