const questions = [
{
question: "Which method converts JSON into a JavaScript object?",
options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
correctAnswer: 0,
subject: "JavaScript",
marks: 1
},
{
question: "Which keyword declares a constant variable?",
options: ["var", "let", "const", "static"],
correctAnswer: 2,
subject: "JavaScript",
marks: 1
},
{
question: "Which method adds an element at the end of an array?",
options: ["pop()", "push()", "shift()", "unshift()"],
correctAnswer: 1,
subject: "JavaScript",
marks: 1
},

{
question: "Which hook manages state in React?",
options: ["useEffect", "useState", "useRef", "useMemo"],
correctAnswer: 1,
subject: "React",
marks: 1
},
{
question: "What is JSX?",
options: ["JavaScript XML", "Java Syntax", "JSON Extension", "JavaScript Extra"],
correctAnswer: 0,
subject: "React",
marks: 1
},
{
question: "Which method is used to pass data to child components?",
options: ["State", "Props", "Hooks", "Context only"],
correctAnswer: 1,
subject: "React",
marks: 1
},

{
question: "What does HTML stand for?",
options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Language"],
correctAnswer: 0,
subject: "HTML",
marks: 1
},
{
question: "Which tag creates a hyperlink?",
options: ["<link>", "<a>", "<href>", "<url>"],
correctAnswer: 1,
subject: "HTML",
marks: 1
},
{
question: "Which tag is used for the largest heading?",
options: ["<h6>", "<head>", "<h1>", "<heading>"],
correctAnswer: 2,
subject: "HTML",
marks: 1
},

{
question: "What does CSS stand for?",
options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"],
correctAnswer: 2,
subject: "CSS",
marks: 1
},
{
question: "Which property changes text color?",
options: ["background", "font-style", "color", "text-size"],
correctAnswer: 2,
subject: "CSS",
marks: 1
},
{
question: "Which CSS property creates space inside an element?",
options: ["margin", "padding", "border", "outline"],
correctAnswer: 1,
subject: "CSS",
marks: 1
},

{
question: "Node.js is built on which JavaScript engine?",
options: ["SpiderMonkey", "V8", "Java Engine", "Chakra only"],
correctAnswer: 1,
subject: "Node.js",
marks: 1
},
{
question: "Which object provides access to environment variables?",
options: ["process.env", "node.env", "app.env", "system.env"],
correctAnswer: 0,
subject: "Node.js",
marks: 1
},
{
question: "Which command initializes a Node.js project?",
options: ["npm start", "npm init", "node create", "npm run"],
correctAnswer: 1,
subject: "Node.js",
marks: 1
},

{
question: "Which method handles GET requests in Express?",
options: ["app.post()", "app.get()", "app.put()", "app.delete()"],
correctAnswer: 1,
subject: "Express.js",
marks: 1
},
{
question: "Which middleware parses JSON request bodies?",
options: ["express.json()", "express.static()", "express.router()", "express.send()"],
correctAnswer: 0,
subject: "Express.js",
marks: 1
},
{
question: "Which method starts an Express server?",
options: ["app.start()", "app.listen()", "app.run()", "app.connect()"],
correctAnswer: 1,
subject: "Express.js",
marks: 1
},

{
question: "Which database is used in MERN Stack?",
options: ["MySQL", "MongoDB", "Oracle", "Firebase"],
correctAnswer: 1,
subject: "MongoDB",
marks: 1
},
{
question: "Which method retrieves documents in MongoDB?",
options: ["find()", "search()", "select()", "get()"],
correctAnswer: 0,
subject: "MongoDB",
marks: 1
},
{
question: "What is the default MongoDB document format?",
options: ["XML", "CSV", "BSON", "HTML"],
correctAnswer: 2,
subject: "MongoDB",
marks: 1
},

{
question: "Which SQL command retrieves data?",
options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
correctAnswer: 1,
subject: "SQL",
marks: 1
},
{
question: "Which SQL clause filters records?",
options: ["ORDER BY", "GROUP BY", "WHERE", "JOIN"],
correctAnswer: 2,
subject: "SQL",
marks: 1
},
{
question: "Which command adds new records to a table?",
options: ["INSERT INTO", "ADD ROW", "CREATE DATA", "PUSH"],
correctAnswer: 0,
subject: "SQL",
marks: 1
},

{
question: "Which method is the entry point of a Java application?",
options: ["start()", "main()", "run()", "init()"],
correctAnswer: 1,
subject: "Java",
marks: 1
},
{
question: "Which keyword creates an object in Java?",
options: ["class", "this", "new", "object"],
correctAnswer: 2,
subject: "Java",
marks: 1
},
{
question: "Which concept allows multiple forms of a method?",
options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
correctAnswer: 1,
subject: "Java",
marks: 1
},

{
question: "Which keyword defines a function in Python?",
options: ["function", "func", "def", "define"],
correctAnswer: 2,
subject: "Python",
marks: 1
},
{
question: "Which symbol is used for comments in Python?",
options: ["//", "#", "/*", "<!--"],
correctAnswer: 1,
subject: "Python",
marks: 1
},
{
question: "Which data type stores key-value pairs in Python?",
options: ["List", "Tuple", "Set", "Dictionary"],
correctAnswer: 3,
subject: "Python",
marks: 1
},

{
question: "Which data structure follows LIFO?",
options: ["Queue", "Stack", "Linked List", "Tree"],
correctAnswer: 1,
subject: "DSA",
marks: 1
},
{
question: "Which data structure follows FIFO?",
options: ["Stack", "Tree", "Queue", "Graph"],
correctAnswer: 2,
subject: "DSA",
marks: 1
},
{
question: "What is the average time complexity of binary search?",
options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
correctAnswer: 1,
subject: "DSA",
marks: 1
},

{
question: "What does MERN stand for?",
options: ["MongoDB Express React Node.js", "MySQL Express React Node.js", "MongoDB Java React Node.js", "MongoDB Express Ruby Node.js"],
correctAnswer: 0,
subject: "Full Stack",
marks: 1
},
{
question: "Which part of MERN handles the user interface?",
options: ["MongoDB", "Express", "React", "Node.js"],
correctAnswer: 2,
subject: "Full Stack",
marks: 1
},
{
question: "Which technology handles server-side JavaScript?",
options: ["HTML", "CSS", "Node.js", "Bootstrap"],
correctAnswer: 2,
subject: "Full Stack",
marks: 1
},

{
question: "Which protocol is commonly used by REST APIs?",
options: ["FTP", "HTTP", "SMTP", "SSH"],
correctAnswer: 1,
subject: "API",
marks: 1
},
{
question: "Which HTTP method is generally used to create a resource?",
options: ["GET", "POST", "DELETE", "HEAD"],
correctAnswer: 1,
subject: "API",
marks: 1
},
{
question: "Which HTTP status code means Not Found?",
options: ["200", "201", "404", "500"],
correctAnswer: 2,
subject: "API",
marks: 1
},

{
question: "Which command downloads a Git repository?",
options: ["git push", "git clone", "git commit", "git status"],
correctAnswer: 1,
subject: "Git & GitHub",
marks: 1
},
{
question: "Which command saves changes to the local Git repository?",
options: ["git commit", "git pull", "git fetch", "git init"],
correctAnswer: 0,
subject: "Git & GitHub",
marks: 1
},
{
question: "Which platform hosts Git repositories online?",
options: ["VS Code", "GitHub", "Node.js", "MongoDB"],
correctAnswer: 1,
subject: "Git & GitHub",
marks: 1
},

{
question: "What does CPU stand for?",
options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"],
correctAnswer: 0,
subject: "Computer Basics",
marks: 1
},
{
question: "Which memory is volatile?",
options: ["ROM", "Hard Disk", "RAM", "SSD"],
correctAnswer: 2,
subject: "Computer Basics",
marks: 1
},
{
question: "Which of these is an operating system?",
options: ["Google Chrome", "Windows", "MS Word", "HTML"],
correctAnswer: 1,
subject: "Computer Basics",
marks: 1
}
];

module.exports = questions;