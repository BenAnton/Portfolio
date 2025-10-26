import type {Project} from "./../Types/types.ts"
import workouttracker from "../../public/images/workouttracker.png"
import homeedventurers from "../../public/images/HEscreen.png"
// import toptrumps from "../../public/images/toptrumps.png"
// import pshistory from "../../public/images/pshistory.png"
import crypto from "../../public/images/crypto.png"
import movieDb from "../../public/screenshot2.png"
import snakeulator from "../../public/images/snakeulator_screen.png"

export const projects: Project[] = [
    {
        name: "Snakulator",
        makeup: ["Python", "PyGame"],
        description: "A Python/Pygame project combining classic snake gameplay with math challenges. Players navigate the snake to “eat” the correct answers while avoiding wrong ones, reinforcing arithmetic skills under pressure. Features include dynamic question generation, real-time collision handling, and a responsive score system. This project demonstrates clean object-oriented design, game logic implementation, and interactive UI handling in Python.",
        imgPath: snakeulator,
        date: "2025",
        link: "https://github.com/BenAnton/Snakulator",
    },
    
    {
        name: "Movie Database",
        makeup: ["HTML", "CSS", "TypeScript", "Node", "PostgreSQL", "Better-Auth", "React", "Prisma", "AWS"],
        description: "A full-stack PERN application built with TypeScript that allows users to track movies with personalized watchlists, favourites, and watched status. Features secure authentication via better-auth (email/password and Google OAuth login), keyword search, filtering by genre/rating/year, and user-specific watch status tracking. Integrates the OMDB API for movie data with debounced search and smooth UI interactions including animated forms and loading states. Deployed on AWS with CloudFront CDN, API Gateway, EC2, RDS PostgreSQL, S3 storage, and Route 53 DNS management. Usage of Prisma ORM and AWS infrastructure.",
        imgPath: movieDb,
        date: "2025",
        link: "https://github.com/BenAnton/MovieDB",
        liveLink: "https://moviedb.benanton.online/"
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
        makeup: ["HTML", "CSS", "TypeScript", "Next.js"],
        description: "A client-focused web application built with Next.js, TypeScript, and React. Designed to deliver a modern, responsive user experience, the project demonstrates practical client collaboration and adaptability to evolving requirements. Hosted on Vercel with custom domain name",
        imgPath: homeedventurers,
        date: "2025",
        link: "https://github.com/BenAnton/Home-Ed-v2",
        liveLink: "https://www.homeedventurers.com/"
    },
    // {
    //     name: "Top-Trumps: NBA",
    //     makeup: ["HTML", "CSS", "TypeScript", "React"],
    //     description: "A simplified digital version of the classic “Top Trumps” card game, built with React and TypeScript. Implements turn-based gameplay logic, stat comparisons, and dynamic state management. Designed as a learning project to deepen understanding of TypeScript.",
    //     imgPath: toptrumps,
    //     date: "2025",
    //     link: "https://github.com/BenAnton/Top-Trumps"
    // },
    // {
    //     name: "CS50x Final Project",
    //     makeup: ["HTML", "CSS", "JavaScript", "React"],
    //     description: "An interactive web application exploring the history and evolution of a personal hobby. Developed as the capstone for Harvard's CS50 course, the project demonstrates dynamic rendering, responsive design, and client-side routing using React.",
    //     imgPath: pshistory,
    //     date: "2024",
    //     link: "https://github.com/BenAnton/CS50x-Final-Project-PS-History"
    // },
]