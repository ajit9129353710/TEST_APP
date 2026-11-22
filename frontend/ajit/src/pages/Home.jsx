import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  Trophy,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Multiple Choice Tests",
      description: "Practice with subject-wise MCQ questions.",
    },
    {
      icon: Clock,
      title: "Timed Examinations",
      description: "Complete tests within the given time limit.",
    },
    {
      icon: Trophy,
      title: "Instant Results",
      description: "Get your score and performance immediately.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description: "Protected student and administrator accounts.",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">
            <CheckCircle size={15} />
            Smart Online Examination Platform
          </span>

          <h1>
            Test Your Knowledge.
            <span> Improve Your Skills.</span>
          </h1>

          <p>
            Prepare for success with online MCQ tests, timed examinations,
            instant results and performance tracking.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started <ArrowRight size={18} />
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>

          <div className="hero-points">
            <span><CheckCircle size={16} /> Easy to Use</span>
            <span><CheckCircle size={16} /> Instant Results</span>
            <span><CheckCircle size={16} /> Secure Login</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="exam-card">
            <div className="exam-card-header">
              <BookOpen size={23} />
              <span>Online Examination</span>
            </div>

            <div className="exam-progress">
              <div>
                <span>Test Progress</span>
                <strong>75%</strong>
              </div>
              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>
            </div>

            <h3>What is the output of 2 + 2?</h3>

            <div className="exam-option">A. 2</div>
            <div className="exam-option selected">B. 4 ✓</div>
            <div className="exam-option">C. 6</div>
            <div className="exam-option">D. 8</div>

            <div className="exam-card-footer">
              <Clock size={16} />
              <span>Time Remaining: 15:30</span>
            </div>
          </div>

          <div className="floating-score">
            <Trophy size={22} />
            <div>
              <strong>Excellent!</strong>
              <span>Keep Learning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>OUR FEATURES</span>
          <h2>Everything You Need to Test Your Skills</h2>
          <p>A simple and powerful platform for online examinations.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <Icon size={27} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Test?</h2>
        <p>Create your account and start improving your knowledge today.</p>
        <Link to="/register" className="primary-btn">
          Create Free Account <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Home;