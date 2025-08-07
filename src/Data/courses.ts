import type {Course} from "../Types/types.ts";

export const courses: Course[] = [
    {
        date: "2024",
        title: "CS50x: Introduction to Computer Science, Harvard University (Online)",
        description: "Comprehensive introduction to computer science covering C, Python, algorithms, SQL, Flask, HTML/CSS, cybersecurity, and AI. Final project: an interactive web app built with React and JavaScript exploring a personal hobby.",
        badges: ["Computer Science", "Databases", "Python"],
    },
    {
        date: "2024",
        title: "CS50p: Programming with Python, Harvard University (Online)",
        description: "Covered object-oriented programming, file I/O, unit testing, and regular expressions; final project was a command-line multi-unit converter for length, weight, and area.",
        badges: ["Computer Science", "Data Structures", "Algorithms", "SQL", "Python", "Web Development", "CSS", "HTML", "JavaScript"]
    },
    {
        date: "2024",
        title: "Full Stack Open: University of Helsinki (Online)",
        description: "Completed coursework on full-stack development using the MERN stack (MongoDB, Express, React, Node.Js), focusing on building and connecting RESTful APIs with modern frontend frameworks.",
        badges: ["React", "NodeJs", "Express", "Testing", ],
    },
    {
        date: "2024",
        title: "The Odin Project",
        description: "Completed foundational modules in web development, covering HTML, CSS, JavaScript, and Node.js through hands-on, project-based learning.",
        badges: ["Git", "HTML", "CSS", "JavaScript", "Node.js", "Flexbox + Grid", "API's", "Testing", "Animation", "Accessibility", "Responsive Design"],
    }
];