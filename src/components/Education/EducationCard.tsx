import type {Education} from "../../Types/types";
import { education} from "../../Data/education.ts";
import "./educationcard.css"
import {motion} from "motion/react"

function EducationCard() {
    return (
        <>
            {education.map((edu: Education, index: number) => (
                <motion.div
                    className="education-card-flex"
                    key={index}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: index * 0.1}}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="education-card-flex-left">
                        <p className="education-date">{edu.date}</p>
                    </div>
                    <div className="education-card-flex-right">
                        <h3 className="education-title">{edu.school}</h3>
                        <p className="education-course">{edu.course}</p>
                        <p>{edu.description}</p>
                    </div>
                </motion.div>
            ))}
        
        </>
    )
}

export default EducationCard