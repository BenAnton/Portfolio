import './App.css'
import Profile from './components/profile/Profile.tsx'
import Projects from './components/projects/Projects.tsx'
import WorkHistory from './components/WorkHistory/WorkHistory.tsx'
import Education from './components/Education/Education.tsx'
import Name from './components/Name/Name.tsx'
import Courses from './components/courses/Courses.tsx'
import Contents from './components/Contents/Contents.tsx'
import github from "../public/github.svg"
import linkedin from "../public/linkedin.svg"
import {useState, useEffect} from 'react'
import Technology from './components/Tech/Technology.tsx'
import EmailCopyLink from "./components/EmailCopyLink.tsx";
function App() {

    const [activeId, setActiveId] = useState<string>("");
    
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>("section[id]");
            let current = '';
            let closestDistance = Infinity;
            
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            
            if (rect.top < 200 && rect.bottom > 50) {
                const distanceFromTarget = Math.abs(rect.top - 100);
                
                if (distanceFromTarget < closestDistance) {
                    closestDistance = distanceFromTarget;
                    current = section.id;
                }
            }
        });
        
        setActiveId(prevActiveId => {
            if (prevActiveId !== current) {
                return current;
            }
            return prevActiveId;
        });
    };
    
        const scrollContainer = document.querySelector(".scroll-panel") as HTMLElement;
        
        if(scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll, {passive: true});
            handleScroll();

            return () => {
                scrollContainer.removeEventListener('scroll', handleScroll);
            };
        }
        else {
            console.log("Scroll container not found");
        }
}, []);
    

  return (
    <>
        <div className="page-cont">
<aside className="contents-panel">
    <Name/>
    <Contents activeId={activeId}/>
    <div className="social-cont">
        <a  className="social-a" href="https://github.com/BenAnton?tab=repositories"><img className="social-logo" src={github} alt="Github Logo"/></a>
        <EmailCopyLink/>
        <a className="social-a" href="https://www.linkedin.com/in/ben-anton/"><img className="social-logo" src={linkedin} alt="linkedIn Logo"/></a>
    </div>
</aside>
            
            <main className="scroll-panel">
                
                <section id="profile">
                    <Profile/>
                </section>
                <Technology/>
                <section id="projects">
                    <Projects/>
                </section>
                <section id="course">
                    <Courses/>
                </section>
                <section id="work-history">
                    <WorkHistory/>
                </section>
                <section id="education">
                    <Education/>
                </section>
            </main>

        </div>
    </>
  )
}

export default App
