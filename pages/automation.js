// pages/automation.js
import Navbar from '../src/components/navbar';
import Image from "next/image";
import ThemeChanger from '../src/components/DarkSwitch';

export default function Automation() {
  return (
    <>
      <Navbar />

      {/* Full screen video background with overlay and heading + subtitle */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/img/images/automation2 video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        {/* Centered heading and subtitle */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            Automation
          </h1>
          <p className="text-white max-w-xl text-lg md:text-2xl drop-shadow-md">
            MIP Automation has earned world fame in developing error-free,
            innovative, class-apart Industrial Automation solutions for their
            clients. When you want to maximize your ROI on Industrial Automation;
            then think about us.
          </p>
        </div>
      </section>

      {/* Content below video */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-10 mb-20">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img/images/industrial-automation-1800x1300.jpg"
              alt="Industrial Automation"
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Industrial Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                MIP Automation has earned world fame in developing error-free,
                innovative, class-apart Industrial Automation solutions for
                their clients.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img/images/mcc-panel-1800x1300.jpg"
              alt="MCC Power Panel"
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                MCC Power Panel
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We design & manufacture low voltage switchgear panels & motor
                control centres with ideal engineering practices.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img/images/apfc-panel1-1800x1300.png"
              alt="APFC Panel"
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                APFC Panel
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We provide fixed & automatic power compensation solutions for
                reactive power reduction in industrial loads.
              </p>
            </div>
          </div>
        </section>

        {/* More Services Section */}
        <section className="grid md:grid-cols-3 gap-10 mb-20">
          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img/images/db-panel-1280x935.jpg"
              alt="DB Panel"
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                DB Panel
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Manufacturing distribution panel boards customized as per client
                specifications.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img/images/service-maintenance-1667x1152-800x552.jpg"
              alt="Service Maintenance"
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Service Maintenance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Dedicated emergency management team ready to support clients
                promptly.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img/images/camera-040-1800x1300.jpg"
              alt="Electrical Panel"
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Electrical Panel
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Distribution board for dividing power feed into subsidiary
                circuits with protection.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
