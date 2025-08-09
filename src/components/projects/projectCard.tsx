import type { Project } from "../../Types/types";
import { projects} from "../../Data/projects.ts";
import Badge from "../badge";
import "./projectcard.css"
import {motion} from "motion/react"
import github from "../../../public/github.svg";

function ProjectCard() {
    return (
        <>

           
        {projects.map((project: Project, index: number) => (
            <motion.div
                className="project-card-flex"
                key={index}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: index * 0.1}}
                viewport={{ once: true, amount: 0.3 }}
            >
            
            
                <div className="PC-flex-left">
            <img className="project-img" src={project.imgPath} alt={project.name}/> 
                </div>
                <div className="PC-flex-right">
                    <div className="project-card-flex-right-top">
                        <h3  className="project-title" key={index}>{project.name}</h3>
                        <a   href={project.link}><img className="github-link" src={github} alt="Github Logo"/></a>
                    </div>
            <p>{project.description}</p>
                <div className="badge-cont">
                    {project.makeup.map((makeup: string, i: number) => (
                        <Badge key={i}>{makeup}</Badge>
                        ))}
                </div>
                </div>  
                        </motion.div>
    ))}

    </>
);
}

export default ProjectCard