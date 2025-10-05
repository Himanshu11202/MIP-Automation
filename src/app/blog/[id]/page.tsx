import Image from "@/components/Shared/BlogUIKit/Image";
import Title from "@/components/Shared/BlogUIKit/Title";
import { getBlog } from "@/app/blog/blogs/blogs";
import { notFound } from "next/navigation";
import React from "react";

// Correct typing for params
interface PageProps {
  params: {
    id: string;
  };
}

// Async page component
const BlogPostPage = ({ params }: PageProps) => {
  const { id } = params;
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
};

export default BlogPostPage; // ✅ Only one default export
