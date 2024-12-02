"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function JobListingSection() {
  const [jobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "TechCorp",
      location: "New York",
      salary: "$80,000 - $120,000",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Innovatech",
      location: "San Francisco",
      salary: "$90,000 - $110,000",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "CodeWorks",
      location: "Remote",
      salary: "$70,000 - $100,000",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataXperts",
      location: "Chicago",
      salary: "$85,000 - $115,000",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "AgileSolutions",
      location: "Seattle",
      salary: "$95,000 - $130,000",
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("title");

  // Dynamic Sorting
  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortOption === "title") return a.title.localeCompare(b.title);
    if (sortOption === "company") return a.company.localeCompare(b.company);
    if (sortOption === "salary")
      return parseInt(a.salary.split("-")[0].replace("$", "").replace(",", "")) -
             parseInt(b.salary.split("-")[0].replace("$", "").replace(",", ""));
    if (sortOption === "location") return a.location.localeCompare(b.location);
    return 0;
  });

  // Filtering by Search Term
  const filteredJobs = sortedJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search and Sort Controls */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border rounded p-2 flex-grow mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded p-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="company">Sort by Company</option>
          <option value="salary">Sort by Salary</option>
          <option value="location">Sort by Location</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.length ? (
          filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-blue-700 font-bold">
                  {job.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-medium">{job.company}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-green-600 font-semibold">Salary: {job.salary}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Apply
                  </button>
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">
                    Share
                  </button>
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">
                    Save
                  </button>
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">
                    Message
                  </button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">No jobs found.</p>
        )}
      </div>
    </div>
  );
}
