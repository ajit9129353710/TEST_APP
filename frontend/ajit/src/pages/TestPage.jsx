import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Clock, ChevronLeft, ChevronRight, Send } from "lucide-react";
import api from "../services/api";
import Loader from "../components/Loader";

const TestPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [test, setTest] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await api.get(`/tests/${id}`);
        const testData = response.data.test || response.data;

        setTest(testData);
        setQuestions(testData.questions || []);
        setTimeLeft((testData.duration || 30) * 60);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load test.");
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, [id]);

  const submitTest = async () => {
    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const formattedAnswers = Object.entries(answers).map(
        ([questionId, selectedAnswer]) => ({
          questionId,
          selectedAnswer,
        })
      );

      const response = await api.post("/results/submit", {
        testId: id,
        answers: formattedAnswers,
      });

      const result = response.data.result || response.data;

      navigate(`/result/${result._id}`, {
        state: { result },
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to submit test."
      );
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (loading || !test || submitting || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, test, submitting, timeLeft]);

  useEffect(() => {
    if (!loading && test && timeLeft === 0 && !submitting) {
      submitTest();
    }
  }, [timeLeft, loading, test]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const selectAnswer = (questionId, optionIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: optionIndex,
    }));
  };

  if (loading) return <Loader text="Loading test..." />;

  if (error && !test) {
    return <div className="test-error">{error}</div>;
  }

  const question = questions[currentQuestion];
  const questionId = question?._id;
  const options = question?.options || [];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="test-page">
      <div className="test-header">
        <div>
          <h2>{test.title}</h2>
          <p>{test.subject}</p>
        </div>

        <div className={`timer ${timeLeft < 60 ? "timer-danger" : ""}`}>
          <Clock size={20} />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="test-progress">
        <div>
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <div>
          Answered: {answeredCount}/{questions.length}
        </div>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {error && <div className="form-error">{error}</div>}

      {question && (
        <div className="question-card">
          <span className="question-number">
            QUESTION {currentQuestion + 1}
          </span>

          <h3>
            {question.questionText || question.question || question.text}
          </h3>

          <div className="options-list">
            {options.map((option, index) => {
              const optionValue =
                typeof option === "object"
                  ? option.text || option.value
                  : option;

              return (
                <button
                  type="button"
                  key={index}
                  className={`option-button ${
                    answers[questionId] === index
                      ? "selected-option"
                      : ""
                  }`}
                  onClick={() => selectAnswer(questionId, index)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>{optionValue}</span>
                </button>
              );
            })}
          </div>

          <div className="question-actions">
            <button
              className="previous-button"
              disabled={currentQuestion === 0 || submitting}
              onClick={() =>
                setCurrentQuestion((previous) => previous - 1)
              }
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button
                className="next-button"
                disabled={submitting}
                onClick={() =>
                  setCurrentQuestion((previous) => previous + 1)
                }
              >
                Next
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                className="submit-button"
                disabled={submitting}
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to submit the test?"
                    )
                  ) {
                    submitTest();
                  }
                }}
              >
                <Send size={17} />
                {submitting ? "Submitting..." : "Submit Test"}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="question-navigation">
        <h3>Question Palette</h3>

        <div className="question-numbers">
          {questions.map((item, index) => (
            <button
              key={item._id}
              className={[
                currentQuestion === index ? "active-question" : "",
                answers[item._id] !== undefined
                  ? "answered-question"
                  : "",
              ].join(" ")}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <p>{answeredCount} questions answered</p>
      </div>
    </div>
  );
};

export default TestPage;