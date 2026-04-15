# 📝 Simple To-Do Full-Stack App

A minimal full-stack To-Do List application built with:

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  

This project demonstrates the core concepts of full-stack development: **CRUD operations**, **REST APIs**, and **database integration**.

---

# 🚀 Features

- ➕ Add new tasks  
- 📋 View all tasks  
- ✅ Mark tasks as completed  
- ❌ Delete tasks  

---

# 🧠 What You’ll Learn

- How frontend communicates with backend using `fetch()`
- How to build a REST API with Express
- How to connect Node.js with PostgreSQL
- How CRUD operations work in real applications

---

# 📁 Project Structure

```
todo-app/
├── server/
│   ├── db.js          # Database connection
│   ├── server.js      # Main server file
│   └── routes.js      # API routes (CRUD)
├── client/
│   ├── index.html     # UI
│   ├── style.css      # Styling
│   └── script.js      # Frontend logic
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

---

## 2. Setup PostgreSQL

Open your PostgreSQL terminal and run:

```
CREATE DATABASE todo_db;

\c todo_db;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 3. Configure Database

Open:

```
server/db.js
```

Update your credentials:

```
user: 'postgres',
password: 'your_password',
```

---

## 4. Install Dependencies

```
npm install
```

---

## 5. Run Backend Server

```
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## 6. Run Frontend

Open this file in your browser:

```
client/index.html
```

---

# 🔌 API Endpoints

| Method | Endpoint            | Description           |
|--------|--------------------|----------------------|
| GET    | /api/tasks         | Get all tasks        |
| POST   | /api/tasks         | Create new task      |
| PUT    | /api/tasks/:id     | Toggle completion    |
| DELETE | /api/tasks/:id     | Delete task          |

---

# 🔄 How It Works

1. User enters a task in the browser  
2. Frontend sends request using `fetch()`  
3. Express API receives request  
4. PostgreSQL stores/retrieves data  
5. Response is sent back and UI updates  

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- HTML5
- CSS3
- JavaScript (Vanilla)

---

# 📌 Using PostgreSQL with GUI (No Terminal)

If you don’t want to use terminal, you can manage PostgreSQL using a graphical tool called pgAdmin.

## 🧱 Step 1: Install pgAdmin

- Download PostgreSQL from official site
- Make sure pgAdmin is included during installation
- Set your database password during setup

---

## 🚀 Step 2: Open pgAdmin

- Launch pgAdmin
- Enter your password
- Connect to the PostgreSQL server

---

## 🗄️ Step 3: Create Database (GUI way)

- Click **Databases**
- Right click → **Create → Database**
- Name: `todo_db`
- Click Save

---

## 🧱 Step 4: Create Table (GUI way)

- Go to:
  Databases → todo_db → Schemas → public → Tables
- Right click **Tables → Create → Table**
- Name it: `tasks`

### Add Columns:

- `id` → serial → Primary Key
- `title` → text → Not NULL
- `completed` → boolean → default false
- `created_at` → timestamp → default now()

Click Save

---

## ✍️ Step 5: Insert Data (No SQL needed)

- Right click table `tasks`
- Select **View/Edit Data → All Rows**
- Click **Add Row (+)**
- Enter sample task
- Save changes

---

## 👀 Step 6: View & Edit Data

- Open table view
- Edit rows like a spreadsheet
- Delete or update tasks visually

---

## 🔌 Step 7: Connect to Node.js App

Update your database config in:

```
server/db.js
```

Make sure:

```
database: 'todo_db'
password: 'your_password'
```

Now your GUI database is connected to your app.

---

# 📌 Future Improvements

- ✏️ Edit task title  
- 🔍 Filter tasks (All / Completed / Active)  
- 🔐 Add authentication (login/signup)  
- ☁️ Deploy to cloud (Render, Railway, Supabase)  
- ⚛️ Convert frontend to React  

---

# 🧪 Testing Ideas

- Add empty task (should be prevented)  
- Toggle completion multiple times  
- Delete task and refresh page  
- Check database consistency  

---

# 🧾 Sample SQL Data Inserts
INSERT Example

Run this in pgAdmin Query Tool to quickly add sample data:

```sql
INSERT INTO public.tasks (title, completed, created_at)
VALUES 
('Learn HTML', false, NOW()),
('Build ToDo App', false, NOW()),
('Study PostgreSQL', true, NOW()),
('Push project to GitHub', false, NOW());
```

⚠️ Important Notes
1. You usually DON’T insert id

Because:
id SERIAL PRIMARY KEY auto-generates it

So this is correct:
```sql
        INSERT INTO tasks (title, completed, created_at)
```

2. NOW() means:

Current timestamp automatically
---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Submit a pull request  

---

# 📄 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

**Abdi Dabala Yadata**

---

# ⭐ Support

If you like this project:

- Star ⭐ the repository  
- Share it with others  
- Build your own version 🚀
