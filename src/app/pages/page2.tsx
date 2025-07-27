import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden mt-20">
      {/* adjust margin according to navbar */}
      {/* <section className="h-screen w-screen mt-20"> */}
      <section className="h-screen w-screen">
        <ImageSlider />
      </section>
      <section className="h-screen w-screen">
        <ImageSlider />
      </section>
    </main>
  );
}
