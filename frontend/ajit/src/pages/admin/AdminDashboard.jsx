import { useEffect, useState } from "react";
import {
  Users,
  BookOpen,
  FileQuestion,
  Trophy,
  RefreshCw,
} from "lucide-react";
import api from "../../services/api";
import Loader from "../../components/Loader";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const [statsResponse, resultsResponse] = await Promise.all([
        api.get("/admin/stats"),
        api.get("/admin/results"),
      ]);

      setStats(statsResponse.data.stats || statsResponse.data);

      const resultData =
        resultsResponse.data.results || resultsResponse.data;

      setResults(Array.isArray(resultData) ? resultData.slice(0, 5) : []);
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to load admin dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) return <Loader text="Loading admin dashboard..." />;

  const cards = [
    {
      title: "Total Students",
      value: stats?.totalStudents ?? 0,
      icon: Users,
      className: "admin-stat-blue",
    },
    {
      title: "Total Tests",
      value: stats?.totalTests ?? 0,
      icon: BookOpen,
      className: "admin-stat-purple",
    },
    {
      title: "Total Questions",
      value: stats?.totalQuestions ?? 0,
      icon: FileQuestion,
      className: "admin-stat-green",
    },
    {
      title: "Total Results",
      value: stats?.totalResults ?? 0,
      icon: Trophy,
      className: "admin-stat-orange",
    },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <div>
          <span>ADMIN CONTROL PANEL</span>
          <h1>Dashboard Overview</h1>
          <p>Monitor and manage your online test application.</p>
        </div>

        <button onClick={fetchDashboard} className="refresh-button">
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      {error && <div className="form-error">{error}</div>}

      <div className="admin-stats-grid">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div className="admin-stat-card" key={card.title}>
              <div className={`admin-stat-icon ${card.className}`}>
                <Icon size={25} />
              </div>

              <div>
                <p>{card.title}</p>
                <h2>{card.value}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="admin-recent-section">
        <div className="admin-section-heading">
          <div>
            <h2>Recent Test Results</h2>
            <p>Latest student test submissions.</p>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="admin-empty">
            No test results available yet.
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Test</th>
                  <th>Score</th>
                  <th>Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {results.map((result) => (
                  <tr key={result._id}>
                    <td>
                      {result.user?.name || result.user?.email || "Student"}
                    </td>

                    <td>{result.test?.title || "Test"}</td>

                    <td>
                      {result.score} / {result.totalMarks}
                    </td>

                    <td>
                      {Number(result.percentage || 0).toFixed(2)}%
                    </td>

                    <td>
                      <span
                        className={`admin-result-status ${
                          result.status === "Pass"
                            ? "admin-pass"
                            : "admin-fail"
                        }`}
                      >
                        {result.status || "Completed"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;