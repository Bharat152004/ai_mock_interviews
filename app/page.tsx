import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-content">
          <div className="flex items-center gap-2">
            <Image
              src="/final_logo.png"
              alt="MockWise Logo"
              width={50}
              height={50}
            />
            <span className="logo-text">MockWise</span>
          </div>

          <div className="nav-links">
            <Link href="/education">Education</Link>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>

          <div className="nav-actions">
            <Link href="/sign-in">
              <Button variant="ghost" className="btn-login">
                Log in
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="btn-get-started">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Ace Your Next
              <br />
              Interview with AI
            </h1>
            <p className="hero-subtitle">
              Real-time feedback • Personalized questions • Confidence score
            </p>
            <Link href="/sign-in">
              <Button className="btn-hero">Get Started Free</Button>
            </Link>
          </div>

          <div className="hero-image">
            <div className="dashboard-preview">
              <div className="chart-container animate-float">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="Analytics Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="decorative-elements">
                <div className="float-element element-1">📊</div>
                <div className="float-element element-2">💼</div>
                <div className="float-element element-3">🎯</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">How MockWise Helps You Succeed</h2>
        <p className="section-subtitle">
          Our platform is designed to give you the edge in any interview
          scenario. Discover the tools that will build your confidence and
          sharpen your skills.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Smart Question Generator</h3>
            <p>
              Receive a tailored set of questions based on your target role and
              industry. Know what to expect.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Feedback</h3>
            <p>
              Get real-time, actionable critique on your answers, body language,
              and speaking pace.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Improvement Plan</h3>
            <p>
              Track your progress over time with a personalized plan tailored to
              your areas for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="featured-section">
        <p className="featured-text">AS FEATURED IN</p>
        <div className="featured-logos">
          <div className="company-logo">TechCrunch</div>
          <div className="company-logo">Forbes</div>
          <div className="company-logo">Wired</div>
          <div className="company-logo">The Verge</div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <div className="testimonial-avatar">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Sarah"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <p className="testimonial-text">
            "MockWise was a game-changer for my job hunt. The AI feedback was
            incredibly detailed and helped me build the confidence I needed to
            land my dream job!"
          </p>
          <p className="testimonial-author">
            Sarah L. - Product Manager at TechCorp
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2 className="section-title">Find the perfect plan</h2>
        <p className="section-subtitle">
          Start for free and upgrade when you're ready to take your interview
          skills to the next level.
        </p>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card starter-card">
            <div className="plan-badge">Most Popular</div>
            <h3 className="plan-name">Starter</h3>
            <div className="plan-price">
              <span className="price">$0</span>
              <span className="price-period">/3 interviews</span>
            </div>
            <p className="plan-description">Free for your first 3 interviews</p>

            <ul className="plan-features">
              <li>✓ AI Question Generation</li>
              <li>✓ Basic Performance Feedback</li>
              <li>✓ 3 Interview Sessions</li>
            </ul>

            <Link href="/sign-in">
              <Button className="btn-plan-starter">Start Free</Button>
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card">
            <h3 className="plan-name">Pro</h3>
            <div className="plan-price">
              <span className="price">$29</span>
              <span className="price-period">/month</span>
            </div>
            <p className="plan-description">For dedicated job seekers</p>

            <ul className="plan-features">
              <li>✓ Everything in Starter, plus</li>
              <li>✓ Unlimited Interviews</li>
              <li>✓ In-depth Body Language Analysis</li>
              <li>✓ Personalized Improvement Plans</li>
            </ul>

            <Link href="/sign-in">
              <Button className="btn-plan">Choose Pro</Button>
            </Link>
          </div>

          {/* Teams Plan */}
          <div className="pricing-card">
            <h3 className="plan-name">Teams</h3>
            <div className="plan-price">
              <span className="price">Custom</span>
            </div>
            <p className="plan-description">For bootcamps and institutions</p>

            <ul className="plan-features">
              <li>✓ Everything in Pro, plus</li>
              <li>✓ Team Dashboard</li>
              <li>✓ Cohort Progress Tracking</li>
              <li>✓ Priority Support</li>
            </ul>

            <Link href="/sign-in">
              <Button className="btn-plan">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="flex items-center gap-2">
              <Image
                src="/final_logo.png"
                alt="MockWise Logo"
                width={24}
                height={24}
              />
              <span className="logo-text">MockWise</span>
            </div>
            <p className="footer-tagline">
              Level your dream job hunt with AI-powered practice.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#updates">Updates</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 MockWise. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" aria-label="GitHub">
              ⚡
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
