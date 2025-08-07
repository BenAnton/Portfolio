import type {Project} from "./../Types/types.ts"
import workouttracker from "../../public/images/workouttracker.png"
import homeedventurers from "../../public/images/homeedventurers.png"
import toptrumps from "../../public/images/toptrumps.png"
import pshistory from "../../public/images/pshistory.png"
export const projects: Project[] = [
    {
    name: "Workout Tracker",
    makeup: ["HTML", "CSS", "JavaScript", ".Net Core", "PostgreSQL", "JWT Auth", "React", "Jest/XUnit"],
    description: "A responsive fitness logging application built with React, .NET Core, and PostgreSQL. Features include secure user authentication (JWT), dynamic workout creation forms, a personalised dashboard with performance metrics, full CRUD functionality for workouts and exercises, and a RESTful API. The project also includes unit and integration testing using xUnit (backend) and Jest (frontend). github.com/BenAnton/Workout-Tracker-Web-App",
    imgPath: workouttracker,
    date: "2025"
},
    {
        name: "Home Edventurers",
        makeup: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
        description: "A client-focused web application currently in development. Built with the MERN stack, the project is on hold pending updated requirements due to a shift in client needs. Demonstrates adaptability to changing specifications and client communication. github.com/BenAnton/Home-Edventurers",
        imgPath: homeedventurers,
        date: "2025"
    },
    {
        name: "Top-Trumps: NBA",
        makeup: ["HTML", "CSS", "TypeScript", "React"],
        description: "A simplified digital version of the classic “Top Trumps” card game, built with React and TypeScript. Implements turn-based gameplay logic, stat comparisons, and dynamic state management. Designed as a learning project to deepen understanding of TypeScript. github.com/BenAnton/Top-Trumps",
        imgPath: toptrumps,
        date: "2025"
    },
    {
        name: "CS50x Final Project",
        makeup: ["HTML", "CSS", "JavaScript", "React"],
        description: "An interactive web application exploring the history and evolution of a personal hobby. Developed as the capstone for Harvard's CS50 course, the project demonstrates dynamic rendering, responsive design, and client-side routing using React. github.com/BenAnton/CS50x-Final-Project-PS-History",
        imgPath: pshistory,
        date: "2024"
    },
]