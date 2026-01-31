<img src="quiz app.png" alt="English Tenses Quiz"/>

---
# 📝 English Tenses Quiz

An **interactive, browser-based quiz** that tests your knowledge of the **12 English tenses**.
This quiz is **timed, randomized, and saves high scores** to LocalStorage. No external libraries are required.

---

## 🎯 Features

* **Randomized Questions & Choices** – Questions and answer options shuffle each quiz.
* **Timer per Question** – 15-second countdown with automatic move to next question.
* **Immediate Feedback** – Correct answers turn green, wrong answers turn red.
* **Score & High Score Tracking** – Current score updates in real time; high score saved in LocalStorage.
* **Restart Quiz** – Easily retake the quiz at any time.
* **Responsive & Accessible** – Works on all devices and includes basic ARIA support.

---

## 🛠️ Tech Stack

* **HTML5** – Quiz structure
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Quiz logic, timer, event handling, and high score management

---

## 📂 Project Structure

```
quiz-app/
├── index.html      # Quiz HTML structure
├── style.css       # Styles for the quiz
└── app.js          # JavaScript logic (questions, timer, feedback)
```

---

## 🚀 Quick Start

1. **Clone or download the repository**
2. **Open `index.html`** in your browser
3. **Start the quiz** by clicking the **Start Quiz** button

Optional: Run a local server for best behavior:

```bash
python -m http.server 8000
# Open http://localhost:8000/index.html
```

---

## 📝 How to Use

1. Click **Start Quiz**.
2. Read the question and click the answer choice.
3. Correct answers turn **green**, incorrect turn **red**.
4. Timer counts down from **15 seconds** for each question.
5. Quiz auto-advances after selection or when time runs out.
6. Final score and high score are displayed.
7. Click **Retake Quiz** to restart.

---

## ⚙️ Customization

* **Change time per question**: Update `DEFAULT_TIME` in `app.js`.
* **Add new questions**: Edit the `QUESTIONS` array in `app.js`. Each question requires:

  ```js
  { question: 'Question text', choices: ['A','B','C','D'], correct: 'Correct answer text' }
  ```
* **Styling**: Update `style.css` for colors, fonts, or layout.

---

## ✅ Learning Outcomes

* **DOM Manipulation** – Dynamic question and choice rendering
* **Event Handling** – Click events, next button, restart functionality
* **Timer Implementation** – `setInterval` and countdown logic
* **State Management** – Tracking score, high score, current question
* **Randomization** – Shuffling questions and choices
* **LocalStorage** – Persistent high score storage

---

## 🎨 Screenshots

*(screenshots)*

---

## 📌 License

This project is **open-source** and free to use for **learning purposes**.

---
