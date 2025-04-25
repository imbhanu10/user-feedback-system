User Feedback System — Project Overview 📝
========================================

Hey there! 

This is a simple full-stack web app where users can submit feedback, and you (or an admin) can see all those submissions on a dashboard. Think of it like a feedback inbox with filters and categories — clean, minimal, and works on both desktop and mobile.

---

What’s Inside 
----------------

- Frontend: React (with Axios for API calls)
- Backend: Node.js + Express
- Database: MongoDB (using Mongoose)
- Styling: Plain CSS with a soft sketchy/artistic look
- Testing: Jest + Supertest for backend, React Testing Library for frontend

---

What Does It Do
------------------

✅ Users can submit feedback (name, email, message, and category)  
✅ View all feedbacks in a scrollable dashboard  
✅ Filter feedback by category (Bug, Feature Request, Suggestion)  
✅ Delete feedback (admin-side)  
✅ View feedback stats by category  
✅ Form validations (required fields, email format, length limits)  
✅ Works on mobile and tablets too  

---

How to Run It Locally 🖥️
------------------------

1. Get Set Up

If you downloaded the ZIP:

- Unzip it
- Open the folder in VS Code (or your editor of choice)

Or if using Git:

    git clone https://github.com/imbhanu10/user-feedback-system
    cd user-feedback-system

---

 2. Start the Backend

Open a terminal and run:

    cd server
    npm install
    cp .env.example .env
    npm start

You should see: “Server running on port 5000”  
Make sure MongoDB is running in the background too.

---

 3. Start the Frontend

Open a second terminal:

    cd client
    npm install

If you’re using Node 17 or above, start it like this:

    $env:NODE_OPTIONS="--openssl-legacy-provider"
    npm start

React will launch at: http://localhost:3000

---

Running Tests 🧪
----------------

For backend:

    cd server
    npm test

For frontend:

    cd client
    npm test

---

How to See the Feedback Submitted 🔍
------------------------------------------

1. Use MongoDB Compass (GUI)

- Open Compass
- Connect to mongodb://localhost:27017
- Open “feedbackDB” and then the “feedbacks” collection

2. Log it in the console

In `server/routes/feedback.js`, add this:

    console.log('Received feedback:', req.body);

Now you’ll see every submission right in the backend terminal.

---

API Endpoints 🧠
----------------

- POST /feedback → submit feedback
- GET /feedback → get all feedback
- DELETE /feedback/:id → delete a feedback
- GET /feedback/stats → see category counts

---
