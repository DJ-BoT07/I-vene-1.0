## Problem Statement  

**Theme:** Career & Job Preparation  

**Problem Statement:**  
Candidates preparing for job interviews often struggle with confidence, time management, and structured practice. Traditional mock interviews are either expensive or lack realism and actionable feedback. **Ivene 1.0** aims to address this by providing an AI-driven platform that generates tailored interview questions, records real-time video/audio answers, and provides instant, detailed feedback to help users build confidence, identify weaknesses, and prepare effectively for real-world interviews.  

---

## 📑 Table of Contents  

- [What is Ivene 1.0](#what-is-ivene-10)  
- [How We Solve the Problem](#how-we-solve-the-problem)  
- [Inspiration](#inspiration)  
- [What It Does](#what-it-does)  
- [✨ Key Features](#️-key-features)  
- [User Access](#user-access)  
- [Dashboards](#dashboards)  
  - [Interview Dashboard](#interview-dashboard)  
  - [Feedback Dashboard](#feedback-dashboard)  
- [Live demo link](#live-demo-link)  
- [🛠️ Tech Stack](#️-tech-stack)  
- [🚀 Getting Started Locally](#-getting-started-locally)  

---

## What is Ivene 1.0?  

**Ivene 1.0** is an AI-powered mock interview platform that helps job seekers practice interviews in a realistic environment. The platform uses your webcam and mic to simulate an actual interview setting. It generates customized questions using Gemini AI, records your answers, and provides AI-generated feedback and detailed reports. With **Ivene 1.0**, you can track your progress, identify weak areas, and improve your performance with every attempt.  

![Alt Text](./public/ivene-home.png)  

---

## How We Solve the Problem  

1️⃣ We generate job-specific and skill-level appropriate interview questions using AI so candidates can practice relevant topics.  
2️⃣ Candidates can record their answers using video and audio, mimicking real interview conditions and building confidence in presentation skills.  
3️⃣ The system transcribes answers using speech-to-text, ensuring accurate analysis of both spoken content and communication style.  
4️⃣ AI evaluates responses instantly, providing feedback on content, fluency, clarity, confidence, and technical correctness.  
5️⃣ Detailed reports allow users to compare their answers with model answers and see clear suggestions for improvement.  
6️⃣ Candidates can revisit past sessions, track growth over time, and build interview readiness through consistent practice.  

![Alt Text](./public/ivene-dashboard.png)  

---

## Inspiration  

Job seekers often don’t have access to realistic mock interviews that give them actionable feedback on their performance. Many rely on static question lists or expensive coaching. **Ivene 1.0** was inspired by the need to democratize quality interview preparation — giving everyone access to a tool that not only simulates the real experience but also helps them improve through AI-powered analysis, voice-to-text evaluation, and feedback reports.  

---

## What It Does  

- Generates **custom interview questions** for the chosen job role using Gemini AI.  
- Enables **recording of video and audio answers** for realistic practice sessions.  
- **Transcribes speech to text** for further evaluation and comparison.  
- Provides **instant AI feedback** on your answers, with detailed ratings on technical and soft skills.  
- Displays **model answers** to help you learn the ideal response structure.  
- Allows you to **track your progress over time** by storing session reports.  
- Ensures a **secure and private environment** where your video/audio is processed but never stored.  

---

## ✨ Key Features  

### For Candidates  
- 🌟 AI-generated job-specific questions tailored to your chosen field and skill level.  
- 🎥 Realistic mock interview environment with video + mic recording for immersive practice.  
- 📝 Speech-to-text conversion for accurate content analysis and self-review.  
- 🚀 Instant feedback on your answers — covering content, clarity, confidence, and correctness.  
- 📈 Track your performance over multiple sessions and view detailed reports.  
- 💬 Compare your answers with AI-generated model answers to see how you can improve.  
- 🔒 Data privacy: No video/audio recordings are stored — everything is processed in real-time only.  

---

## User Access  

Users sign up or log in securely using **Clerk Authentication**. Once logged in, they can access their personalized dashboard where they can start mock interviews, view feedback reports, and monitor their performance history.  

![Alt Text](./public/ivene-login.png)  

---

## Dashboards  

### Interview Dashboard  
- Start AI-generated mock interviews.  
- Record video + audio responses to questions.  
- View current and past interview sessions.  

![Alt Text](./public/ivene-interview.png)  

---

### Feedback Dashboard  
- Get AI-generated feedback with ratings for each answer.  
- See model answers for comparison.  
- Download or view detailed reports to track improvements over time.  

![Alt Text](./public/ivene-feedback.png)  

---

## Live demo link  
👉 [https://i-vene-1-0.vercel.app/](https://i-vene-1-0.vercel.app/)  

---

## 🛠️ Tech Stack  

| **Category**  | **Technologies**           | **Description**                             |
|---------------|---------------------------|---------------------------------------------|
| **Frontend**  | Next.js                    | React-based framework for server-side rendering and SPA |
|               | Tailwind CSS               | Utility-first CSS for rapid UI development  |
| **Backend**   | Drizzle ORM + PostgreSQL   | Type-safe queries + scalable relational DB  |
| **AI**        | Gemini AI                  | AI question generation + model answer creation |
| **Auth**      | Clerk                      | Secure user authentication and session mgmt |
| **Media**     | WebRTC / MediaRecorder     | Handles real-time video/audio recording     |
| **Other**     | Vercel                     | Deployment and hosting                      |

---

## 🚀 Getting Started Locally  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/DJ-BoT07/I-vene-1.0.git
cd i-vene-1.0-main
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_DRIZZLE_DB_URL=your_postgresql_connection_string

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5

NEXT_PUBLIC_INFO="Enable Video Cam and Microphone (prefer to wear Headphones for smooth experience) to Start your AI Generated Mock Interview. It has 5 Questions which you can answer and at last you will get the report on the basis of your Answer. Note: We never record your video or audio. It is just for the purpose of AI Generated Mock Interview."

NEXT_PUBLIC_QUESTION_NOTE="Click on Record Answer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each question and your answer to compare it."
```

### 4️⃣ Run the Application
```bash
npm run dev
```
Open your browser at http://localhost:3000
