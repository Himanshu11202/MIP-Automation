import React from "react";
import {
  Heading,
  SubHeading,
  Paragraph,
  Mark,
  Image,
  List,
  OrderedList,
  YoutubeVideo,
  Seperator,
} from "@/components/Shared/BlogUIKit";
import Link from "@/components/Shared/BlogUIKit/Link";

const blog2 = (
  <section>
    <Heading align="center" headingType="main">
      Understanding the Types of Machines
    </Heading>

    <SubHeading align="center" headingType="main">
      From Simple Mechanisms to Complex Systems
    </SubHeading>

    <Paragraph>
      Machines have revolutionized how humans work, live, and create. From basic
      tools to advanced robotics, machines amplify our capabilities. In this
      post, we'll explore the different types of machines, how they function,
      and where you'll commonly find them in use.
    </Paragraph>

    <Seperator />

    <Heading align="left" headingType="sub">
      ⚙️ Classification of Machines
    </Heading>

    <List>
      <li>Simple Machines (Levers, Pulleys, Inclined Planes)</li>
      <li>Compound Machines (Wheelbarrows, Scissors)</li>
      <li>Electrical Machines (Motors, Generators)</li>
      <li>Electronic Machines (Computers, Calculators)</li>
      <li>Automated Machines (Robots, CNC Machines)</li>
    </List>

    <Paragraph>
      Using <Mark>machine classification</Mark> helps in understanding their
      function and scope. For example, a lever and a crane both move heavy
      loads, but one is manual while the other is mechanical or electrical.
    </Paragraph>

    <Heading headingType="sub">📋 Key Examples & Use Cases</Heading>

    <OrderedList>
      <li>Lever: Used in crowbars, scissors</li>
      <li>Inclined Plane: Found in ramps, slides</li>
      <li>Motor: Powers fans, washing machines</li>
      <li>Robot Arm: Used in manufacturing assembly lines</li>
    </OrderedList>

    <YoutubeVideo src="https://www.youtube.com/embed/STA2Pr5l_z0?si=2Bht-ORtRUF7ckLf" />

    <Paragraph>
      A key takeaway is that machines don't have to be complex to be impactful.
      Even a simple inclined plane can drastically reduce human effort.
      <Mark>Efficiency is the real innovation.</Mark>
    </Paragraph>

    <Heading headingType="sub">🖼️ Machines in Visual Form</Heading>

    <Paragraph>
      Below is a visual representation of a machine interface using the custom
      <Mark>&lt;Image /&gt;</Mark> component. This ensures responsive loading
      and optimized delivery for the web.
    </Paragraph>

    <Image src="/img/hero.png" alt="Demo screenshot of blog UI" />

    <Paragraph>
      The journey of understanding machines is fascinating. Whether you're
      studying engineering,{" "}
      <Link href={"https://youtube.com"}>designing robotics</Link>, or simply
      curious — dive deeper into how these mechanical marvels make modern life
      possible.
    </Paragraph>

    <Seperator />

    <SubHeading headingType="small">Thanks for reading 🔧</SubHeading>
    <Paragraph>
      If this post helped you understand machines better, share it with your
      friends or get in touch on socials. Keep building, keep learning!
    </Paragraph>
  </section>
);

export default blog2;
