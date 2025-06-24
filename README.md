# CodeCanvas

A collaborative coding platform and social hub for programmers. CodeCanvas lets you write, run, and share code, participate in discussions, manage coding contests, and connect with friends—all in a modern, full-stack web application.

---

## 🚀 Features

- **Modern Code Editor**: Write code in C++, Python, Java, or JavaScript with syntax highlighting and instant output (powered by CodeMirror and Piston API).
- **Language Selection**: Switch between popular programming languages easily.
- **Input/Output Panel**: Provide custom input and view program output instantly.
- **User Authentication**: Register, login, and manage your profile securely.
- **Profile Management**: Edit your profile, update skills, and connect your Codeforces handle.
- **Discussions & Solutions**: Participate in coding discussions and share solutions.
- **Contests & Calendar**: View and track upcoming coding contests.
- **Rooms**: Join or create collaborative coding rooms.
- **Responsive UI**: Clean, dark-themed interface for a great experience on any device.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, CodeMirror, CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT
- **Code Execution**: [Piston API](https://github.com/engineer-man/piston)

---

## 📦 Dependency Management

> **Note:** All dependencies (including CodeMirror, debounce, and others) are listed in the `package.json` files for both frontend and backend. **`node_modules/` and build output are NOT uploaded to git** (see `.gitignore`).
>
> **After cloning, you must run `npm install` in both the `backend` and `frontend` folders to download all required dependencies.**

---

## ⚡ Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/CodeCanvas.git
cd code_canvas
```

### 2. Install Dependencies

#### Backend
```sh
cd backend
npm install
```

#### Frontend
```sh
cd ../frontend
npm install
```

---

## ⚙️ Environment Setup

### Backend (`backend/.env`)
Create a file named `.env` in the `backend` folder with the following content:

```
MONGODB_URI=mongodb://localhost:27017/codecanvas
PORT=3000
JWT_SECRET=your_jwt_secret_key_here
```

- **MONGODB_URI**: Uses local MongoDB storage. Make sure MongoDB is running on your machine.
- **PORT**: The port your backend will run on (default: 3000).
- **JWT_SECRET**: A secret key for signing JWT tokens. **Generate a strong key using:**
  ```sh
  node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
  ```
  Copy the output and paste it as the value for `JWT_SECRET`.

### Frontend (`frontend/.env`)
Create a file named `.env` in the `frontend` folder with the following content:

```
VITE_JUDGE=https://emkc.org/api/v2/piston/execute
VITE_API_URL=https://alfa-leetcode-api.onrender.com
VITE_BACKEND_URL=http://localhost:3000

```

## ️▶️ How to Run

### Start Backend
```sh
cd backend
npm start
```

### Start Frontend
```sh
cd ../frontend
npm run dev
```

- Visit the app at [http://localhost:5173](http://localhost:5173)

---

## 👤 Authors

- **Kumara Vishnu Koushik** ([vishnukoushikkumara](https://github.com/vishnukoushikkumara))
- **Contributors:** See [GitHub contributors](https://github.com/yourusername/CodeCanvas/graphs/contributors)

---

## 📄 License

This project is licensed under the MIT License.


