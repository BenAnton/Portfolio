import type {Project} from "./../Types/types.ts"
import workouttracker from "../../public/images/workouttracker.png"
import homeedventurers from "../../public/images/homeedventurers.png"
import toptrumps from "../../public/images/toptrumps.png"
import pshistory from "../../public/images/pshistory.png"
import crypto from "../../public/images/crypto.png"
export const projects: Project[] = [
    {
    name: "Workout Tracker",
    makeup: ["HTML", "CSS", "JavaScript", ".Net Core", "PostgreSQL", "JWT Auth", "React", "Jest/XUnit", "Motion"],
    description: "A responsive fitness logging application built with React, .NET Core, and PostgreSQL. Features include secure user authentication (JWT), dynamic workout creation forms, a personalised dashboard with performance metrics, full CRUD functionality for workouts and exercises, and a RESTful API. The project also includes unit and integration testing using xUnit (backend) and Jest (frontend).",
    imgPath: workouttracker,
    date: "2025",
        link: "https://github.com/BenAnton/Workout-Tracker-Web-App"
},
    {
        name: "Crypto Tracker (Ongoing)",
        makeup: ["HTML", "CSS", "TypeScript", "Vite", "MongoDb", "React", "Chart.Js"],
        description: "A MERN stack (MongoDB, Express, React with Vite, Node.js) application that fetches live cryptocurrency data from the CoinGecko API, displaying real-time market prices and trends using Chart.js. Users can simulate buying and selling coins to mirror their own portfolio, track performance over time, and review a full transaction history. No real funds involved — designed purely for portfolio tracking and educational purposes.",
        imgPath: crypto,
        date: "2025",
        link: "https://github.com/BenAnton/Crypto"
    },
    
    {
        name: "Home Edventurers",
        makeup: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
        description: "A client-focused web application currently in development. Built with the MERN stack, the project is on hold pending updated requirements due to a shift in client needs. Demonstrates adaptability to changing specifications and client communication.",
        imgPath: homeedventurers,
        date: "2025",
        link: "https://github.com/BenAnton/Home-Edventurers"
    },
    {
        name: "Top-Trumps: NBA",
        makeup: ["HTML", "CSS", "TypeScript", "React"],
        description: "A simplified digital version of the classic “Top Trumps” card game, built with React and TypeScript. Implements turn-based gameplay logic, stat comparisons, and dynamic state management. Designed as a learning project to deepen understanding of TypeScript.",
        imgPath: toptrumps,
        date: "2025",
        link: "https://github.com/BenAnton/Top-Trumps"
    },
    {
        name: "CS50x Final Project",
        makeup: ["HTML", "CSS", "JavaScript", "React"],
        description: "An interactive web application exploring the history and evolution of a personal hobby. Developed as the capstone for Harvard's CS50 course, the project demonstrates dynamic rendering, responsive design, and client-side routing using React.",
        imgPath: pshistory,
        date: "2024",
        link: "https://github.com/BenAnton/CS50x-Final-Project-PS-History"
    },
]