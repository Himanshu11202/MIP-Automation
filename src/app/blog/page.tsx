import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/sectionTitle";
import ElipsisText from "@/components/Shared/Text/ElipsisText";
import { blogs } from "@/app/blog/blogs/blogs";

const Blog = () => {
  return (
    <>
      <SectionTitle title="Blogs" align="left" className="mt-[55px]" />
      <div className="w-full px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="bg-trueGray-200 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.alt}
                width={600}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl capitalize font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {blog.title}
                </h3>
                <ElipsisText
                  maxChars={150}
                  className="text-gray-600 dark:text-gray-300 text-sm"
                >
                  {blog.description}
                </ElipsisText>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
