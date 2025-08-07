import type {WorkHistory} from "../../Types/types";
import { workHistory} from "../../Data/workhistory.ts"; 
import "./workhistorycard.css"
import {motion} from "motion/react"

function WorkHistoryCard() {
    return (
        <>
            {workHistory.map((work: WorkHistory, index: number) => (
                <motion.div
                    className="work-history-card-flex"
                    key={index}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: index * 0.1}}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="work-history-card-flex-left">
                        <p className="work-date">{work.date}</p>
                </div>  
                    <div className="work-history-card-flex-right">
                        <h3 className="work-history-title">{work.company}</h3>  
                        <p className="work-role">{work.position}</p>
                        <p>{work.description}</p>
                    </div>
                </motion.div>
            ))}
        
        </>
    )
}

export default WorkHistoryCard