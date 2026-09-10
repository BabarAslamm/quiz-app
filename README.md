# 🚀 React Quiz Challenge

An interactive quiz application built with **React 19**. Enter your name, answer timed multiple-choice questions, watch your progress fill up in real time, and land on a persistent leaderboard that survives page refreshes.

Built as a hands-on project to practice modern React patterns — global state with the Context API and `useReducer`, custom hooks, and client-side routing.

---

## ✨ Features

- 📝 **Personalized start** — enter your name before the quiz begins
- ⏱️ **Countdown timer** per question, powered by a reusable custom hook (`useTimer`)
- 📊 **Live progress bar** that tracks how far you are through the quiz
- ✅ **Instant scoring** as you answer
- 🏆 **Persistent leaderboard** stored in `localStorage` — ranked by score, survives refreshes
- 🔁 **Reset & replay** to take the quiz again
- 📱 **Responsive UI** with Bootstrap 5

---

## 🛠️ Tech Stack

| Area | Technology |
|------|-----------|
| Framework | [React 19](https://react.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| State management | Context API + `useReducer` |
| Styling | [Bootstrap 5](https://getbootstrap.com/) |
| Build tool | [Vite](https://vite.dev/) |
| Persistence | Browser `localStorage` |

---

## 🧠 Key React Concepts Practiced

- **Global state without prop drilling** — a single `QuizContext` provides quiz state to every page.
- **`useReducer` for predictable state** — all quiz actions (`SET_NAME`, `ANSWER`, `FINISH`, `RESET`) flow through one reducer, so state changes are centralized and easy to follow.
- **Custom hooks** — `useTimer` encapsulates countdown logic (`setInterval` + cleanup) and is reusable anywhere.
- **Controlled components & side effects** — form inputs and `useEffect` for reading/writing the leaderboard.

---

## 📂 Project Structure

```
src/
├── components/        # Reusable UI pieces
│   ├── ProgressBar.jsx
│   ├── QuestionCard.jsx
│   └── Timer.jsx
├── context/
│   └── QuizContext.jsx   # Global state (Context + useReducer)
├── data/
│   └── questions.json    # Quiz questions
├── hook/
│   └── useTimer.jsx      # Custom countdown hook
├── pages/
│   ├── Home.jsx          # Name entry
│   ├── Quiz.jsx          # The quiz itself
│   ├── Result.jsx        # Final score + save to leaderboard
│   └── LeaderBoard.jsx   # Ranked scores
└── App.tsx               # Routes + providers
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/BabarAslamm/quiz-app.git
cd quiz-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the URL shown in your terminal (usually **http://localhost:5173**).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 📝 Adding Your Own Questions

Questions live in [`src/data/questions.json`](src/data/questions.json). Add an object to the array following this shape:

```json
{
  "id": 3,
  "question": "What does JSX stand for?",
  "options": ["JavaScript XML", "Java Syntax", "JSON Extended", "None"],
  "answer": "JavaScript XML"
}
```

---

## 🌱 Possible Improvements

Ideas for future iterations:

- Auto-advance to the next question when the timer hits `0`
- Category / difficulty selection
- A review screen showing which answers were right or wrong
- Fetch questions from an API instead of a local JSON file

---

## 👤 Author

**Babar Aslam**
GitHub: [@BabarAslamm](https://github.com/BabarAslamm)

---

⭐ If you found this project helpful or interesting, consider giving it a star!
