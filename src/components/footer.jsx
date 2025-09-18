import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative mt-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
      {/* Pre-footer CTA */}
      {/* <div className="bg-gray-200 dark:bg-gray-700">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between py-1 lg:py-6">
            <div className="text-lg text-center sm:text-left mb-4 sm:mb-0">
              If you want to work with MIP Automation. Get quotation right now.
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
            >
              Get Estimate Now
            </Link>
          </div>
        </Container>
      </div> */}

      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto lg:grid-cols-12">
          {/* Address Column */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Address
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Mhatre Nagar, Kalyan - Shil Road.,
              <br />
              Landmark Behind Classic Hotel,
              <br />
              Mangaon, Sonar Pada, Dombivli
              <br />
              East, Dombivli, Maharashtra
              <br />
              421203
            </p>
          </div>

          {/* Contacts & Links Column */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contacts
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> sales@mipautomation.com
              <br />
              <strong>Phone:</strong> 8446065780
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#" // Replace with actual staff login link
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline"
                >
                  Staff Login
                </a>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0937385194948!2d73.09718199999999!3d19.1911077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795eaf2e4846d%3A0x560bbf05592ba3e8!2sMECH%20IT%20POSSIBLE!5e0!3m2!1sen!2sin!4v1753772108716!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 mt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            © Copyright 2025. MIP | Designed by Team
          </div>
          <div className="flex space-x-5 text-gray-500 dark:text-gray-400">
            <a
              href="#" // Replace with your Twitter link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/Mech-it-possible-680041058753674/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">Facebook</span>
              <Facebook />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

// SVG Icons (retained from your original file)
const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
