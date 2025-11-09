import { useState } from "react";

export default function Players() {
  const questions = [
    {
      question: "What color is the sky?",
      options: ["Blue", "Green", "Red", "Yellow"],
      answer: "Blue",
    },
    {
      question: "Which animal barks?",
      options: ["Cat", "Dog", "Cow", "Bird"],
      answer: "Dog",
    },
    {
      question: "What planet do we live on?",
      options: ["Mars", "Venus", "Earth", "Jupiter"],
      answer: "Earth",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(option) {
    const current = questions[index];
    if (option === current.answer) {
      setScore(score + 1);
    }

    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
    } else {
      setShowResult(true);
    }
  }

  function restartQuiz() {
    setIndex(0);
    setScore(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <div style={styles.container}>
        <h2>Your Score: {score} / {questions.length}</h2>
        <button onClick={restartQuiz} style={styles.button}>Try Again</button>
      </div>
    );
  }

  const q = questions[index];
  return (
    <div style={styles.container}>
      <h2>{q.question}</h2>
      <div>
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            style={styles.button}
          >
            {opt}
          </button>
        ))}
      </div>
      <p>Question {index + 1} of {questions.length}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial",
  },
  button: {
    display: "block",
    margin: "10px auto",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "orangered",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};