import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function About() {
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
            <Link href="/about" className="text-foreground hover:text-primary transition font-semibold text-primary">
              About
            </Link>
            <Link href="/programs" className="text-foreground hover:text-primary transition">
              Programs
            </Link>
            <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition font-semibold">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight animate-slideUp">
            About Our <span className="text-primary">Partnership</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-slideUp animation-delay-100">
            A strategic alliance between two leading institutions in engineering education and digital learning.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Kongu Section */}
          <div className="mb-16 animate-slideUp animation-delay-100">
            <h2 className="text-4xl font-bold mb-6 text-primary">Kongu Engineering College</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Kongu Engineering College, established with a vision to provide quality technical education, has been a beacon of excellence in engineering academia. Located in the heart of Tamil Nadu, the institution is known for its commitment to developing skilled professionals who can contribute meaningfully to society.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With state-of-the-art infrastructure, experienced faculty, and industry partnerships, Kongu Engineering College has consistently produced graduates who excel in their respective fields across the globe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">AICTE Approved Institution</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">NBA Accredited Programs</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">Strong Alumni Network</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">Industry Collaborations</span>
              </div>
            </div>
          </div>

          {/* GUVI Section */}
          <div className="mb-16 pt-12 border-t border-border animate-slideUp animation-delay-200">
            <h2 className="text-4xl font-bold mb-6 text-primary">GUVI</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              GUVI is India's leading online learning platform specializing in hands-on tech education. With a mission to democratize quality tech education, GUVI has trained hundreds of thousands of students in emerging technologies and in-demand skills through interactive, project-based learning.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Known for its industry-relevant curriculum and placement support, GUVI bridges the gap between academic learning and industry requirements, ensuring students are job-ready upon completion of their courses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">500K+ Students Trained</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">Industry-Driven Curriculum</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">Job Guarantee Programs</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-muted-foreground">Live Mentoring Sessions</span>
              </div>
            </div>
          </div>

          {/* Why This Partnership Section */}
          <div className="pt-12 border-t border-border animate-slideUp animation-delay-300">
            <h2 className="text-4xl font-bold mb-6 text-primary">Why This Partnership?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The collaboration between Kongu Engineering College and GUVI combines the best of both worlds: the academic rigor and infrastructure of a premier engineering institution with the innovative, practical-focused learning approach of a leading ed-tech platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-400">
                <h3 className="text-xl font-semibold mb-3">For Students</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Access to cutting-edge curriculum designed by industry experts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Mentoring from both academic and industry professionals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Guaranteed internship and placement opportunities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Hands-on project experience with real-world applications</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-500">
                <h3 className="text-xl font-semibold mb-3">For Institutions</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Enhanced student employability and placement rates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Access to industry-ready learning resources</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Strengthened industry relationships and partnerships</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Continuous curriculum updates aligned with market trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slideUp">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-100">
              <h3 className="text-2xl font-semibold mb-3 text-primary">Full Stack Development</h3>
              <p className="text-muted-foreground mb-4">
                Master web development from frontend to backend with real-world projects and industry mentors.
              </p>
              <Link href="/programs" className="text-primary hover:text-accent transition font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-200">
              <h3 className="text-2xl font-semibold mb-3 text-primary">Data Science & AI</h3>
              <p className="text-muted-foreground mb-4">
                Explore machine learning, artificial intelligence, and data analytics with hands-on practice.
              </p>
              <Link href="/programs" className="text-primary hover:text-accent transition font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-300">
              <h3 className="text-2xl font-semibold mb-3 text-primary">Mobile App Development</h3>
              <p className="text-muted-foreground mb-4">
                Build iOS and Android applications using latest frameworks and technologies.
              </p>
              <Link href="/programs" className="text-primary hover:text-accent transition font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-3xl font-bold mb-4">Join the Revolution in Tech Education</h2>
          <p className="text-muted-foreground mb-8">
            Be part of a transformative learning experience that bridges education and industry.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition font-semibold hover:scale-105 transform">
              Enroll Now
            </button>
            <Link href="/" className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition font-semibold hover:scale-105 transform">
              Back to Home
            </Link>
          </div>
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
