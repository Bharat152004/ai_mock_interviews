import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EducationPage() {
  return (
    <div className="education-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-content">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/final_logo.png"
              alt="MockWise Logo"
              width={50}
              height={50}
            />
            <span className="logo-text">MockWise</span>
          </Link>

          <div className="nav-links">
            <Link href="/education">Education</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#about">About Us</Link>
            <Link href="#blog">Blog</Link>
          </div>

          <div className="nav-actions">
            <Link href="/sign-in">
              <Button variant="ghost" className="btn-login">
                Log in
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="btn-signup">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="education-hero">
        <div className="education-hero-content">
          <div className="education-hero-text">
            <h1 className="education-title">
              Master Every
              <br />
              Interview Format
            </h1>
            <p className="education-subtitle">
              Choose your path and learn with real examples, AI analysis, and
              curated lessons.
            </p>
            <Link href="/sign-in">
              <Button className="btn-hero">Get Started Free</Button>
            </Link>
          </div>

          <div className="education-hero-image">
            <div className="illustration-container">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Learning Illustration"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interview Types Section */}
      <section className="interview-types-section">
        <div className="interview-types-grid">
          <div className="interview-type-card">
            <div className="card-icon video-icon">🎥</div>
            <h3>Technical Interviews</h3>
            <p className="card-description">
              DSA, System Design, OOP, DBMS, Web Dev, CS fundamentals
            </p>
            <Link href="/sign-in">
              <Button className="btn-card-link">
                Explore Technical Modules →
              </Button>
            </Link>
          </div>

          <div className="interview-type-card">
            <div className="card-icon chat-icon">💬</div>
            <h3>Behavioral Interviews</h3>
            <p className="card-description">
              STAR method, communication, leadership, teamwork, problem-solving
            </p>
            <Link href="/sign-in">
              <Button className="btn-card-link">
                Start Behavioral Training →
              </Button>
            </Link>
          </div>

          <div className="interview-type-card">
            <div className="card-icon document-icon">📝</div>
            <h3>Written Assessment Prep</h3>
            <p className="card-description">
              Aptitude, email writing, report writing, grammar, logical
              reasoning
            </p>
            <Link href="/sign-in">
              <Button className="btn-card-link">
                Practice Written Tests →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Dashboard Section */}
      <section className="dashboard-section">
        <h2 className="dashboard-title">Your Learning Dashboard</h2>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="dashboard-card-image">
              <Image
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
                alt="Today's Lesson"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4>Today&apos;s Lesson</h4>
            <p>Dive into your next scheduled topic.</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-image">
              <Image
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop"
                alt="Recommended Topics"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4>Recommended Topics</h4>
            <p>Personalized suggestions for you.</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-image">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                alt="Mock Tests"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4>Mock Tests</h4>
            <p>Practice with AI-driven mock interviews.</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-image">
              <Image
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
                alt="Interview Tips"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4>Interview Tips</h4>
            <p>Quick reads to boost your confidence.</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2 className="courses-title">Explore All Courses</h2>
        <p className="courses-subtitle">
          Find the perfect module to sharpen your skills.
        </p>

        <div className="courses-table">
          <div className="table-header">
            <div className="header-cell">TOPIC</div>
            <div className="header-cell">DURATION</div>
            <div className="header-cell">DIFFICULTY</div>
            <div className="header-cell">AI RATING</div>
            <div className="header-cell"></div>
          </div>

          <div className="table-row">
            <div className="table-cell">Binary Search Trees</div>
            <div className="table-cell">45 mins</div>
            <div className="table-cell">
              <span className="badge badge-easy">Easy</span>
            </div>
            <div className="table-cell rating">4.8 ⭐</div>
            <div className="table-cell">
              <Link href="/sign-in">
                <Button className="btn-start">Start</Button>
              </Link>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell">
              Answering &quot;Tell me about yourself&quot;
            </div>
            <div className="table-cell">20 mins</div>
            <div className="table-cell">
              <span className="badge badge-easy">Easy</span>
            </div>
            <div className="table-cell rating">4.9 ⭐</div>
            <div className="table-cell">
              <Link href="/sign-in">
                <Button className="btn-start">Start</Button>
              </Link>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell">System Design: Scaling a Web App</div>
            <div className="table-cell">1.5 hours</div>
            <div className="table-cell">
              <span className="badge badge-hard">Hard</span>
            </div>
            <div className="table-cell rating">4.7 ⭐</div>
            <div className="table-cell">
              <Link href="/sign-in">
                <Button className="btn-start">Start</Button>
              </Link>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell">Crafting a Professional Email</div>
            <div className="table-cell">30 mins</div>
            <div className="table-cell">
              <span className="badge badge-medium">Medium</span>
            </div>
            <div className="table-cell rating">4.6 ⭐</div>
            <div className="table-cell">
              <Link href="/sign-in">
                <Button className="btn-start">Start</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="education-footer">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>PRODUCT</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#updates">Updates</a>
          </div>

          <div className="footer-section">
            <h4>COMPANY</h4>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>

          <div className="footer-section">
            <h4>RESOURCES</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#community">Community</a>
          </div>

          <div className="footer-section">
            <h4>LEGAL</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom-line">
          <p>© 2024 MockWise. All rights reserved.</p>
          <div className="social-icons">
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
