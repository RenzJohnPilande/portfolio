'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  ArrowRight,
  Mail,
  Menu,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
  Code,
  Server,
  Wrench,
  Send,
  ArrowUpRight,
  Moon,
  Sun,
} from 'lucide-react';
import { toast } from 'sonner';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Intersection observers for each section
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  // Update active section based on scroll position
  useEffect(() => {
    if (homeInView) setActiveSection('home');
    else if (projectsInView) setActiveSection('projects');
    else if (aboutInView) setActiveSection('about');
    else if (skillsInView) setActiveSection('skills');
    else if (contactInView) setActiveSection('contact');
  }, [homeInView, projectsInView, aboutInView, skillsInView, contactInView]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle
  useEffect(() => {
    // Check for system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  const projects = [
    {
      id: 1,
      title: 'K&G Golf Fashion Co., Ltd',
      description:
        'A static website for showcasing golf apparel and products for K&G Golf. Built with modern design and responsive layout.',
      image: '/images/kng.png',
      tags: ['React.js', 'Tailwind CSS'],
      liveUrl: 'https://keepgoinggolf.com',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'New Element',
      description:
        'A professional business website designed to represent New Element’s services and presence online.',
      image: '/images/newelement.png',
      tags: ['React.js', 'Tailwind CSS'],
      liveUrl: 'https://phnei.com',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Golftime',
      description:
        'A feature-rich web application with modules for task management, event planning, employee tracking, CMS, and attendance (coming soon).',
      image: '/images/golftime.png',
      tags: ['Laravel', 'Inertia.js', 'React.js', 'Tailwind CSS'],
      liveUrl: 'https://golftimeph.online',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Aces Marine and Links Industrial Corporation',
      description:
        'An ongoing internal web application project featuring inventory management, attendance tracking, employee (job and department) management, loan handling, and payroll processing.',
      image: '/images/amlic.png',
      tags: ['Laravel', 'Inertia.js', 'React.js', 'Tailwind CSS'],
      liveUrl: 'https://systems.acesmarinelinks.com',
      githubUrl: '#',
      status: 'Ongoing',
    },
  ];

  // Skills data
  const skills = {
    frontend: [
      'HTML & CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Java',
      'Springboot',
      'Laravel',
    ],
    tools: [
      'Git & GitHub',
      'Figma',
      'VS Code',
      'Responsive Design',
      'Vercel / Netlify',
    ],
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_anf6qf3', 'template_qccmoc7', form.current, {
        publicKey: 'OwvdmFh1ANAB9PdVE',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          form.current.reset();
          toast('Your message has been sent!');
        },
        (error) => {
          console.log('FAILED...', error);
          toast('Something went wrong. Please try again later.');
        },
      );
  };

  return (
    <div className="flex min-h-[90vh] justify-center flex-col content-center items-center w-full">
      {/* Header */}
      <header
        className={`fixed top-0 w-full flex justify-center z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur border-b'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex p-4 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-primary">Renz</span>
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex flex-wrap flex-1 justify-end gap-8"
            >
              {[
                { href: '#home', label: 'Home', id: 'home' },
                { href: '#projects', label: 'Projects', id: 'projects' },
                { href: '#about', label: 'About', id: 'about' },
                { href: '#skills', label: 'Skills', id: 'skills' },
                { href: '#contact', label: 'Contact', id: 'contact' },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative font-medium transition-colors hover:text-primary ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </motion.nav>

            {/* Theme toggle button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="mb-4">
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {[
                    { href: '#home', label: 'Home', id: 'home' },
                    { href: '#projects', label: 'Projects', id: 'projects' },
                    { href: '#about', label: 'About', id: 'about' },
                    { href: '#skills', label: 'Skills', id: 'skills' },
                    { href: '#contact', label: 'Contact', id: 'contact' },
                  ].map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`text-lg font-medium ${
                        activeSection === item.id
                          ? 'text-primary'
                          : 'text-foreground'
                      }`}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={18} />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full pt-16">
        {/* Hero Section */}
        <section
          id="home"
          ref={homeRef}
          className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden w-full justify-center"
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
          </div>

          <div className="section-container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-2 md:order-1 flex flex-col justify-center space-y-6"
              >
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Badge variant="outline" className="mb-4 text-sm px-3 py-1">
                      Web Developer
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none"
                  >
                    Hello, I'm{' '}
                    <span className="text-primary relative">
                      Renz
                      <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10"></span>
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-4 text-xl text-muted-foreground md:text-2xl max-w-[600px] leading-relaxed text-pretty"
                  >
                    A dedicated web developer focused on crafting visually
                    engaging and user-friendly digital experiences.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <Button asChild size="lg" className="rounded-full group">
                    <Link href="#contact">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full"
                  >
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex gap-4 mt-8"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={20} />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -z-10 w-72 h-72 rounded-full border-8 border-dashed border-primary/20 animate-spin-slow"></div>
                  <div className="absolute -z-10 w-80 h-80 rounded-full border-2 border-primary/10"></div>

                  <div className="relative flex shadow-2xl overflow-hidden rounded-full border-4 border-background w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
                    <img
                      src="/images/photo.jpg"
                      alt="Profile"
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <span className="text-sm text-muted-foreground mb-2">
                Scroll Down
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronDown className="h-6 w-6 text-muted-foreground" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className="min-h-[90vh] content-center section-gradient-1 w-full flex justify-center"
        >
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">
                My Work
              </Badge>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Explore a selection of my recent work showcasing my skills and
                expertise in web development.
              </p>
            </motion.div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden group card-hover p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className="object-contain px-6 w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="skill-badge"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4 pt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 group/btn"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>{project.liveUrl}</span>
                              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-3.5 w-3.5" />
                              <span>Code</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full group"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className="min-h-[90vh] content-center bg-background w-full flex justify-center"
        >
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">
                About Me
              </Badge>
              <h2 className="section-title">My Journey</h2>
              <p className="section-subtitle">
                Passionate about creating elegant solutions to complex problems
              </p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg"></div>
                  <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg"></div>

                  <div className="bg-muted/30 p-6 rounded-lg border">
                    <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                    <div className="space-y-4 text-lg">
                      <p>
                        I'm a passionate web developer with a keen eye for
                        design and a commitment to creating exceptional user
                        experiences. My journey in web development began with
                        curiosity and has evolved into a fulfilling career.
                      </p>
                      <p>
                        I specialize in building responsive, accessible, and
                        performant web applications using modern technologies
                        and best practices.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg"></div>
                  <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg"></div>

                  <div className="bg-muted/30 p-6 rounded-lg border">
                    <h3 className="text-2xl font-bold mb-4">My Approach</h3>
                    <div className="space-y-4 text-lg">
                      <p>
                        I believe in writing clean, maintainable code and
                        staying current with emerging technologies and best
                        practices. I approach each project with a focus on
                        solving real problems and delivering value.
                      </p>
                      <p>
                        When I'm not coding, I enjoy gaming, listening to music,
                        and hanging out with friends.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-16 text-center"
              >
                <a href="/files/Pilande_CV.pdf" download="Pilande_CV.pdf">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full group"
                  >
                    Download Resume
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={skillsRef}
          className="min-h-[90vh] content-center section-gradient-1 w-full flex justify-center"
        >
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">
                Expertise
              </Badge>
              <h2 className="section-title">My Skills</h2>
              <p className="section-subtitle">
                A comprehensive set of technical skills I've developed
                throughout my career
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground">
                          <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Frontend</h3>
                      </div>
                      <ul className="space-y-3">
                        {skills.frontend.map((skill, index) => (
                          <motion.li
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {skill}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group"
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground">
                          <Server className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Backend</h3>
                      </div>
                      <ul className="space-y-3">
                        {skills.backend.map((skill, index) => (
                          <motion.li
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {skill}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group"
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground">
                          <Wrench className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Tools & Others</h3>
                      </div>
                      <ul className="space-y-3">
                        {skills.tools.map((skill, index) => (
                          <motion.li
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {skill}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className="min-h-[90vh] content-center bg-background relative overflow-hidden w-full flex justify-center"
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
          </div>

          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-16"
            >
              <Badge variant="outline" className="mb-4">
                Contact
              </Badge>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Have a project in mind or want to discuss potential
                opportunities? I'd love to hear from you!
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        Contact Information
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Feel free to reach out to me for any inquiries, project
                        proposals, or just to say hello!
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4 group hover-lift">
                          <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Email
                            </p>
                            <a
                              href="mailto:renzjohnpilande@gmail"
                              className="font-medium hover:text-primary transition-colors"
                            >
                              renzjohnpilande@gmail
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 group hover-lift">
                          <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground">
                            <Linkedin className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              LinkedIn
                            </p>
                            <a
                              href="https://www.linkedin.com/in/renz-john-pilande-474685245/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium hover:text-primary transition-colors"
                            >
                              linkedin.com/in/renz-john-pilande-474685245/
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 group hover-lift">
                          <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground">
                            <Github className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              GitHub
                            </p>
                            <a
                              href="https://github.com/RenzJohnPilande"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium hover:text-primary transition-colors"
                            >
                              github.com/RenzJohnPilande
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        Send Me a Message
                      </h3>
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-4"
                      >
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="user_name"
                              className="text-sm font-medium"
                            >
                              Name
                            </label>
                            <Input
                              id="user_name"
                              name="user_name"
                              placeholder="Your name"
                              className="border-2 focus-visible:ring-primary"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email
                            </label>
                            <Input
                              id="user_email"
                              name="user_email"
                              type="email"
                              placeholder="Your email"
                              className="border-2 focus-visible:ring-primary"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                            className="border-2 focus-visible:ring-primary"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            className="min-h-[120px] border-2 focus-visible:ring-primary"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full group"
                        >
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-center border-t py-8 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Renz. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://github.com/RenzJohnPilande"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/renz-john-pilande-474685245/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="mailto:renzjohnpilande@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
