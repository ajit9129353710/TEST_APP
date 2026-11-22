import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";
import api from "../../services/api";
import Loader from "../../components/Loader";

const initialForm = {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 0,
  subject: "",
  marks: 1,
};

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await api.get("/questions");
      const data = response.data.questions || response.data;
      setQuestions(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load questions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const updateOption = (index, value) => {
    const updatedOptions = [...form.options];
    updatedOptions[index] = value;
    setForm({ ...form, options: updatedOptions });
  };

  const openAddForm = () => {
    setEditingId(null);
    setForm(initialForm);
    setMessage("");
    setError("");
    setShowForm(true);
  };

  const openEditForm = (question) => {
    setEditingId(question._id);
    setForm({
      question: question.question || "",
      options: question.options || ["", "", "", ""],
      correctAnswer: question.correctAnswer ?? 0,
      subject: question.subject || "",
      marks: question.marks || 1,
    });
    setMessage("");
    setError("");
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const payload = {
        ...form,
        correctAnswer: Number(form.correctAnswer),
        marks: Number(form.marks),
      };

      if (editingId) {
        await api.put(`/questions/${editingId}`, payload);
        setMessage("Question updated successfully.");
      } else {
        await api.post("/questions", payload);
        setMessage("Question added successfully.");
      }

      setShowForm(false);
      setForm(initialForm);
      setEditingId(null);
      await fetchQuestions();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to save question.");
    } finally {
      setSaving(false);
    }
  };

  const deleteQuestion = async (id) => {
    if (!window.confirm("Are you sure you want to delete this question?")) {
      return;
    }

    try {
      await api.delete(`/questions/${id}`);
      setMessage("Question deleted successfully.");
      await fetchQuestions();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to delete question.");
    }
  };

  if (loading) return <Loader text="Loading questions..." />;

  return (
    <div className="manage-questions">
      <div className="manage-page-header">
        <div>
          <span>QUESTION MANAGEMENT</span>
          <h1>Manage Questions</h1>
          <p>Add, update and manage your test questions.</p>
        </div>

        <button className="add-question-btn" onClick={openAddForm}>
          <Plus size={18} />
          Add Question
        </button>
      </div>

      {message && <div className="success-message">{message}</div>}
      {error && <div className="form-error">{error}</div>}

      {showForm && (
        <div className="question-form-card">
          <div className="question-form-header">
            <h2>{editingId ? "Edit Question" : "Add New Question"}</h2>
            <button
              className="close-form-btn"
              onClick={() => setShowForm(false)}
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Question</label>
            <textarea
              value={form.question}
              onChange={(e) =>
                setForm({ ...form, question: e.target.value })
              }
              placeholder="Enter your question"
              required
            />

            <label>Options</label>

            <div className="question-options-form">
              {form.options.map((option, index) => (
                <div key={index}>
                  <span>Option {index + 1}</span>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Enter option ${index + 1}`}
                    required
                  />
                </div>
              ))}
            </div>

            <label>Correct Answer</label>
            <select
              value={form.correctAnswer}
              onChange={(e) =>
                setForm({ ...form, correctAnswer: Number(e.target.value) })
              }
            >
              {form.options.map((option, index) => (
                <option key={index} value={index}>
                  Option {index + 1}: {option || "Not entered"}
                </option>
              ))}
            </select>

            <div className="question-form-row">
              <div>
                <label>Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  placeholder="Example: JavaScript"
                  required
                />
              </div>

              <div>
                <label>Marks</label>
                <input
                  type="number"
                  min="1"
                  value={form.marks}
                  onChange={(e) =>
                    setForm({ ...form, marks: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="save-question-btn"
              disabled={saving}
            >
              <Save size={17} />
              {saving ? "Saving..." : editingId ? "Update Question" : "Save Question"}
            </button>
          </form>
        </div>
      )}

      <div className="questions-list-header">
        <h2>All Questions ({questions.length})</h2>
      </div>

      {questions.length === 0 ? (
        <div className="questions-empty">
          <h3>No Questions Found</h3>
          <p>Add your first question to get started.</p>
        </div>
      ) : (
        <div className="questions-list">
          {questions.map((question, index) => (
            <div className="managed-question-card" key={question._id}>
              <div className="managed-question-top">
                <span>Question {index + 1}</span>
                <span className="managed-subject">
                  {question.subject}
                </span>
              </div>

              <h3>{question.question}</h3>

              <div className="managed-options">
                {question.options?.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={
                      optionIndex === question.correctAnswer
                        ? "managed-correct-option"
                        : ""
                    }
                  >
                    <span>{String.fromCharCode(65 + optionIndex)}.</span>
                    {option}
                    {optionIndex === question.correctAnswer && (
                      <strong>Correct</strong>
                    )}
                  </div>
                ))}
              </div>

              <div className="managed-question-footer">
                <span>{question.marks || 1} Marks</span>

                <div>
                  <button onClick={() => openEditForm(question)}>
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button
                    className="delete-question-btn"
                    onClick={() => deleteQuestion(question._id)}
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageQuestions;