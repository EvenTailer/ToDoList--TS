# 📝 Todo List App with TypeScript

A classic task management application built with pure TypeScript, without frameworks. This project demonstrates strong typing, modular architecture, and DOM manipulation skills.

## ✨ Features

- ✅ Add new tasks
- ✅ Mark tasks as complete (checkboxes)
- ✅ Delete tasks
- ✅ Automatic persistence in `localStorage` (tasks survive page reload)
- ✅ Fully responsive design (works on mobile and tablet)
- ✅ Smooth animations on hover and task addition

## 🛠 Tech Stack

- **TypeScript** — strict type checking
- **HTML5 / CSS3** — structure and styling
- **LocalStorage API** — client-side data persistence
- **Git / GitHub** — version control
- **lite-server** — local development server

## 📂 Project Architecture

The project follows a modular architecture:

| File | Responsibility |
|------|----------------|
| `src/core/types.ts` | Type definitions and interfaces (`Todo`) |
| `src/core/todoService.ts` | Data logic (CRUD + localStorage) |
| `src/core/todoRenderer.ts` | Rendering tasks to the DOM |
| `src/core/main.ts` | Entry point, event handlers |

This approach provides:
- **Separation of concerns** — each module has a single responsibility
- **Type safety** — TypeScript validates all connections between modules
- **Testability** — pure functions are easy to test separately

## 🚀 Live Demo

[GitHub Pages Link]  
https://eventailer.github.io/ToDoList--TS/

## 🖥 Local Development

```bash
# Clone the repository
git clone https://github.com/EvenTailer/ToDoList--TS.git

# Navigate to project folder
cd todo-list-ts

# Install dependencies
npm install

# Compile TypeScript
npx tsc

# Start local server
npm start
Then open http://localhost:3000 in your browser.

📸 Screenshots
|ToDoList|![ToDoList App](https://raw.githubusercontent.com/EvenTailer/ToDoList--TS/main/screenshots/todolist.png)|

🔮 Future Improvements
Edit task text

Filter tasks (all / active / completed)

Sort by creation date

Dark mode

Export / import tasks as JSON