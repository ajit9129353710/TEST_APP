const questionSets = {
JavaScript: [
["Which method converts JSON into a JavaScript object?", ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"], 0],
["Which keyword declares a constant variable?", ["var", "let", "const", "static"], 2],
["Which method adds an element at the end of an array?", ["pop()", "push()", "shift()", "unshift()"], 1],
["Which operator checks both value and type?", ["==", "===", "!=", "="], 1],
["Which method removes the last array element?", ["push()", "shift()", "pop()", "unshift()"], 2],
["Which keyword declares a block-scoped variable?", ["var", "let", "static", "global"], 1],
["Which function converts a string to an integer?", ["parseInt()", "toString()", "parseFloatString()", "NumberText()"], 0],
["Which method creates a new array by transforming elements?", ["filter()", "map()", "reduce()", "find()"], 1],
["Which symbol is used for comments in JavaScript?", ["#", "//", "<!--", "**"], 1],
["Which method executes a function for each array element?", ["map()", "forEach()", "join()", "slice()"], 1]
],

React: [
["Which hook manages state in React?", ["useEffect", "useState", "useRef", "useMemo"], 1],
["What does JSX stand for?", ["JavaScript XML", "Java Syntax", "JSON Extension", "JavaScript Extra"], 0],
["Which method is used to pass data to child components?", ["State", "Props", "Hooks", "Context only"], 1],
["Which hook performs side effects?", ["useState", "useEffect", "useMemo", "useId"], 1],
["Which function creates a React element?", ["createElement()", "makeElement()", "newElement()", "renderElement()"], 0],
["Which prop helps React identify list items?", ["id", "key", "ref", "class"], 1],
["Which hook accesses a DOM element directly?", ["useState", "useRef", "useEffect", "useMemo"], 1],
["What is used to conditionally render components?", ["if or ternary", "import only", "export only", "require only"], 0],
["Which command creates a new Vite React project?", ["npm create vite@latest", "npm start react", "node create react", "react install"], 0],
["What is the purpose of React Router?", ["Database storage", "Client-side navigation", "Server hosting", "CSS styling"], 1]
],

HTML: [
["What does HTML stand for?", ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Language"], 0],
["Which tag creates a hyperlink?", ["<link>", "<a>", "<href>", "<url>"], 1],
["Which tag is used for the largest heading?", ["<h6>", "<head>", "<h1>", "<heading>"], 2],
["Which tag displays an image?", ["<picture>", "<img>", "<image>", "<src>"], 1],
["Which attribute provides alternative text for an image?", ["title", "src", "alt", "href"], 2],
["Which tag creates an unordered list?", ["<ol>", "<ul>", "<li>", "<list>"], 1],
["Which tag is used to create a table row?", ["<td>", "<th>", "<tr>", "<table-row>"], 2],
["Which HTML element contains page metadata?", ["<body>", "<head>", "<footer>", "<main>"], 1],
["Which input type hides entered characters?", ["text", "email", "password", "number"], 2],
["Which HTML element represents navigation links?", ["<nav>", "<section>", "<article>", "<aside>"], 0]
],

CSS: [
["What does CSS stand for?", ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"], 2],
["Which property changes text color?", ["background", "font-style", "color", "text-size"], 2],
["Which CSS property creates space inside an element?", ["margin", "padding", "border", "outline"], 1],
["Which property changes the background color?", ["color", "background-color", "font-color", "bg"], 1],
["Which property makes text bold?", ["font-weight", "font-size", "text-align", "font-style"], 0],
["Which display value enables Flexbox?", ["block", "inline", "flex", "hidden"], 2],
["Which property rounds element corners?", ["border-style", "border-radius", "corner", "outline"], 1],
["Which selector targets an element by ID?", ["#id", ".id", "*id", "id()"], 0],
["Which property controls the stacking order?", ["position", "display", "z-index", "overflow"], 2],
["Which unit is relative to the root font size?", ["px", "em", "rem", "%"], 2]
],

"Node.js": [
["Node.js is built on which JavaScript engine?", ["SpiderMonkey", "V8", "Java Engine", "Chakra only"], 1],
["Which object provides access to environment variables?", ["process.env", "node.env", "app.env", "system.env"], 0],
["Which command initializes a Node.js project?", ["npm start", "npm init", "node create", "npm run"], 1],
["Which module handles file operations?", ["http", "fs", "path", "url"], 1],
["Which command installs a package?", ["npm install", "npm start", "node install", "git install"], 0],
["Which object represents the current process?", ["window", "document", "process", "server"], 2],
["Which module creates an HTTP server?", ["fs", "http", "path", "crypto"], 1],
["Which file commonly stores project dependencies?", ["index.html", "package.json", "server.js", "config.css"], 1],
["Which method reads a file asynchronously?", ["fs.readFile()", "fs.writeFile()", "fs.delete()", "fs.openSync()"], 0],
["Which command runs a JavaScript file with Node.js?", ["npm run", "node filename.js", "git start", "react filename.js"], 1]
],

"Express.js": [
["Which method handles GET requests in Express?", ["app.post()", "app.get()", "app.put()", "app.delete()"], 1],
["Which middleware parses JSON request bodies?", ["express.json()", "express.static()", "express.router()", "express.send()"], 0],
["Which method starts an Express server?", ["app.start()", "app.listen()", "app.run()", "app.connect()"], 1],
["Which object contains route parameters?", ["req.params", "req.body", "res.data", "app.params"], 0],
["Which method handles POST requests?", ["app.get()", "app.post()", "app.fetch()", "app.read()"], 1],
["Which method sends a JSON response?", ["res.json()", "res.html()", "req.json()", "app.json()"], 0],
["Which middleware can serve static files?", ["express.static()", "express.json()", "express.urlencoded()", "express.route()"], 0],
["Which object represents the HTTP response?", ["req", "res", "app", "next"], 1],
["What does next() do in middleware?", ["Stops the server", "Passes control to the next middleware", "Deletes a route", "Connects MongoDB"], 1],
["Which method defines a route for deleting data?", ["app.get()", "app.post()", "app.delete()", "app.read()"], 2]
],

MongoDB: [
["Which database is used in MERN Stack?", ["MySQL", "MongoDB", "Oracle", "Firebase"], 1],
["Which method retrieves documents in MongoDB?", ["find()", "search()", "select()", "get()"], 0],
["What is the default MongoDB document format?", ["XML", "CSV", "BSON", "HTML"], 2],
["Which method inserts one document?", ["insertOne()", "addOne()", "createRow()", "pushOne()"], 0],
["Which method deletes one matching document?", ["removeAll()", "deleteOne()", "dropOne()", "erase()"], 1],
["Which method updates one matching document?", ["changeOne()", "updateOne()", "modifyRow()", "editOne()"], 1],
["What is the default primary key field?", ["id", "_id", "key", "primary"], 1],
["Which command shows all databases in the MongoDB shell?", ["show databases", "list tables", "show collections", "db.list()"], 0],
["What is a collection in MongoDB?", ["A group of documents", "A single field", "A database server", "An index only"], 0],
["Which operator is used to match a value in MongoDB?", ["$set", "$match", "$eq", "$push"], 2]
],

SQL: [
["Which SQL command retrieves data?", ["INSERT", "SELECT", "UPDATE", "DELETE"], 1],
["Which SQL clause filters records?", ["ORDER BY", "GROUP BY", "WHERE", "JOIN"], 2],
["Which command adds new records to a table?", ["INSERT INTO", "ADD ROW", "CREATE DATA", "PUSH"], 0],
["Which command modifies existing records?", ["CHANGE", "UPDATE", "ALTER DATA", "MODIFY ROW"], 1],
["Which command removes records from a table?", ["DROP", "DELETE", "REMOVE TABLE", "CLEAR"], 1],
["Which clause sorts query results?", ["SORT", "ORDER BY", "GROUP BY", "FILTER"], 1],
["Which SQL function counts rows?", ["SUM()", "AVG()", "COUNT()", "TOTAL()"], 2],
["Which keyword removes duplicate results?", ["UNIQUE", "DISTINCT", "DIFFERENT", "ONLY"], 1],
["Which constraint uniquely identifies each row?", ["DEFAULT", "NOT NULL", "PRIMARY KEY", "CHECK"], 2],
["Which JOIN returns matching rows from both tables?", ["INNER JOIN", "CROSS JOIN", "FULL OUTER JOIN", "LEFT JOIN"], 0]
],

Java: [
["Which method is the entry point of a Java application?", ["start()", "main()", "run()", "init()"], 1],
["Which keyword creates an object in Java?", ["class", "this", "new", "object"], 2],
["Which concept allows multiple forms of a method?", ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], 1],
["Which keyword is used to inherit a class?", ["implements", "extends", "inherits", "super"], 1],
["Which data type stores true or false?", ["int", "char", "boolean", "float"], 2],
["Which keyword prevents a class from being inherited?", ["static", "final", "private", "void"], 1],
["Which operator compares primitive values for equality?", ["=", "==", "===", "!="], 1],
["Which package contains the Scanner class?", ["java.io", "java.util", "java.net", "java.lang"], 1],
["Which loop executes at least once?", ["for", "while", "do-while", "foreach"], 2],
["Which keyword handles exceptions?", ["try", "throwable", "catching", "error"], 0]
],

Python: [
["Which keyword defines a function in Python?", ["function", "func", "def", "define"], 2],
["Which symbol is used for comments in Python?", ["//", "#", "/*", "<!--"], 1],
["Which data type stores key-value pairs in Python?", ["List", "Tuple", "Set", "Dictionary"], 3],
["Which function displays output?", ["input()", "print()", "displayText()", "write()"], 1],
["Which keyword starts a conditional statement?", ["when", "if", "check", "case"], 1],
["Which data type is immutable?", ["List", "Dictionary", "Tuple", "Set"], 2],
["Which operator is used for exponentiation?", ["^", "**", "//", "%%"], 1],
["Which keyword is used to create a class?", ["object", "struct", "class", "define"], 2],
["Which function returns the length of a sequence?", ["size()", "count()", "len()", "length()"], 2],
["Which keyword imports a module?", ["include", "using", "import", "require"], 2]
],

DSA: [
["Which data structure follows LIFO?", ["Queue", "Stack", "Linked List", "Tree"], 1],
["Which data structure follows FIFO?", ["Stack", "Tree", "Queue", "Graph"], 2],
["What is the average time complexity of binary search?", ["O(n)", "O(log n)", "O(n²)", "O(1)"], 1],
["Which data structure uses nodes connected by pointers?", ["Array", "Linked List", "Stack only", "Hash table"], 1],
["Which traversal visits the root node first?", ["Inorder", "Postorder", "Preorder", "Level order only"], 2],
["Which algorithm repeatedly selects the smallest element?", ["Merge Sort", "Selection Sort", "Quick Sort", "Binary Search"], 1],
["Which data structure is commonly used in BFS?", ["Stack", "Queue", "Heap", "Tree"], 1],
["What is the time complexity of accessing an array element by index?", ["O(n)", "O(log n)", "O(1)", "O(n²)"], 2],
["Which structure stores data as key-value pairs?", ["Stack", "Queue", "Hash Table", "Linked List"], 2],
["Which algorithm finds the shortest path in a weighted graph with non-negative edges?", ["DFS", "BFS", "Dijkstra's Algorithm", "Bubble Sort"], 2]
],

"Full Stack": [
["What does MERN stand for?", ["MongoDB Express React Node.js", "MySQL Express React Node.js", "MongoDB Java React Node.js", "MongoDB Express Ruby Node.js"], 0],
["Which part of MERN handles the user interface?", ["MongoDB", "Express", "React", "Node.js"], 2],
["Which technology handles server-side JavaScript?", ["HTML", "CSS", "Node.js", "Bootstrap"], 2],
["Which language is commonly used to style web pages?", ["HTML", "CSS", "SQL", "Java"], 1],
["Which protocol is used for communication between client and server?", ["HTTP", "FTP only", "SMTP", "SSH"], 0],
["What is the purpose of an API?", ["Connect different software systems", "Style web pages", "Store images only", "Compile Java"], 0],
["Which tool is commonly used for version control?", ["MongoDB", "Git", "Express", "Vite"], 1],
["Where is application data commonly stored in a MERN application?", ["React", "MongoDB", "CSS", "HTML"], 1],
["Which technology handles HTTP routing in MERN?", ["Express.js", "CSS", "React DOM", "HTML"], 0],
["What does CRUD stand for?", ["Create Read Update Delete", "Copy Run Upload Download", "Create Render Use Deploy", "Connect Read Update Display"], 0]
],

API: [
["Which protocol is commonly used by REST APIs?", ["FTP", "HTTP", "SMTP", "SSH"], 1],
["Which HTTP method is generally used to create a resource?", ["GET", "POST", "DELETE", "HEAD"], 1],
["Which HTTP status code means Not Found?", ["200", "201", "404", "500"], 2],
["Which status code indicates a successful request?", ["200", "301", "404", "500"], 0],
["Which HTTP method is generally used to update a resource?", ["GET", "PUT", "HEAD", "TRACE"], 1],
["Which HTTP status code indicates successful creation?", ["200", "201", "400", "500"], 1],
["What format is commonly used for API data exchange?", ["JSON", "MP3", "PNG", "EXE"], 0],
["Which HTTP method retrieves data?", ["POST", "GET", "DELETE", "PATCH"], 1],
["What does REST stand for?", ["Representational State Transfer", "Remote Server Transfer", "Request State Technology", "Resource System Type"], 0],
["Which status code indicates an internal server error?", ["200", "301", "404", "500"], 3]
],

"Git & GitHub": [
["Which command downloads a Git repository?", ["git push", "git clone", "git commit", "git status"], 1],
["Which command saves changes to the local Git repository?", ["git commit", "git pull", "git fetch", "git init"], 0],
["Which platform hosts Git repositories online?", ["VS Code", "GitHub", "Node.js", "MongoDB"], 1],
["Which command initializes a Git repository?", ["git start", "git init", "git create", "git new"], 1],
["Which command displays the working tree status?", ["git status", "git showall", "git check", "git list"], 0],
["Which command uploads local commits to a remote repository?", ["git pull", "git push", "git clone", "git init"], 1],
["Which command downloads changes from a remote repository?", ["git push", "git commit", "git pull", "git add"], 2],
["Which command stages changes?", ["git add", "git remove", "git save", "git stage-all"], 0],
["Which file excludes specified files from Git tracking?", ["package.json", ".gitignore", "README.md", "index.html"], 1],
["Which command displays commit history?", ["git history", "git commits", "git log", "git status"], 2]
],

"Computer Basics": [
["What does CPU stand for?", ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"], 0],
["Which memory is volatile?", ["ROM", "Hard Disk", "RAM", "SSD"], 2],
["Which of these is an operating system?", ["Google Chrome", "Windows", "MS Word", "HTML"], 1],
["Which device is used to enter text?", ["Monitor", "Keyboard", "Speaker", "Printer"], 1],
["Which device displays visual output?", ["Mouse", "Scanner", "Monitor", "Keyboard"], 2],
["What does URL stand for?", ["Uniform Resource Locator", "Universal Record Link", "Unified Resource Language", "User Reference Location"], 0],
["Which storage device has no moving mechanical parts?", ["HDD", "SSD", "DVD", "Floppy Disk"], 1],
["What is the main function of an operating system?", ["Manage computer resources", "Create websites only", "Print documents only", "Design images only"], 0],
["Which number system uses only 0 and 1?", ["Decimal", "Octal", "Binary", "Hexadecimal"], 2],
["Which component performs arithmetic and logical operations?", ["ALU", "RAM", "ROM", "HDD"], 0]
]
};

const questions = Object.entries(questionSets).flatMap(
([subject, items]) =>
items.map(([question, options, correctAnswer]) => ({
question,
options,
correctAnswer,
subject,
marks: 1
}))
);

module.exports = questions;