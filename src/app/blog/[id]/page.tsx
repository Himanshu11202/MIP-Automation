import Image from "@/components/Shared/BlogUIKit/Image";
import Title from "@/components/Shared/BlogUIKit/Title";
import { getBlog } from "@/app/blog/blogs/blogs";
import { notFound } from "next/navigation";
import React from "react";

// The props are correctly typed here. The component can be async.
const page = async ({ params }: { params: { id: string } }) => {
  // The 'await' keyword is removed here. This is the fix.
  const { id } = params;
  const blog = getBlog(id);

  if (!blog) {
    notFound();
  }

  // const body = await markdownToHtml(blog.body);

  return (
    <>
      <article className="w-full p-8 mt-nav flex flex-col justify-center items-center dark:bg-trueGray-900">
        <Image src={blog.img} alt={blog.alt} className="object-cover" />
        <section className="w-full max-w-5xl">
          <Title>{blog.title}</Title>
          {blog.body}
        </section>
      </article>
    </>
  );
};

export default page;