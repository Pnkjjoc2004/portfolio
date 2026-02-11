"use client";
import { ArrowUpRight, Check } from "lucide-react";
import darkSaasLandingPage from "@/assets/images/studymate.png";
import lightSaasLandingPage from "@/assets/images/booking.png";
import aiStartupLandingPage from "@/assets/images/smartcv.png";
import alseefDoctors from "@/assets/images/alseef-doctors.png";
import sshTerminal from "@/assets/images/ssh-terminal.png";
import yourStore from "@/assets/images/your-store.png";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Hanging Panda",
    year: "2025",
    title: "Alseef Doctors",
    results: [
      {
        title:
          "Developed a secure Flutter-based portal for doctors to manage appointments and live patient schedules using Firebase Firestore and real-time database",
      },
      {
        title:
          "Implemented high-speed retrieval of radiology reports, diagnoses, and clinical notes with optimized real-time data handling",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.doctors_incentive",
    image: alseefDoctors,
  },

  {
    company: "SSH Client",
    year: "2025-Present",
    title: "SSH Client App",
    results: [
      {
        title:
          "Developed a Flutter-based SSH & SFTP client supporting secure remote command execution and file management using SSH2 protocol and xTerm package for terminal UI",
      },
      {
        title:
          "Implemented .pem/.ppk private key authentication with encrypted local storage for secure session persistence",
      },
    ],
    link: "",
    image: sshTerminal,
  },
  {
    company: "Your Store",
    year: "2025",
    title: "Your Store - E-commerce",
    results: [
      {
        title:
          "Architected a Flutter-based hyperlocal e-commerce application using Clean Architecture and Riverpod for scalable state management",
      },
      {
        title:
          "Implemented secure authentication flows and backend API integration with Firebase for seamless user and order management",
      },
    ],

    link: "",
    image: yourStore,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-md font-medium bg-gradient-to-r to-blue-300 from-emerald-500 tracking-wide uppercase mb-8 bg-clip-text text-transparent">
            Projects
          </span>

          <h2 className="text-3xl  font-light text-white mb-4 font-sans tracking-tight">
            Modern Mobile & Web Applications
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Here are some of my recent projects that showcase my skills in
            mobile and web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 bg-neutral-100">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="font-medium text-gray-700">
                    {project.company}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-6">
                  {project.results.map((result) => (
                    <div key={result.title} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {result.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Project Link */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors group/link"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
