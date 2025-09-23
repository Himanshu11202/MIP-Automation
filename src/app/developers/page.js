"use client";
import DeveloperCard from "../../components/DeveloperCard";

export default function Developers() {
  const devs = [
    {
      name: "Himanshu Patidar",
      role: "Full Stack Developer",
      skills: "Java, Next.js, Tailwind, SQL",
      info: "Passionate about building scalable applications. Worked on multiple projects including College Placement Management System, e-commerce apps, and automation tools. Loves learning new technologies and optimizing code for performance.Passionate about building scalable applications. Worked on multiple projects including College Placement Management System, e-commerce apps, and automation tools. Loves learning new technologies and optimizing code for performance.",
      email: "himanshu@example.com",
      linkedin: "https://linkedin.com/in/himanshu",
      github: "https://github.com/himanshu",
      image: "/developers/images/dev1.jpg"

    },
    {
      name: "Divyanshu patil",
      role: "UI/UX Designer",
      skills: "Figma, Photoshop, HTML, CSS",
      info: "Passionate about building scalable applications. Worked on multiple projects including College Placement Management System, e-commerce apps, and automation tools. Loves learning new technologies and optimizing code for performance.Creative designer focusing on user-friendly and modern interfaces. Designed multiple responsive websites and mobile apps. Passionate about enhancing user experience and accessibility.",
      email: "muskan@example.com",
      linkedin: "https://linkedin.com/in/muskan",
      github: "https://github.com/muskan",
       image: "/developers/images/dev1.jpg"
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
    <section className="text-green-700 py-24 px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold">Meet Our Developers</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Skilled and passionate developers ready to work on your projects.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {devs.map((dev, index) => (
          <DeveloperCard key={index} {...dev} />
        ))}
      </div>
    </section>
  );
}
