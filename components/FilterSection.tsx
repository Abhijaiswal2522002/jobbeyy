"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function FilterSection() {
  const tags = [
    "#fresher",
    "#workfromhome",
    "#wfh",
    "#it",
    "#HR",
    "#Back Office",
    "#BPO Jobs",
    "#ITES",
    "#Finance",
    "#Accounts",
    "#Medical",
    "#Pharma",
    "#Manager",
    "#Developer",
    "#CA",
    "#Marketing",
    "#Engineering",
    "#Research",
    "#Sales",
    "#MBA",
    "#Non Government Jobs",
  ];

  const [showExperience, setShowExperience] = useState(false);
  const [showWorkMode, setShowWorkMode] = useState(false);
  const [showJobType, setShowJobType] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter</h2>

      {/* Keywords Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full shadow-sm hover:bg-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Experience</h3>
          <button
            className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full shadow hover:bg-blue-600"
            onClick={() => setShowExperience(!showExperience)}
          >
            {showExperience ? "-" : "+"}
          </button>
        </div>
        {showExperience && (
          <div className="mt-3">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Enter years of experience:
            </label>
            <input
              id="experience"
              type="number"
              min="0"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 3"
            />
          </div>
        )}
      </div>

      {/* Work Mode Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Work Mode</h3>
          <button
            className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full shadow hover:bg-blue-600"
            onClick={() => setShowWorkMode(!showWorkMode)}
          >
            {showWorkMode ? "-" : "+"}
          </button>
        </div>
        {showWorkMode && (
          <div className="mt-3 space-y-2">
            {["In Office", "Work From Home", "Hybrid", "Remote", "On Field"].map(
              (mode) => (
                <label
                  key={mode}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <input
                    type="checkbox"
                    className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-500 rounded"
                  />
                  {mode}
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Job Type Section */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Job Type</h3>
          <button
            className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full shadow hover:bg-blue-600"
            onClick={() => setShowJobType(!showJobType)}
          >
            {showJobType ? "-" : "+"}
          </button>
        </div>
        {showJobType && (
          <div className="mt-3 space-y-2">
            {[
              "All Jobs",
              "Classic Job",
              "Featured Job",
              "Premium Jobs",
            ].map((type) => (
              <label
                key={type}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <input
                  type="checkbox"
                  className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-500 rounded"
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
