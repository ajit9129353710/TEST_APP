import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight, FileText } from "lucide-react";
import api from "../services/api";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";

const StudentDashboard = () => {
  const { user } = useAuth();

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await api.get("/tests");
        setTests(response.data.tests || response.data);
      } catch (err) {
        setError(
          err.response?.data?.message || "Unable to load tests"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) {
    return <Loader text="Loading available tests..." />;
  }

  return (
    <div className="student-dashboard">
      <div className="dashboard-welcome">
        <div>
          <span>STUDENT DASHBOARD</span>
          <h1>Welcome, {user?.name}!</h1>
          <p>Choose a test and start improving your knowledge.</p>
        </div>

        <div className="dashboard-icon">
          <BookOpen size={35} />
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <BookOpen size={25} />
          <div>
            <h3>{tests.length}</h3>
            <p>Available Tests</p>
          </div>
        </div>

        <div className="stat-card">
          <FileText size={25} />
          <div>
            <h3>MCQ</h3>
            <p>Test Format</p>
          </div>
        </div>
      </div>

      <div className="tests-heading">
        <div>
          <h2>Available Tests</h2>
          <p>Select a test to begin your examination.</p>
        </div>

        <Link to="/history" className="history-link">
          View My Results
        </Link>
      </div>

      {error && <div className="form-error">{error}</div>}

      {!error && tests.length === 0 && (
        <div className="empty-state">
          <BookOpen size={45} />
          <h3>No Tests Available</h3>
          <p>Please check again later.</p>
        </div>
      )}

      <div className="tests-grid">
        {tests.map((test) => (
          <div className="test-card" key={test._id}>
            <div className="test-card-icon">
              <BookOpen size={25} />
            </div>

            <span className="subject-badge">{test.subject}</span>

            <h3>{test.title}</h3>

            <p>{test.description || "Test your knowledge with this MCQ test."}</p>

            <div className="test-details">
              <span>
                <Clock size={16} />
                {test.duration} Minutes
              </span>

              <span>
                <FileText size={16} />
                {test.questions?.length || 0} Questions
              </span>
            </div>

            <div className="test-card-footer">
              <strong>{test.totalMarks} Marks</strong>

              <Link to={`/test/${test._id}`}>
                Start Test <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;