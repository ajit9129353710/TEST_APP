import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Trophy,
  CheckCircle,
  XCircle,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import api from "../services/api";
import Loader from "../components/Loader";

const ResultPage = () => {
  const { id } = useParams();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await api.get(`/results/${id}`);

        const resultData = response.data.result || response.data;

        console.log("COMPLETE RESULT DATA:", resultData);

        setResult(resultData);
      } catch (err) {
        setError(
          err.response?.data?.message || "Unable to load result."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [id]);

  if (loading) return <Loader text="Loading result..." />;

  if (error || !result) {
    return (
      <div className="result-error">
        {error || "Result not found."}
      </div>
    );
  }

  const answers = result.answers || [];

  const correctCount = answers.filter(
    (answer) => answer.isCorrect
  ).length;

  const wrongCount = answers.filter(
    (answer) =>
      answer.selectedAnswer !== null &&
      answer.selectedAnswer !== undefined &&
      !answer.isCorrect
  ).length;

  const notAttemptedCount = answers.filter(
    (answer) =>
      answer.selectedAnswer === null ||
      answer.selectedAnswer === undefined
  ).length;

  const getOptionText = (question, index) => {
    if (
      index === null ||
      index === undefined ||
      !question ||
      !Array.isArray(question.options)
    ) {
      return "Not Available";
    }

    const answerIndex = Number(index);

    if (
      !Number.isInteger(answerIndex) ||
      answerIndex < 0 ||
      answerIndex >= question.options.length
    ) {
      return "Not Available";
    }

    const option = question.options[answerIndex];

    return `${String.fromCharCode(65 + answerIndex)}. ${option}`;
  };

  return (
    <div className="result-page">
      <div className="result-summary">
        <div className="result-trophy">
          <Trophy size={38} />
        </div>

        <h1>Test Completed!</h1>

        <p>{result.test?.title || "Your Test Result"}</p>

        <div
          className={`result-status ${
            result.status === "Pass" ? "pass" : "fail"
          }`}
        >
          {result.status}
        </div>

        <div className="result-score">
          <h2>
            {result.score} / {result.totalMarks}
          </h2>
          <p>Total Score</p>
        </div>

        <div className="result-percentage">
          {Number(result.percentage || 0).toFixed(2)}%
        </div>
      </div>

      <div className="result-stats">
        <div className="result-stat">
          <CheckCircle size={27} />
          <h3>{correctCount}</h3>
          <p>Correct Answers</p>
        </div>

        <div className="result-stat wrong-stat">
          <XCircle size={27} />
          <h3>{wrongCount}</h3>
          <p>Wrong Answers</p>
        </div>

        <div className="result-stat">
          <BookOpen size={27} />
          <h3>{answers.length}</h3>
          <p>Total Questions</p>
        </div>

        <div className="result-stat">
          <BookOpen size={27} />
          <h3>{notAttemptedCount}</h3>
          <p>Not Attempted</p>
        </div>
      </div>

      <div className="answer-review">
        <h2>Answer Review</h2>
        <p>Review your selected and correct answers.</p>

        {answers.map((answer, index) => {
          const question = answer.question;

          console.log(`QUESTION ${index + 1}:`, question);
          console.log(
            "CORRECT ANSWER INDEX:",
            question?.correctAnswer
          );
          console.log("OPTIONS:", question?.options);

          const isAttempted =
            answer.selectedAnswer !== null &&
            answer.selectedAnswer !== undefined;

          return (
            <div
              className="review-card"
              key={question?._id || index}
            >
              <div className="review-heading">
                <h3>Question {index + 1}</h3>

                <span
                  className={
                    !isAttempted
                      ? "wrong-label"
                      : answer.isCorrect
                      ? "correct-label"
                      : "wrong-label"
                  }
                >
                  {!isAttempted
                    ? "Not Attempted"
                    : answer.isCorrect
                    ? "Correct"
                    : "Wrong"}
                </span>
              </div>

              <h4>
                {question?.question || "Question not available"}
              </h4>

              <div className="review-answer">
                <p>Your Answer</p>

                <strong>
                  {getOptionText(
                    question,
                    answer.selectedAnswer
                  )}
                </strong>
              </div>

              <div
                className={
                  answer.isCorrect
                    ? "correct-answer"
                    : "wrong-answer"
                }
              >

                <strong>
                  Correct Answer:{" "}
                  {getOptionText(
                    question,
                    question?.correctAnswer
                  )}
                </strong>
              </div>
            </div>
          );
        })}
      </div>

      <div className="result-actions">
        <Link to="/dashboard" className="back-dashboard">
          <ArrowLeft size={17} />
          Back to Dashboard
        </Link>

        <Link to="/history" className="history-button">
          View Result History
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;