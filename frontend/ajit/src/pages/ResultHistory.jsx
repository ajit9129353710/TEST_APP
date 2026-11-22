import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Calendar, Eye, BookOpen } from "lucide-react";
import api from "../services/api";
import Loader from "../components/Loader";

const ResultHistory = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get("/results/history");

        const data = response.data.results || response.data;
        setResults(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          err.response?.data?.message || "Unable to load result history."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <Loader text="Loading result history..." />;

  return (
    <div className="history-page">
      <div className="history-header">
        <div>
          <span>YOUR PERFORMANCE</span>
          <h1>Result History</h1>
          <p>Track your previous test attempts and performance.</p>
        </div>

        <div className="history-header-icon">
          <Trophy size={35} />
        </div>
      </div>

      <div className="history-count">
        <BookOpen size={22} />
        <div>
          <h3>{results.length}</h3>
          <p>Tests Attempted</p>
        </div>
      </div>

      {error && <div className="form-error">{error}</div>}

      {!error && results.length === 0 && (
        <div className="history-empty">
          <BookOpen size={45} />
          <h3>No Results Yet</h3>
          <p>You have not attempted any tests yet.</p>
          <Link to="/dashboard">Explore Tests</Link>
        </div>
      )}

      <div className="history-list">
        {results.map((result) => (
          <div className="history-card" key={result._id}>
            <div className="history-card-main">
              <div className="history-test-icon">
                <BookOpen size={23} />
              </div>

              <div>
                <h3>{result.test?.title || "Test"}</h3>
                <p>{result.test?.subject || "Online Test"}</p>

                <span className="history-date">
                  <Calendar size={14} />
                  {result.createdAt
                    ? new Date(result.createdAt).toLocaleDateString()
                    : "Date unavailable"}
                </span>
              </div>
            </div>

            <div className="history-score">
              <strong>
                {result.score} / {result.totalMarks}
              </strong>
              <span>
                {Number(result.percentage || 0).toFixed(2)}%
              </span>
            </div>

            <span
              className={`history-status ${
                result.status === "Pass" ? "history-pass" : "history-fail"
              }`}
            >
              {result.status || "Completed"}
            </span>

            <Link
              to={`/result/${result._id}`}
              className="history-view-button"
            >
              <Eye size={17} />
              View Result
            </Link>
          </div>
        ))}
      </div>

      <div className="history-footer">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default ResultHistory;