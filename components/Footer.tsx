import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const jobCategories = [
    {
      title: "Jobs in India",
      locations: [
        "Mumbai",
        "Delhi",
        "Ajmer",
        "Pune",
        "Hyderabad",
        "Agra",
        "Chennai",
        "Kolkata",
        "Indore",
        "Gurugram",
        "Jaipur",
        "Ahmedabad",
      ],
    },
    {
      title: "International Jobs",
      locations: ["Africa", "USA", "UK", "Australia", "Canada"],
    },
  ];

  const legalLinks = [
    { title: "Terms and Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Refund / Cancellation Policy", href: "/refund" },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "https://facebook.com" },
    { icon: <Twitter />, href: "https://twitter.com" },
    { icon: <Instagram />, href: "https://instagram.com" },
    { icon: <Linkedin />, href: "https://linkedin.com" },
    { icon: <Youtube />, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Job Categories Inline-Flex */}
        <div className="flex justify-between flex-wrap mb-8">
          {jobCategories.map((category, idx) => (
            <div key={idx} className="mr-8 mb-4">
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              {/* Inline Flex for Locations */}
              <ul className="flex flex-wrap gap-2 text-sm">
                {category.locations.map((location, index) => (
                  <li
                    key={index}
                    className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition"
                  >
                    #{location}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links and Legal Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:underline hover:text-gray-400"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 text-center text-sm">
          <p>
            © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
          </p>
          <p className="mt-2">
            Disclaimer: All Trademarks and Logos are the property of their
            respective owners, depicted here purely for representation purposes.
            Jobringer.com has taken all reasonable steps to ensure that
            information on this site is genuine. Job Applicants are advised to
            evaluate independently. Jobringer.com shall not have any
            responsibility in this regard. All Jobseeker services are strictly
            designed & meant only for job search assistance and to maximize the
            chances for jobseekers to get their dream job. All Job Seeker
            Credentials and Employment Opportunities are subject to individual
            merit & evaluation. We do not guarantee any job to any jobseeker.
          </p>
        </div>
      </div>
    </footer>
  );
}
