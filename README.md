# GitHub Repo Explorer

## Project Title & Brief Description

**Exercise 3 Chosen:** GitHub Repository Explorer

GitHub Repo Explorer is a full-stack web application that allows users to search for any GitHub profile and explore detailed account and repository information. The application displays profile details such as avatar, bio, followers, following count, and public repository statistics. Users can browse repositories, sort them by stars, name, or last updated date, view additional repository details through expandable cards, and analyze language usage across repositories through a visual chart. The project uses a React frontend and a Node.js/Express backend with server-side caching to improve performance and reduce unnecessary GitHub API requests.

---

# Live Demo Links

**Frontend:**
https://git-hub-repo-explorer-six.vercel.app

**Backend API:**
https://github-repo-explorer-9qcb.onrender.com

**Sample API Endpoint:**
https://github-repo-explorer-9qcb.onrender.com/api/github/torvalds

---

# Tech Stack

## Frontend

### React.js

Used for building a component-based and interactive user interface.

### Vite

Provides a fast development server and optimized production builds.

### Axios

Handles communication between the frontend and backend APIs.

### Recharts

Used to visualize repository language distribution through charts.

### CSS3

Custom styling and responsive layouts without relying on UI frameworks.

---

## Backend

### Node.js

JavaScript runtime used for backend development.

### Express.js

Used to create REST APIs and manage routing.

### Axios

Fetches user and repository data from GitHub APIs.

### NodeCache

Implements in-memory caching to reduce repeated API requests and improve response time.

### CORS

Allows secure communication between frontend and backend applications running on different origins.

---

## Development Tools

* Git
* GitHub
* VS Code

---

# How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/AmaanSilawat/GitHub-Repo-Explorer.git
cd GitHub-Repo-Explorer
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Start Backend Server

```bash
npm run dev
```

Backend will run at:

```text
http://localhost:5000
```

### 4. Install Frontend Dependencies

Open a new terminal:

```bash
cd client
npm install
```

### 5. Start Frontend Application

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

# API Documentation

## 1. Get GitHub User Data

### Method

```http
GET
```

### Endpoint

```http
/api/github/:username
```

### Request Body

None

### Example

```http
/api/github/torvalds
```

### Response

```json
{
  "source": "github",
  "user": {
    "login": "torvalds",
    "name": "Linus Torvalds",
    "followers": 250000
  },
  "repos": []
}
```

---

## 2. Search GitHub Users (Suggestions)

### Method

```http
GET
```

### Endpoint

```http
/api/github/search-users/:query
```

### Request Body

None

### Example

```http
/api/github/search-users/tor
```

### Response

```json
[
  {
    "login": "torvalds",
    "avatar_url": "https://avatars.githubusercontent.com/u/1024025"
  }
]
```

---

# Project Structure

```text
GitHub-Repo-Explorer
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── cache
│   │   └── cache.js
│   │
│   ├── routes
│   │   └── githubRoutes.js
│   │
│   ├── services
│   │   └── githubService.js
│   │
│   ├── index.js
│   └── package.json
│
└── README.md
```

### Folder Overview

| Folder                | Purpose                            |
| --------------------- | ---------------------------------- |
| client/src/components | Reusable React UI components       |
| client/src/services   | API communication logic            |
| client/src/assets     | Static assets and images           |
| server/routes         | Express route handlers             |
| server/services       | GitHub API integration logic       |
| server/cache          | Server-side caching implementation |

---

# Features Implemented

## Required Features

* Search GitHub users by username
* Display profile information
* Display public repositories
* Sort repositories by stars
* Sort repositories by repository name
* Sort repositories by last updated date
* Handle invalid usernames
* Handle network failures
* Handle GitHub API rate-limit responses
* Responsive design for mobile and desktop devices

## Additional Features

* Server-side caching with 60-second TTL
* Loading states while fetching data
* Load More pagination
* Expandable repository cards
* Recently searched users using localStorage
* Repository language analytics chart
* Debounced GitHub user search suggestions
* User suggestion dropdown with avatars

---

# Next Steps

Future improvements would include developer comparison features, advanced repository analytics, richer data visualizations, automated testing, and Redis-based caching for improved scalability and maintainability.