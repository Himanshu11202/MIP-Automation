import { Heading, Title } from "@/components/Shared/BlogUIKit";
import DeveloperCard from "../../components/DeveloperCard";

export default function Developers() {
  const devs = [
    {
      name: "Himanshu Patidar",
      role: "Full Stack Developer",
      skills: "Java, Next.js, Tailwind, SQL",
      info: "I am a Full Stack Developer passionate about creating scalable and high-performance applications. With expertise in Java, Next.js, Tailwind, and SQL, I build solutions that are efficient, elegant, and user-focused. I love solving complex problems, optimizing code, and continuously exploring new technologies to deliver exceptional results.",
      email: "himanshu@example.com",
      linkedin: "https://www.linkedin.com/in/himanshu-patidar-27a0b3256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/himanshu",
      image: "/developers/images/dev1.jpg",
    },
    {
      name: "Divyanshu patil",
      role: "Fullstack web and React-Native Developer",
      skills: "React Native, express js, mongoDB, Next Js, Typescript",
      info: "Passionate about building scalable applications. Worked on multiple projects including College Placement Management System, e-commerce apps, and automation tools. Loves learning new technologies and optimizing code for performance.Creative designer focusing on user-friendly and modern interfaces. Designed multiple responsive websites and mobile apps. Passionate about enhancing user experience and accessibility.",
      email: "work.divyanshupatil@gmail.com",
      linkedin: "https://linkedin.com/in/divyanshupatil",
      github: "https://github.com/divyanshu-patil",
      image: "/developers/images/div.png",
    },
    {
      name: "Abhijit gupta",
      role: "Backend Developer",
      skills: "Node.js, Express, MongoDB, APIs",
      info: "Passionate about building scalable applications. Worked on multiple projects including College Placement Management System, e-commerce apps, and automation tools. Loves learning new technologies and optimizing code for performance.Specializes in server-side development, APIs, and database management. Contributed to complex backend systems for web apps, ensuring scalability, security, and performance optimization.",
      email: "vishvaraj@example.com",
      linkedin: "https://linkedin.com/in/vishvaraj",
      github: "https://github.com/vishvaraj",
      image: "/developers/images/dev1.jpg",
    },
  ];

  return (
    <section className="px-6">
      <div className="text-center mb-14">
       <Title align="center" className="mt-14 text-xl text-yellow-500  font-semibold">
        Meet our Developers
       </Title>
        <Heading headingType="small" className="font-thin">
          Skilled and passionate developers ready to work on your projects.
        </Heading>
      </div>

      <div className="flex flex-col gap-16">
        {devs.map((dev, index) => (
          <DeveloperCard key={index} {...dev} />
        ))}
      </div>
    </section>
  );
}
