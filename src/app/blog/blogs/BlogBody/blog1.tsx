import React from "react";
import {
  Title,
  Heading,
  SubHeading,
  Paragraph,
  Mark,
  Image,
  List,
  OrderedList,
  YoutubeVideo,
  Seperator,
  Link,
} from "@/components/Shared/BlogUIKit";

const blog1 = (
  <section>
    <Heading align="center" headingType="main">
      The Journey of Building a Developer Blog
    </Heading>

    <SubHeading align="center" headingType="main">
      From Idea to Launch — Lessons Learned
    </SubHeading>

    <Paragraph>
      Starting a blog as a developer isn't just about writing code — it's about
      sharing what you've learned,
      <Link href={"https://youtube.com"}>Link component</Link> building in
      public, and improving your communication. In this post, I'll walk you
      through how I built this blog from scratch, what tools I used, and what I
      learned along the way.
    </Paragraph>

    <Seperator />

    <Heading align="left" headingType="sub">
      🔧 Tech Stack Used
    </Heading>

    <List>
      <li>Next.js 14 (App Router)</li>
      <li>Tailwind CSS for styling</li>
      <li>MDX and Custom Components</li>
      <li>Vercel for deployment</li>
    </List>

    <Paragraph>
      Using <Mark>custom components</Mark> allowed me to have complete control
      over how content renders — from images and videos to lists and typography.
    </Paragraph>

    <Heading headingType="sub">📋 Key Milestones</Heading>

    <OrderedList>
      <li>Setting up the project structure</li>
      <li>Creating reusable UI components</li>
      <li>Integrating Markdown/MDX rendering</li>
      <li>Deploying to Vercel</li>
    </OrderedList>

    <YoutubeVideo src="https://www.youtube.com/embed/STA2Pr5l_z0?si=2Bht-ORtRUF7ckLf" />

    <Paragraph>
      One of the biggest lessons I learned was how powerful it is to keep things
      simple at the start. Instead of overengineering, I focused on shipping the
      MVP — and then iterating. <Mark>Done is better than perfect.</Mark>
    </Paragraph>

    <br />

    <Heading headingType="sub">🖼️ Custom Components in Action</Heading>

    <Paragraph>
      Here’s a sample image rendered using the custom{" "}
      <Mark>&lt;Image /&gt;</Mark> component. It supports full optimization and
      responsive loading.
    </Paragraph>

    <Image src="/img/hero.png" alt="Demo screenshot of blog UI" />

    <Paragraph>
      I plan to continue improving the blog with features like dark mode,
      search, and tags. If you're reading this and want to build your own — go
      for it! The best way to learn is by doing.
    </Paragraph>

    <Seperator />

    <SubHeading headingType="small">Thanks for reading ✨</SubHeading>
    <Paragraph>
      If you enjoyed this, feel free to share it or reach out to me on socials!
    </Paragraph>
  </section>
);

export default blog1;
