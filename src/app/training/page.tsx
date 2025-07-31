'use client';

import React from 'react';

const trainings = [
  {
    title: 'Industrial Automation Training',
    description:
      'Learn PLCs, SCADA, HMI, and control panels with hands-on industrial hardware.',
    imageUrl: '/img/industrial-automation.jpg',
  },
  {
    title: 'Embedded Systems Training',
    description: 'Microcontrollers: Arduino, PIC, ARM with C programming.',
    imageUrl: '/img/embedded-systems.jpg',
  },
  {
    title: 'IoT Training',
    description: 'NodeMCU, MQTT, sensors, and cloud platforms like AWS & Blynk.',
    imageUrl: '/img/iot-training.jpg',
  },
  {
    title: 'Robotics Training',
    description:
      'Robots: line follower, Bluetooth-controlled, and obstacle avoiders.',
    imageUrl: '/img/robotics.jpg',
  },
  {
    title: 'Python & Machine Learning',
    description:
      'Python, NumPy, Pandas, ML algorithms like linear regression, decision trees, etc.',
    imageUrl: '/img/python-ml.jpg',
  },
  {
    title: 'Live Projects & Certification',
    description: 'Complete training with live projects and a certification.',
    imageUrl: '/img/live-projects.jpg',
  },
];

export default function TrainingPage() {
  return (
    <main className="pt-0">
      {/* 🔵 Background Image Section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white px-4"
        style={{ backgroundImage: "url('/img/training-bg.jpg.jpg')" }}
      >
        <h1 className="text-6xl font-extrabold text-center drop-shadow-md text-red-600">
          Training Programs
        </h1>
        <p className="max-w-3xl text-lg text-center mt-6 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          Welcome to the world of educational engineering INNOVATION projects. This site offers
          solutions about final year educational project work for DIPLOMA/BE/ME/MTECH/PhD aspirants
          specifically related to—
        </p>
      </section>

      {/* 🔵 Cards Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map(({ title, description, imageUrl }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-center text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">{description}</p>

                {/* 🔵 Read More Button */}
                <div className="mt-6 text-center">
                  <button className="text-sm text-indigo-600 font-medium hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
