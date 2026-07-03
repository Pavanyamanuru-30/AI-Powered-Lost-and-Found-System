# AI-Powered Lost and Found System (findmate)

A full-stack web application designed to help users easily report and find lost items.

## 🚀 Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS (Vanilla)

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) & bcrypt (Authentication)
- Axios

## 📂 Project Structure

- `Backend/` - Contains the Express server, database models, routes, and utilities.
- `Frontend/` - Contains the React client application.

## 🛠️ Getting Started

### Prerequisites
- Node.js installed on your local machine
- A MongoDB URI (Local or MongoDB Atlas)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pavanyamanuru-30/AI-Powered-Lost-and-Found-System.git
   cd AI-Powered-Lost-and-Found-System
   ```

2. **Backend Setup:**
   ```bash
   cd Backend
   npm install
   ```
   - Create a `.env` file in the `Backend` directory and add your environment variables (e.g., `MONGO_URI`, `PORT`, `JWT_SECRET`).
   - Start the backend server:
     ```bash
     npm start
     ```
     *(The backend runs on `http://localhost:5000` by default)*

3. **Frontend Setup:**
   ```bash
   cd ../Frontend
   npm install
   ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

## 📝 Features
- Report Lost Items
- Report Found Items
- AI Matching (Automatically finds matches between lost and found items)
