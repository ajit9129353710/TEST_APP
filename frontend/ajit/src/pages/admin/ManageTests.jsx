import { useEffect, useState } from "react";
import { Plus, Trash2, ClipboardList, Clock, BookOpen } from "lucide-react";
import api from "../../services/api";
import Loader from "../../components/Loader";

function ManageTests() {
const [tests, setTests] = useState([]);
const [questions, setQuestions] = useState([]);
const [loading, setLoading] = useState(true);
const [saving, setSaving] = useState(false);
const [showForm, setShowForm] = useState(false);

const [formData, setFormData] = useState({
title: "",
description: "",
subject: "",
duration: 30,
questions: [],
});

const fetchData = async () => {
try {
setLoading(true);

  const [testResponse, questionResponse] = await Promise.all([
    api.get("/tests"),
    api.get("/questions"),
  ]);

  setTests(testResponse.data.tests || []);
  setQuestions(
    questionResponse.data.questions || questionResponse.data || []
  );
} catch (error) {
  alert(error.response?.data?.message || "Failed to load data");
} finally {
  setLoading(false);
}

};

useEffect(() => {
fetchData();
}, []);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleQuestionSelect = (questionId) => {
setFormData((previous) => ({
...previous,
questions: previous.questions.includes(questionId)
? previous.questions.filter((id) => id !== questionId)
: [...previous.questions, questionId],
}));
};

const totalMarks = questions
.filter((question) => formData.questions.includes(question._id))
.reduce((total, question) => total + Number(question.marks || 0), 0);

const handleSubmit = async (e) => {
e.preventDefault();

if (formData.questions.length === 0) {
  alert("Please select at least one question");
  return;
}

try {
  setSaving(true);

  await api.post("/tests", {
    ...formData,
    duration: Number(formData.duration),
  });

  alert("Test created successfully!");

  setFormData({
    title: "",
    description: "",
    subject: "",
    duration: 30,
    questions: [],
  });

  setShowForm(false);
  fetchData();
} catch (error) {
  alert(error.response?.data?.message || "Failed to create test");
} finally {
  setSaving(false);
}

};

const handleDelete = async (id) => {
const confirmDelete = window.confirm(
"Are you sure you want to delete this test?"
);

if (!confirmDelete) return;

try {
  await api.delete(`/tests/${id}`);
  alert("Test deleted successfully");
  fetchData();
} catch (error) {
  alert(error.response?.data?.message || "Failed to delete test");
}

};

if (loading) return <Loader />;

return (
<div className="manage-tests-page">
<div className="admin-page-header">
<div>
<h1>Manage Tests</h1>
<p>Create and manage online tests.</p>
</div>

    <button
      className="admin-primary-btn"
      onClick={() => setShowForm(!showForm)}
    >
      <Plus size={18} />
      Create Test
    </button>
  </div>

  {showForm && (
    <form className="test-create-form" onSubmit={handleSubmit}>
      <h2>Create New Test</h2>

      <div className="test-form-grid">
        <div className="form-group">
          <label>Test Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter test title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Example: JavaScript"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Duration (Minutes)</label>
          <input
            type="number"
            name="duration"
            min="1"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter test description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="question-selection">
        <div className="question-selection-header">
          <h3>Select Questions</h3>
          <span>{formData.questions.length} Selected</span>
        </div>

        {questions.length === 0 ? (
          <p className="empty-message">
            No questions available. Please add questions first.
          </p>
        ) : (
          <div className="question-checkbox-list">
            {questions.map((question, index) => (
              <label className="question-checkbox" key={question._id}>
                <input
                  type="checkbox"
                  checked={formData.questions.includes(question._id)}
                  onChange={() => handleQuestionSelect(question._id)}
                />

                <span>
                  {index + 1}.{" "}
                  {question.questionText ||
                    question.question ||
                    question.text ||
                    "Question"}
                  <small>
                    {question.subject || "General"} ·{" "}
                    {question.marks || 0} Marks
                  </small>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="test-form-summary">
        <span>Selected Questions: {formData.questions.length}</span>
        <span>Total Marks: {totalMarks}</span>
      </div>

      <div className="test-form-actions">
        <button
          type="button"
          className="admin-secondary-btn"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="admin-primary-btn"
          disabled={saving || questions.length === 0}
        >
          {saving ? "Creating..." : "Create Test"}
        </button>
      </div>
    </form>
  )}

  <div className="tests-list-header">
    <h2>All Tests</h2>
    <span>{tests.length} Tests</span>
  </div>

  {tests.length === 0 ? (
    <div className="admin-empty-state">
      <ClipboardList size={42} />
      <h3>No Tests Found</h3>
      <p>Create your first online test.</p>
    </div>
  ) : (
    <div className="admin-tests-grid">
      {tests.map((test) => (
        <div className="admin-test-card" key={test._id}>
          <div className="admin-test-card-top">
            <div className="admin-test-icon">
              <ClipboardList size={22} />
            </div>

            <button
              className="admin-delete-btn"
              onClick={() => handleDelete(test._id)}
              title="Delete Test"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <h3>{test.title}</h3>
          <p>{test.description || "No description available."}</p>

          <div className="admin-test-subject">
            <BookOpen size={16} />
            {test.subject}
          </div>

          <div className="admin-test-details">
            <span>
              <Clock size={16} />
              {test.duration} Minutes
            </span>

            <span>
              {test.totalMarks} Marks
            </span>
          </div>

          <div className="admin-test-status">
            <span className="status-active">Active</span>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

);
}

export default ManageTests;