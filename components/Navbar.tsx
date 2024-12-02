"use client"; // This marks the component as a client component in Next.js

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js optimized image component

export default function Navbar() {
  const [notification, setNotification] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const notificationIndex = useRef(0);

  useEffect(() => {
    const notifications = [
      "New job alerts for developers!",
      "Top companies hiring now!",
      "Jane Smith landed a role as Software Engineer!",
      "Your dream job is a click away!",
    ];
    
    const interval = setInterval(() => {
      setNotification(notifications[notificationIndex.current]);
      notificationIndex.current =
        (notificationIndex.current + 1) % notifications.length;
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-blue-900 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logonew.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-40 w-40"
              priority // Ensures faster loading for logo
            />
            <Link href="/" className="text-2xl font-bold text-white">
              JobRinger
            </Link>
          </div>

          {/* Notification Section */}
          <div className="hidden md:block text-white bg-green-500 px-4 py-2 rounded-full">
            {notification}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/employers"
              className="text-white hover:text-yellow-300 transition"
            >
              Active Employers
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-yellow-300 transition">
                Pricing
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                <Link
                  href="/employee-pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Employee Pricing
                </Link>
                <Link
                  href="/jobseeker-pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Jobseeker Pricing
                </Link>
              </div>
            </div>
            <Link
              href="/login"
              className="text-white bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/employers"
              className="block text-white hover:text-yellow-300 transition"
            >
              Active Employers
            </Link>
            <div className="group">
              <button className="text-white hover:text-yellow-300 transition">
                Pricing
              </button>
              <div className="mt-2 bg-white shadow-lg rounded-md">
                <Link
                  href="/employee-pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Employee Pricing
                </Link>
                <Link
                  href="/jobseeker-pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Jobseeker Pricing
                </Link>
              </div>
            </div>
            <Link
              href="/login"
              className="block text-white bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
