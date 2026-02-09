import Link from 'next/link'
import { ArrowRight, Users, Zap, Target } from 'lucide-react'

export default function Home() {
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
            Engineering Excellence <span className="text-primary">Meets</span> Digital Innovation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-slideUp animation-delay-100">
            Kongu Engineering College and GUVI join forces to empower students with cutting-edge technology education and industry-ready skills.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-slideUp animation-delay-200">
            <Link href="/about" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition font-semibold flex items-center gap-2 hover:scale-105 transform">
              Explore Partnership <ArrowRight size={20} />
            </Link>
            <button className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition font-semibold hover:scale-105 transform">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-slideUp animation-delay-100">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Students Trained</p>
          </div>
          <div className="text-center animate-slideUp animation-delay-200">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Industry Partners</p>
          </div>
          <div className="text-center animate-slideUp animation-delay-300">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Placement Success</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slideUp">Why This Collaboration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-100">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Ready Curriculum</h3>
              <p className="text-muted-foreground">
                Curriculum designed by industry experts, ensuring students learn the latest technologies and practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-200">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals and experienced educators who guide your journey to excellence.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition hover:scale-105 transform duration-300 animate-slideUp animation-delay-300">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Acceleration</h3>
              <p className="text-muted-foreground">
                Direct pathway to internships, placements, and career opportunities with leading tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of students who have benefited from this powerful collaboration between Kongu Engineering College and GUVI.
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition font-semibold hover:scale-105 transform">
            Get Started Today
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
