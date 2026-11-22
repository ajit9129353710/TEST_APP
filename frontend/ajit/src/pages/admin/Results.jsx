import { useEffect, useState } from "react";
import { Search, FileText, Trophy, Calendar } from "lucide-react";
import api from "../../services/api";
import Loader from "../../components/Loader";

function Results() {
const [results, setResults] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);

const fetchResults = async () => {
try {
setLoading(true);
const response = await api.get("/admin/results");
setResults(response.data.results || []);
} catch (error) {
alert(error.response?.data?.message || "Failed to load results");
} finally {
setLoading(false);
}
};

useEffect(() => {
fetchResults();
}, []);

const filteredResults = results.filter((result) => {
const studentName = result.user?.name || "";
const email = result.user?.email || "";
const testTitle = result.test?.title || "";

const value = search.toLowerCase();

return (
  studentName.toLowerCase().includes(value) ||
  email.toLowerCase().includes(value) ||
  testTitle.toLowerCase().includes(value)
);

});

if (loading) return <Loader />;

return (
<div className="admin-results-page">
<div className="admin-page-header">
<div>
<h1>All Test Results</h1>
<p>View and monitor student test performance.</p>
</div>

    <div className="results-total">
      <Trophy size={20} />
      {results.length} Results
    </div>
  </div>

  <div className="results-search-box">
    <Search size={19} />
    <input
      type="text"
      placeholder="Search student or test..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className="results-table-container">
    <div className="results-table-header">
      <h2>Student Results</h2>
      <span>{filteredResults.length} Results Found</span>
    </div>

    {filteredResults.length === 0 ? (
      <div className="admin-empty-state">
        <FileText size={42} />
        <h3>No Results Found</h3>
        <p>Student test results will appear here.</p>
      </div>
    ) : (
      <div className="results-table-scroll">
        <table className="admin-results-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Test</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredResults.map((result, index) => (
              <tr key={result._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="result-student-info">
                    <strong>{result.user?.name || "Unknown"}</strong>
                    <small>{result.user?.email || "N/A"}</small>
                  </div>
                </td>

                <td>
                  <div className="result-test-info">
                    <strong>{result.test?.title || "Deleted Test"}</strong>
                    <small>{result.test?.subject || "N/A"}</small>
                  </div>
                </td>

                <td>
                  <strong>
                    {result.score ?? 0} / {result.totalMarks ?? 0}
                  </strong>
                </td>

                <td>
                  <strong>{Number(result.percentage || 0).toFixed(2)}%</strong>
                </td>

                <td>
                  <span
                    className={
                      String(result.status || "").toLowerCase() === "pass"
                        ? "result-pass-badge"
                        : "result-fail-badge"
                    }
                  >
                    {result.status || "N/A"}
                  </span>
                </td>

                <td>
                  <span className="result-date">
                    <Calendar size={15} />
                    {result.createdAt
                      ? new Date(result.createdAt).toLocaleDateString()
                      : "N/A"}
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
}

export default Results;