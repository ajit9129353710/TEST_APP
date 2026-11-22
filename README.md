📝 TestMaster – Mini Online Test App

A full-stack online examination platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows students to take online tests, view results, and track their performance. Admins can manage questions, tests, students, and results.

🚀 Features

👨‍🎓 Student Features

- Student Registration and Login
- Secure Authentication using JWT
- View Available Tests
- Multiple Choice Questions (MCQs)
- Timed Online Tests
- Next and Previous Question Navigation
- Submit Test and Automatic Evaluation
- Instant Result Calculation
- View Correct and Wrong Answers
- Result History

👨‍💼 Admin Features

- Secure Admin Login
- Admin Dashboard
- View Total Students, Tests, Questions and Results
- Add, Edit and Delete Questions
- Create and Delete Tests
- Manage Students
- View All Test Results

🔐 Security Features

- JWT Authentication
- Role-Based Authorization
- Password Hashing
- Protected Routes
- Environment Variables for Sensitive Information

🛠️ Tech Stack

Technology| Purpose
React.js| Frontend
Node.js| Backend Runtime
Express.js| REST API
MongoDB| Database
Mongoose| Database Modeling
JWT| Authentication
Axios| API Requests
React Router| Navigation
Lucide React| Icons
CSS| Styling

📂 Project Structure

TEST-APP/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   └── ajit/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── context/
│       │   ├── layouts/
│       │   ├── pages/
│       │   ├── services/
│       │   ├── utils/
│       │   ├── App.jsx
│       │   ├── index.css
│       │   └── main.jsx
│       ├── .env
│       ├── .gitignore
│       └── package.json
│
└── README.md

⚙️ Installation & Setup

1. Clone Repository

git clone YOUR_GITHUB_REPOSITORY_URL

cd TEST-APP

2. Backend Setup

cd backend
npm install

Create a ".env" file inside the backend folder:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
ADMIN_SECRET=your_admin_secret

Start the backend:

npm run dev

3. Frontend Setup

Open another terminal:

cd frontend/ajit
npm install

Create a ".env" file:

VITE_API_URL=http://localhost:5000/api

Start the frontend:

npm run dev

4. Seed Database

To insert sample questions and tests into MongoDB:

cd backend
npm run seed

🔗 API Routes

Method| Endpoint| Description
POST| "/api/auth/register"| Student Registration
POST| "/api/auth/login"| User Login
POST| "/api/admin/auth/create"| Create Admin
GET| "/api/questions"| Get Questions
POST| "/api/questions"| Add Question
GET| "/api/tests"| Get Available Tests
POST| "/api/tests"| Create Test
GET| "/api/results/history"| Result History
POST| "/api/results/submit"| Submit Test
GET| "/api/admin/stats"| Dashboard Statistics
GET| "/api/admin/students"| Get Students
GET| "/api/admin/results"| Get All Results

📚 Available Test Subjects

The application includes sample tests for:

- JavaScript
- React.js
- HTML
- CSS
- Node.js
- Express.js
- MongoDB
- SQL
- Java
- Python
- Data Structures & Algorithms
- Full Stack Development
- API
- Git & GitHub
- Computer Basics

Total: 15 Sample Tests | 45 Questions

🔒 Important Security Note

- Never upload ".env" files to GitHub.
- Never expose MongoDB credentials or JWT secrets.
- Use environment variables for deployment.
- Keep "node_modules" out of the repository.

🎯 Project Objective

The objective of this project is to develop a practical online examination system using the MERN Stack while learning REST API development, database management, authentication, authorization, and full-stack application development.

👨‍💻 Developer

Ajit Prajapati

- GitHub: "ajit9129353710" (https://github.com/ajit9129353710)
- LinkedIn: "Connect with me" (https://www.linkedin.com/in/ajit-prajapati-50323442a/)

---

⭐ If you like this project, consider giving it a star!
