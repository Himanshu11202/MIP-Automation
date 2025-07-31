import SectionTitle from "@/components/sectionTitle";
import { getBlog } from "@/lib/blogs";
import { markdownToHtml } from "@/lib/markDownToHTML";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const blog = getBlog(id);

  if (!blog) {
    notFound();
  }

  const body = await markdownToHtml(blog.body);

  return (
    <>
      <article className="prose dark:prose-invert w-full p-8 flex flex-col justify-center items-center">
        <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={blog.img}
            alt={blog.alt}
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
        <SectionTitle
          title={blog.title}
          align="left"
          className="capitalize px-0"
        />
        <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
      </article>
    </>
  );
};

export default page;
