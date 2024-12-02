"use client"; // Add this line to mark the component as a client component

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [notification, setNotification] = useState("");
  const notifications = [
    "Dev Pandya got selected for a Job!",
    "John Doe started a new project!",
    "Jane Smith joined as a new developer!",
    "Michael Lee promoted to senior manager!",
  ];
  let notificationIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setNotification(notifications[notificationIndex]);
      notificationIndex = (notificationIndex + 1) % notifications.length;
    }, 5000); // Changes message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-blue-900 shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Tagline Section */}
          <div className="flex items-center space-x-2">
            <img src="/images/logonew.svg" alt="Logo" className="h-40 w-40" />
            <div>
              <Link
                href="https://www.jobringer.com/"
                className="text-xl font-bold text-white"
              >
              
              </Link>
              <i className="tagline taline1 text-sm text-gray-200">
                Bringing you{" "}
                <span className="font-semibold text-white">the Perfect Job</span>
              </i>
            </div>
          </div>

          {/* Notification Section */}
          <div className="flex items-center space-x-4">
            <div className="notification_pops border border-green-500 bg-white shadow-lg text-green-600 transition duration-500 cursor-pointer px-3 py-2 rounded-lg text-center">
              {notification}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="https://www.jobringer.com/employers-list.php"
              className="text-white hover:text-yellow-300 relative group transition"
            >
              Active Employers
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>

            {/* Pricing Dropdown */}
            <div className="relative group">
              <Link
                href="#"
                className="text-white hover:text-yellow-300 relative group transition"
              >
                Pricing
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48">
                <Link
                  href="/employee-pricing"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                >
                  Employee Pricing Plan
                </Link>
                <Link
                  href="/jobseeker-pricing"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                >
                  Job Seeker Pricing Plan
                </Link>
              </div>
            </div>

            <Button
              variant="outline"
              
              className="hover:bg-yellow-300 transition-colors"
            >
              Job Seeker Login
            </Button>
            <Button
              
              className="hover:bg-yellow-300 transition-colors"
            >
              Employee Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
