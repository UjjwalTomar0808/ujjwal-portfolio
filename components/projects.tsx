"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    logo: "/arshopsyLogo.svg",
    title: "AR-Shopsy",
    description:
      "An AR-enabled e-commerce platform built with React, supporting 100+ 3D product visualizations to enhance user interaction and reduce return rates.",
    image: "/arshopsy.webp",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Git", "VS Code"],
    demoUrl: "https://ar-shopsy-iota.vercel.app/",  // Add demo link if available
    githubUrl: "https://github.com/UjjwalTomar0808/AR-Shopsy", // Add GitHub repo if available
    features: [
      "Augmented Reality integration for live product previews",
      "Reduced return rates by an estimated 30%",
      "Responsive and optimized for cross-device compatibility",
      "3D product visualization with real-time rendering",
    ],
  },
  {
    logo: "/chatconnectLogo.svg",
    title: "ChatConnect",
    description:
      "A real-time chat application supporting 50+ users with secure authentication and efficient backend performance.",
    image: "/chatconnect.webp",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL", "Socket.IO", "JWT", "bcryptjs", "VS Code"],
    demoUrl: "https://pern-chat-app.onrender.com/",  // Add demo link if available
    githubUrl: "https://github.com/UjjwalTomar0808/chat-backend", // Add GitHub repo if available
    features: [
      "Real-time messaging using Socket.IO",
      "JWT-based authentication and role-based access",
      "Secure password encryption with bcryptjs",
      "Optimized PostgreSQL queries using Prisma",
      "RESTful APIs with protected routes",
    ],
  },
  {
    logo: "/artistlyLogo.svg",
    title: "Artistly.com",
    description:
      "A frontend demo of an artist booking platform, featuring dynamic artist listings, onboarding, and management dashboards.",
    image: "/artistly.webp",
    tags: ["Next.js", "Tailwind CSS", "ShadCN UI", "TypeScript", "React Hook Form", "Yup", "Framer Motion"],
    demoUrl: "https://artistly-phi.vercel.app/",  // Add demo link if available
    githubUrl: "https://github.com/UjjwalTomar0808/artistly", // Add GitHub repo if available
    features: [
      "Homepage with featured sections and filters",
      "Artist Listing Page and Onboarding Form",
      "Fully responsive layout and manager dashboard",
      "Smooth animations with Framer Motion",
    ],
  },
  {
    logo: "/solarsystem3dLogo.svg",
    title: "Solar System 3D - Interactive Simulation",
    description:
      "A real-time 3D simulation of the solar system built with React and Three.js, allowing interactive exploration of planets and orbit paths.",
    image: "/solarsystem3d.webp",
    tags: ["React", "Three.js", "Vite", "OrbitControls", "ESLint"],
    demoUrl: "https://solar-system-3d-eight.vercel.app/",  // Add demo link if available
    githubUrl: "https://github.com/UjjwalTomar0808/solar-system-3d", // Add GitHub repo if available
    features: [
      "Realistic solar system with revolution speeds and orbital paths",
      "Interactive sliders for planet speeds",
      "Pause/resume simulation in real time",
      "Support for moons, asteroid belt, and orbit controls",
      "Visually immersive UI with realistic textures and lighting",
    ],
  },
  {
    logo: "/gigflowwLogo.svg",
    title: "Gigfloww",
    description:
      "A platform to track job posts, manage teams, and streamline HR operations efficiently, with an interactive dashboard experience.",
    image: "/gigfloww.webp",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"], // Update as needed
    demoUrl: "https://gigfloww-lac.vercel.app/",  // Add demo link if available
    githubUrl: "https://github.com/UjjwalTomar0808/gigfloww", // Add GitHub repo if available
    features: [
      "Centralized job post tracking",
      "Team management tools and performance insights",
      "Streamlined HR workflows and dashboard UI",
      "Role-based access and real-time notifications",
    ],
  },
  {
    logo: "/promptfolioLogo.svg",
    title: "Promptfolio",
    description:
      "A developer portfolio styled like a macOS terminal, combining aesthetics with technical content to showcase projects and skills.",
    image: "/promptfolio.webp",
    tags: ["React", "Tailwind CSS", "Framer Motion"], // Update based on your tech stack
    demoUrl: "https://portfolio-v2-dun-three.vercel.app/",  // Add demo link if available
    githubUrl: "https://github.com/UjjwalTomar0808/Portfolio-v2", // Add GitHub repo if available
    features: [
      "Terminal-style UI for a unique developer portfolio experience",
      "Showcases skills, projects, and contact info",
      "Dark mode and responsive design",
      "Smooth UI transitions using Framer Motion",
    ],
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}