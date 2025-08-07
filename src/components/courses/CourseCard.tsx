import type {Course} from "../../Types/types";
import {courses} from "../../Data/courses.ts";
import "./coursescard.css"   
import Badge from "../badge";
import { motion } from "motion/react"
function CourseCard() {
    return (
       <>
           {courses.map((course: Course, index: number) => (
               <motion.div
                   className="courses-card-flex"
                   key={index}
                   initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                   transition={{duration: 0.4, delay: index * 0.1}}
                   viewport={{ once: true, amount: 0.2 }}
               >
               <div className="courses-card-flex-left">
               <p className="courses-date">{course.date}</p>
               </div>
            <div className="courses-card-flex-right">
                <h3 className="courses-title">{course.title}</h3>
                <p>{course.description}</p>
                <div className="courses-badge-cont">
                    {course.badges.map((badge: string, i: number) => (
                        <Badge key={i}>{badge}</Badge>
                    ))}
                </div>
            </div>
               </motion.div>  
           ))}
       
       </>
    )
}

export default CourseCard