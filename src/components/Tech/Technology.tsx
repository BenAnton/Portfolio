import Badge from "../badge";
import "./tech.css"

const lang: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "C#", "Python", "Node.Js"];
const back: string[] = ["Express", "MongoDB", "PostgreSQL", ".Net Core"];
const tools: string[] = ["Git/Github", "VSCode", "Rider", "JWT", "Jest", "xUnit", "REST APIs", "Podman/Docker", "Motion"];

function Technology() {
    return (
        <div className="tech-cont">
            <h2 className="tech-title">Languages & Frameworks</h2>
            <div className="badge-cont">
            {lang.map((lang: string, i: number) => (
               
                <Badge key={i}>{lang}</Badge>
               
            ))}
            </div>
            <h2 className="tech-title">Backend & Databases</h2>
            <div className="badge-cont">
            {back.map((back: string, i: number) => (
                
                <Badge key={i}>{back}</Badge>
               
            ))} 
            </div>
            <h2 className="tech-title">Tools</h2>
            <div className="badge-cont">
            {tools.map((tool: string, i: number) => (
               
                <Badge key={i}>{tool}</Badge>
                
            ))}
            </div>
        </div>
    )
}

export default Technology