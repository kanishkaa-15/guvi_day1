import Link from 'next/link'
import { BookOpen, Clock, Award, ArrowRight, Users, TrendingUp, Code } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      title: 'Full Stack Development',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      description: 'Master modern web development with MERN stack, covering frontend, backend, and database technologies.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'Responsive Design'],
      icon: Code,
      delay: 'animation-delay-100',
    },
    {
      title: 'Data Science & AI',
      duration: '5 Months',
      level: 'Intermediate to Advanced',
      description: 'Explore machine learning, data analysis, and AI algorithms with real-world projects and datasets.',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Visualization', 'TensorFlow'],
      icon: TrendingUp,
      delay: 'animation-delay-200',
    },
    {
      title: 'Mobile App Development',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      description: 'Build cross-platform mobile applications using React Native and modern development practices.',
      skills: ['React Native', 'Firebase', 'State Management', 'Mobile UI/UX', 'Debugging', 'Deployment'],
      icon: Users,
      delay: 'animation-delay-300',
    },
    {
      title: 'Cloud & DevOps',
      duration: '4 Months',
      level: 'Intermediate',
      description: 'Learn containerization, CI/CD pipelines, and cloud deployment with Docker, Kubernetes, and AWS.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Infrastructure as Code'],
      icon: Award,
      delay: 'animation-delay-400',
    },
    {
      title: 'Web3 & Blockchain',
      duration: '3 Months',
      level: 'Advanced',
      description: 'Dive into blockchain technology, smart contracts, and decentralized applications development.',
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'DeFi', 'NFTs'],
      icon: BookOpen,
      delay: 'animation-delay-500',
    },
    {
      title: 'UI/UX Design',
      duration: '3 Months',
      level: 'Beginner to Intermediate',
      description: 'Create beautiful and user-friendly interfaces with design principles, tools, and best practices.',
      skills: ['Figma', 'UI/UX Principles', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
      icon: TrendingUp,
      delay: 'animation-delay-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            KONGU × GUVI
          </div>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/programs" className="text-foreground hover:text-primary transition font-semibold text-primary">
              Programs
            </Link>
            <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition font-semibold">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight animate-slideUp">
            Our <span className="text-primary">Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-slideUp animation-delay-100">
            Comprehensive courses designed to make you industry-ready with cutting-edge skills and hands-on experience.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg bg-card border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp ${program.delay}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>

                  <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      <span>{program.level}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition font-semibold flex items-center justify-center gap-2 group">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slideUp">Why Choose Our Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slideUp animation-delay-100">
              <div className="flex gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                  <p className="text-muted-foreground">
                    Learn from industry professionals with years of experience in their respective fields.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-slideUp animation-delay-200">
              <div className="flex gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
                  <p className="text-muted-foreground">
                    Work on real-world projects that mirror industry challenges and requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-slideUp animation-delay-300">
              <div className="flex gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Certifications</h3>
                  <p className="text-muted-foreground">
                    Earn recognized certifications that boost your career prospects and credibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-slideUp animation-delay-400">
              <div className="flex gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Support</h3>
                  <p className="text-muted-foreground">
                    Get career guidance, interview preparation, and placement assistance from our dedicated team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8">
            Choose a program that aligns with your career goals and start learning today.
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition font-semibold hover:scale-105 transform">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">KONGU × GUVI</h4>
              <p className="text-muted-foreground text-sm">
                Building the future of technology education through strategic collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
                <li><Link href="/programs" className="hover:text-primary transition">Programs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@kongu-guvi.edu</li>
                <li>Phone: +91 XXXX XXXX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Kongu Engineering College & GUVI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
