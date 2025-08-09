export interface Project {
    name: string;
    makeup: string[];
    description: string;
    imgPath: string;
    date: string;
    link: string;
    
}

export interface Course {
    date: string,
    title: string,
    description: string,
    badges: string[];
}

export interface WorkHistory {
    company: string,
    position: string,
    date: string,
    description: string,
}

export interface Education {
    school: string,
    course: string,
    date: string,
    description: string
}