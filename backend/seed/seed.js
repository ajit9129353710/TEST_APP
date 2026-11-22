require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Question = require("../models/Question");
const Test = require("../models/Test");
const questions = require("./questions");

const testList = [
{
title: "JavaScript Basic Test",
subject: "JavaScript",
description: "Test your JavaScript fundamentals."
},
{
title: "React Basic Test",
subject: "React",
description: "Test your React fundamentals and hooks knowledge."
},
{
title: "HTML Fundamentals",
subject: "HTML",
description: "Test your HTML knowledge."
},
{
title: "CSS Fundamentals",
subject: "CSS",
description: "Test your CSS fundamentals."
},
{
title: "Node.js Basic Test",
subject: "Node.js",
description: "Test your Node.js knowledge."
},
{
title: "Express.js Test",
subject: "Express.js",
description: "Test your Express.js knowledge."
},
{
title: "MongoDB Basic Test",
subject: "MongoDB",
description: "Test your MongoDB database knowledge."
},
{
title: "SQL Basic Test",
subject: "SQL",
description: "Test your SQL queries knowledge."
},
{
title: "Java Programming Test",
subject: "Java",
description: "Test your Java programming knowledge."
},
{
title: "Python Basic Test",
subject: "Python",
description: "Test your Python fundamentals."
},
{
title: "Data Structures Test",
subject: "DSA",
description: "Test your Data Structures and Algorithms knowledge."
},
{
title: "Full Stack Development Test",
subject: "Full Stack",
description: "Test your Full Stack development knowledge."
},
{
title: "REST API Test",
subject: "API",
description: "Test your REST API knowledge."
},
{
title: "Git and GitHub Test",
subject: "Git & GitHub",
description: "Test your Git and GitHub knowledge."
},
{
title: "Computer Fundamentals Test",
subject: "Computer Basics",
description: "Test your computer fundamentals."
}
];

const seedData = async () => {
try {
await connectDB();

const subjects = [...new Set(questions.map((item) => item.subject))];

if (subjects.length !== 15 || questions.length !== 150) {
  throw new Error("Seed data must contain 150 questions for 15 subjects");
}

const insertedQuestions = [];

for (const question of questions) {
  if (
    !question.question ||
    !Array.isArray(question.options) ||
    question.options.length !== 4 ||
    !Number.isInteger(question.correctAnswer) ||
    question.correctAnswer < 0 ||
    question.correctAnswer > 3
  ) {
    throw new Error(`Invalid question data: ${question.question}`);
  }

  const savedQuestion = await Question.findOneAndUpdate(
    {
      question: question.question,
      subject: question.subject
    },
    {
      $set: question
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true
    }
  );

  insertedQuestions.push(savedQuestion);
}

console.log(`${insertedQuestions.length} questions added or updated`);

for (const item of testList) {
  const selectedQuestions = insertedQuestions.filter(
    (question) => question.subject === item.subject
  );

  if (selectedQuestions.length !== 10) {
    throw new Error(
      `${item.subject} must have exactly 10 questions`
    );
  }

  const totalMarks = selectedQuestions.reduce(
    (total, question) => total + Number(question.marks || 0),
    0
  );

  await Test.findOneAndUpdate(
    {
      title: item.title
    },
    {
      $set: {
        ...item,
        questions: selectedQuestions.map((question) => question._id),
        duration: 10,
        totalMarks,
        isActive: true
      }
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true
    }
  );

  console.log(`${item.title} updated successfully`);
}

console.log("15 Tests and 150 Questions seeded successfully!");

} catch (error) {
console.error("Seeding failed:", error.message);
process.exitCode = 1;
} finally {
await mongoose.connection.close();
}
};

seedData();