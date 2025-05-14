import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b flex justify-center">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">
            <Link href="/">Portfolio</Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="#about" className="hover:text-foreground/80">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-foreground/80">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-foreground/80">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground/80">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full justify-center flex flex-wrap">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-primary">Your Name</span>
                </h1>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                  A passionate web developer creating beautiful and functional digital experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button>
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline">View My Work</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary bg-muted md:h-[400px] md:w-[400px]">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  className="object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full justify-center flex bg-muted/50 py-16 md:py-24">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mb-12">
              About Me
            </h2>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <p>
                I'm a passionate web developer with a strong focus on creating user-friendly and
                visually appealing websites. With several years of experience in the industry, I've
                developed a keen eye for design and a deep understanding of modern web technologies.
              </p>
              <p>
                My journey in web development began when I was in college, and since then, I've been
                constantly learning and improving my skills. I believe in writing clean,
                maintainable code and staying up-to-date with the latest industry trends and best
                practices.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading, or experimenting with new
                recipes in the kitchen.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full flex flex-wrap justify-center py-16 md:py-24">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mb-12">
              My Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group relative overflow-hidden rounded-lg border bg-background"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=400&width=600&text=Project+${project}`}
                      alt={`Project ${project}`}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Project Title {project}</h3>
                    <p className="mt-2 text-muted-foreground">
                      A brief description of this amazing project and the technologies used to build
                      it.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        React
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Next.js
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Tailwind CSS
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link href="#" className="text-sm font-medium hover:underline">
                        View Project
                      </Link>
                      <span className="text-muted-foreground">•</span>
                      <Link href="#" className="text-sm font-medium hover:underline">
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">View All Projects</Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="w-full flex flex-wrap justify-center bg-muted/50 py-16 md:py-24"
        >
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mb-12">
              My Skills
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="mb-4 text-xl font-bold">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    HTML & CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    React.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="mb-4 text-xl font-bold">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Express.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    MongoDB
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    PostgreSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    RESTful APIs
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="mb-4 text-xl font-bold">Tools & Others</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Figma
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    VS Code
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Responsive Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Vercel / Netlify
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mb-12">
              Get In Touch
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out to me for any inquiries, project proposals, or just to say
                  hello!
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>your.email@example.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-center border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
