import React from "react";
import NextLink from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { Link2Icon } from "lucide-react";

interface LinkProps {
  href: Url;
  children: string;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <span>
      <NextLink
        href={href}
        className="relative inline-flex justify-center items-center gap-2 mx-1 pl-6 text-sky-800 bg-sky-100 rounded-md ring-sky-100 ring-2 dark:ring-sky-900 dark:bg-sky-900 dark:text-sky-200"
      >
        <Link2Icon size={16} className="absolute left-0" />
        {children}
      </NextLink>
    </span>
  );
};

export default Link;
