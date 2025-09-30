import type {Project} from "./../Types/types.ts"
import workouttracker from "../../public/images/workouttracker.png"
import homeedventurers from "../../public/images/homeedventurers.png"
import toptrumps from "../../public/images/toptrumps.png"
import pshistory from "../../public/images/pshistory.png"
import crypto from "../../public/images/crypto.png"
import movieDb from "../../public/screenshot2.png"

export const projects: Project[] = [
    {
        name: "Movie Database",
        makeup: ["HTML", "CSS", "TypeScript", "Node", "PostgreSQL", "Better-Auth", "React", "Prisma"],
        description: "A full-stack PERN (PostgreSQL, Express, React, Node) application built with TypeScript that allows users to track movies with personalized watchlists, favourites, and watched status. Features include secure authentication via better-auth (email/password and Google login), keyword search, filtering by genre, rating, year, and user-specific watch status, as well as client-side pagination and responsive design down to 750px. The app integrates the OMDB API for movie data, supports debounced search input, and includes smooth UI interactions such as animated login forms and loading states. The project demonstrates full-stack development skills, state management in React, database modeling with Prisma, and handling async API requests.",
        imgPath: movieDb,
        date: "2025",
        link: "https://github.com/BenAnton/MovieDB"
    },
    {
    name: "Workout Tracker",
    makeup: ["HTML", "CSS", "JavaScript", ".Net Core", "PostgreSQL", "JWT Auth", "React", "Jest/XUnit", "Motion"],
    description: "A responsive fitness logging application built with React, .NET Core, and PostgreSQL. Features include secure user authentication (JWT), dynamic workout creation forms, a personalised dashboard with performance metrics, full CRUD functionality for workouts and exercises, and a RESTful API. The project also includes unit and integration testing using xUnit (backend) and Jest (frontend).",
    imgPath: workouttracker,
    date: "2025",
        link: "https://github.com/BenAnton/Workout-Tracker-Web-App"
},
    {
        name: "Crypto Tracker",
        makeup: ["HTML", "CSS", "TypeScript", "Vite", "MongoDb", "React", "Chart.Js"],
        description: "A full-stack web application for real-time cryptocurrency tracking, with features for portfolio management, buy/sell transaction logging, history export to CSV, light/dark mode, and multi-currency support via live APIs.",
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