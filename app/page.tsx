import { Suspense } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NatureBackground } from "@/components/nature-background"
import { ProjectCard } from "@/components/project-card"
import { SkillCard } from "@/components/skill-card"
import { ContactForm } from "@/components/contact-form"
import { RevealText } from "@/components/reveal-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { AboutIllustration } from "@/components/illustrations/about-illustration"
import { EducationIllustration } from "@/components/illustrations/education-illustration"
import { SkillsIllustration } from "@/components/illustrations/skills-illustration"
import { ProjectsIllustration } from "@/components/illustrations/projects-illustration"
import { CertificationsIllustration } from "@/components/illustrations/certifications-illustration"
import { ContactIllustration } from "@/components/illustrations/contact-illustration"
import { MobileMenu } from "@/components/mobile-menu"
import { ProfileBackgroundEffect } from "@/components/profile-background-effect"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-neutral-800 dark:text-white transition-colors duration-300">
            Vasundhara Yadav
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="#education"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"
              >
                Education
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <MobileMenu
              links={[
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ]}
            />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Suspense
              fallback={
                <div className="w-full h-full bg-gradient-to-b from-[#e9f5db] to-[#f8f9fa] dark:from-neutral-800 dark:to-neutral-900 transition-colors duration-300" />
              }
            >
              <NatureBackground />
            </Suspense>
          </div>
          <div className="container py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <RevealText>
                  <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">
                    Hello, I'm{" "}
                    <span className="text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                      Vasundhara Yadav
                    </span>
                  </h1>
                </RevealText>
                <p className="text-xl text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
                  A passionate software developer specializing in full-stack development and problem-solving.
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="default"
                    className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white transition-colors duration-300"
                  >
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 group transition-colors duration-300"
                  >
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Download Resume
                    </a>
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link href="https://github.com/VasundharaYadav" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/vasundhara-yadav-149410296"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300" />
                  </Link>
                  <Link href="mailto:vasundharayadav222@gmail.com">
                    <Mail className="h-6 w-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <ProfileBackgroundEffect />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl transition-colors duration-300">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formal_img.jpg-YOx6aA6XKninbIE3utaC8OPIwyqFX0.jpeg"
                        alt="Vasundhara Yadav"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ArrowDown className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
            </div>
          </div>
        </section>

        {/* About Section - Updated with new background class */}
        <ScrollReveal
          id="about"
          className="py-20 section-bg-light dark:about-section-dark transition-colors duration-300"
        >
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12 transition-colors duration-300">
                About Me
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                    <p>
                      To leverage my skills in software development, research, and problem-solving to contribute
                      effectively to an innovative and growth-oriented organization while continuously enhancing my
                      technical expertise.
                    </p>
                    <p>
                      I'm passionate about creating efficient, user-friendly applications and continuously learning new
                      technologies. With experience in both front-end and back-end development, I enjoy building
                      complete solutions that solve real-world problems.
                    </p>
                    <p>
                      Based in Nandur kh, India, I'm currently pursuing my MSc in Computer Science while working on
                      exciting projects that challenge me to grow as a developer.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <AboutIllustration />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education Section - Updated with new background class */}
        <ScrollReveal
          id="education"
          className="py-20 section-bg-alt-light dark:education-section-dark transition-colors duration-300"
        >
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12 transition-colors duration-300">
              Education
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="lg:col-span-2 flex justify-center items-center">
                <EducationIllustration />
              </div>
              <div className="lg:col-span-3 space-y-8">
                <div className="relative pl-8 border-l-2 border-emerald-500 dark:border-emerald-400 transition-colors duration-300">
                  <div className="absolute w-4 h-4 bg-emerald-500 dark:bg-emerald-400 rounded-full -left-[9px] top-1 transition-colors duration-300"></div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">
                      MSc Computer Science
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                      Fergusson College (Autonomous) | Shivajinagar, Pune
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 transition-colors duration-300">2024 - 2026</p>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-emerald-500 dark:border-emerald-400 transition-colors duration-300">
                  <div className="absolute w-4 h-4 bg-emerald-500 dark:bg-emerald-400 rounded-full -left-[9px] top-1 transition-colors duration-300"></div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">
                      BSc Computer Science
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                      Padmashri Vikhe Patil College of Arts, Commerce and Science (SPPU) | Pravara Nagar, Loni
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 transition-colors duration-300">2021 - 2024</p>
                  </div>
                </div>
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-emerald-500 dark:bg-emerald-400 rounded-full -left-[9px] top-1 transition-colors duration-300"></div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">
                      Higher Secondary & Secondary
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-200 transition-colors duration-300">
                      Pravara Kanya Vidya Mandir | Pravara Nagar | Loni
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 transition-colors duration-300">2019 - 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal
          id="skills"
          className="py-20 section-bg-light dark:section-bg-dark transition-colors duration-300"
        >
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12 transition-colors duration-300">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="lg:col-span-2 flex justify-center items-center">
                <SkillsIllustration />
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SkillCard title="Programming Languages" skills={["C", "Python", "Java"]} icon="Code" />
                  <SkillCard
                    title="Web Development"
                    skills={["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]}
                    icon="Globe"
                  />
                  <SkillCard title="Database Management" skills={["PostgreSQL", "MySQL", "MongoDB"]} icon="Database" />
                  <SkillCard title="Development Tools" skills={["Git", "GitHub", "VS Code"]} icon="Tool" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Section */}
        <ScrollReveal
          id="projects"
          className="py-20 section-bg-alt-light dark:section-bg-alt-dark transition-colors duration-300"
        >
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12 transition-colors duration-300">
              My Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="lg:col-span-2 flex justify-center items-center">
                <ProjectsIllustration />
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-8">
                  <ProjectCard
                    title="Skin Care Recommender System"
                    description="A personalized product recommendation system using collaborative and content-based filtering techniques."
                    tags={["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "PostgreSQL"]}
                    role="Full-Stack Developer"
                    points={[
                      "Implemented collaborative and content-based filtering for personalized product recommendations",
                      "Designed a user-friendly UI/UX for seamless interaction",
                      "Integrated user feedback to refine and improve recommendation accuracy",
                    ]}
                  />
                  <ProjectCard
                    title="Share Space"
                    description="Your One-Stop Destination for Comfortable Living - A platform for flat rentals, flatmate searches, and home services."
                    tags={["MongoDB", "Express.js", "React.js", "Node.js"]}
                    role="Full-Stack Developer"
                    points={[
                      "Built a platform for flat rentals, flatmate searches, and home services",
                      "Developed responsive UI with React.js and backend with Node.js & Express.js",
                      "Used MongoDB for efficient data management",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications Section */}
        <ScrollReveal className="py-20 section-bg-light dark:section-bg-dark transition-colors duration-300">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12 transition-colors duration-300">
              Courses & Certifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="lg:col-span-2 flex justify-center items-center">
                <CertificationsIllustration />
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center group border border-neutral-200 dark:border-neutral-600">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mr-4 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-400 dark:group-hover:text-neutral-900 transition-colors duration-300">
                      <span className="text-2xl font-bold">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                        Object Oriented Programming Java
                      </h3>
                    </div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center group border border-neutral-200 dark:border-neutral-600">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mr-4 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-400 dark:group-hover:text-neutral-900 transition-colors duration-300">
                      <span className="text-2xl font-bold">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                        Employability Skills
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal
          id="contact"
          className="py-20 section-bg-alt-light dark:section-bg-alt-dark transition-colors duration-300"
        >
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-6 transition-colors duration-300">
                Get In Touch
              </h2>
              <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 transition-colors duration-300">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 flex justify-center items-center">
                  <ContactIllustration />
                </div>
                <div className="lg:col-span-3">
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-neutral-800 dark:bg-black text-white transition-colors duration-300">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Vasundhara Yadav. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/VasundharaYadav" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-neutral-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vasundhara-yadav-149410296"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-neutral-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link href="mailto:vasundharayadav222@gmail.com">
              <Mail className="h-5 w-5 text-neutral-400 hover:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
