"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "EmptyCup",
    period: "May 2025 – Present",
    responsibilities: [
      "Developed responsive user interfaces using HTML, CSS, JavaScript, and Python for an online 3D design platform.",
      "Optimized web performance and contributed to cross-browser compatibility and UI/UX improvements.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Python", "UI/UX", "Performance Optimization"],
  },
  {
    title: "Full-Stack Web Development Intern",
    company: "Microsoft Learn Student Ambassador Program",
    period: "Nov 2024 – Dec 2024",
    responsibilities: [
      "Collaborated with peers in the MLSA community to build scalable web applications.",
      "Enhanced skills in deployment, API integration, and version control.",
    ],
    skills: ["Full-Stack Development", "API Integration", "Git", "Deployment", "Collaboration"],
  },
  {
    title: "Freelance Web Developer",
    company: "KIET Group of Institutions – AI/AIML Department",
    period: "Oct 2024 – Dec 2024",
    responsibilities: [
      "Designed and developed the official ICETCT-25 conference website, enabling information showcase and participant engagement on behalf of the department.",
      "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js.",
    ],
    skills: ["Web Development", "HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}