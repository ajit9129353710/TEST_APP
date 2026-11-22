import { useEffect, useState } from "react";
import { Users, Search, Mail, Calendar } from "lucide-react";
import api from "../../services/api";
import Loader from "../../components/Loader";

function Students() {
const [students, setStudents] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);

const fetchStudents = async () => {
try {
setLoading(true);
const response = await api.get("/admin/students");
setStudents(response.data.students || []);
} catch (error) {
alert(error.response?.data?.message || "Failed to load students");
} finally {
setLoading(false);
}
};

useEffect(() => {
fetchStudents();
}, []);

const filteredStudents = students.filter((student) => {
const name = student.name || "";
const email = student.email || "";

return (
  name.toLowerCase().includes(search.toLowerCase()) ||
  email.toLowerCase().includes(search.toLowerCase())
);

});

if (loading) return <Loader />;

return (
<div className="manage-students-page">
<div className="admin-page-header">
<div>
<h1>Manage Students</h1>
<p>View all registered students.</p>
</div>

    <div className="students-total">
      <Users size={20} />
      {students.length} Students
    </div>
  </div>

  <div className="students-search-box">
    <Search size={19} />
    <input
      type="text"
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className="students-table-container">
    <div className="students-table-header">
      <h2>Registered Students</h2>
      <span>{filteredStudents.length} Students Found</span>
    </div>

    {filteredStudents.length === 0 ? (
      <div className="admin-empty-state">
        <Users size={42} />
        <h3>No Students Found</h3>
        <p>Registered students will appear here.</p>
      </div>
    ) : (
      <div className="students-table-scroll">
        <table className="students-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Email Address</th>
              <th>Registration Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="student-name-cell">
                    <div className="student-avatar">
                      {(student.name || "S").charAt(0).toUpperCase()}
                    </div>
                    <strong>{student.name || "Student"}</strong>
                  </div>
                </td>

                <td>
                  <span className="student-email">
                    <Mail size={15} />
                    {student.email}
                  </span>
                </td>

                <td>
                  <span className="student-date">
                    <Calendar size={15} />
                    {student.createdAt
                      ? new Date(student.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </td>

                <td>
                  <span className="student-active-badge">
                    Active
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

export default Students;