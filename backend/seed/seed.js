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
description: "Test your JavaScript fundamentals.",
duration: 15
},
{
title: "React Basic Test",
subject: "React",
description: "Test your React fundamentals and hooks knowledge.",
duration: 15
},
{
title: "HTML Fundamentals",
subject: "HTML",
description: "Test your HTML knowledge.",
duration: 15
},
{
title: "CSS Fundamentals",
subject: "CSS",
description: "Test your CSS fundamentals.",
duration: 15
},
{
title: "Node.js Basic Test",
subject: "Node.js",
description: "Test your Node.js knowledge.",
duration: 15
},
{
title: "Express.js Test",
subject: "Express.js",
description: "Test your Express.js knowledge.",
duration: 15
},
{
title: "MongoDB Basic Test",
subject: "MongoDB",
description: "Test your MongoDB database knowledge.",
duration: 15
},
{
title: "SQL Basic Test",
subject: "SQL",
description: "Test your SQL queries knowledge.",
duration: 15
},
{
title: "Java Programming Test",
subject: "Java",
description: "Test your Java programming knowledge.",
duration: 15
},
{
title: "Python Basic Test",
subject: "Python",
description: "Test your Python fundamentals.",
duration: 15
},
{
title: "Data Structures Test",
subject: "DSA",
description: "Test your Data Structures and Algorithms knowledge.",
duration: 15
},
{
title: "Full Stack Development Test",
subject: "Full Stack",
description: "Test your Full Stack development knowledge.",
duration: 15
},
{
title: "REST API Test",
subject: "API",
description: "Test your REST API knowledge.",
duration: 15
},
{
title: "Git and GitHub Test",
subject: "Git & GitHub",
description: "Test your Git and GitHub knowledge.",
duration: 15
},
{
title: "Computer Fundamentals Test",
subject: "Computer Basics",
description: "Test your computer fundamentals.",
duration: 15
}
];

const seedData = async () => {
try {
await connectDB();

const insertedQuestions = [];

for (const question of questions) {
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

  if (selectedQuestions.length === 0) {
    console.log(`No questions found for ${item.subject}`);
    continue;
  }

  const totalMarks = selectedQuestions.reduce(
    (total, question) => total + Number(question.marks || 0),
    0
  );

  await Test.findOneAndUpdate(
    { title: item.title },
    {
      $set: {
        ...item,
        questions: selectedQuestions.map((question) => question._id),
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

  console.log(`${item.title} created or updated`);
}

console.log("15 Tests seeded successfully!");

} catch (error) {
console.error("Seeding failed:", error.message);
process.exitCode = 1;
} finally {
await mongoose.connection.close();
}
};

seedData();