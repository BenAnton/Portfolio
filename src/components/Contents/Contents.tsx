import "./contents.css"

interface ContentsProps {
    activeId: string;
}

function Contents ({activeId}: ContentsProps) {
    return (
        <div className="contents-cont">

            <a className={activeId === "profile" ? 'active' : ''} href="#profile" style={{ '--line-length': '130px' } as React.CSSProperties}>About</a>
            <a className={activeId === "projects" ? 'active' : ''} href="#projects" style={{ '--line-length': '120px' } as React.CSSProperties}>Projects</a>
            <a className={activeId === "course" ? 'active' : ''} href="#course" style={{ '--line-length': '125px' } as React.CSSProperties}>Courses</a>
            <a className={activeId === "work-history" ? 'active' : ''} href="#work-history" style={{ '--line-length': '90px' } as React.CSSProperties}>Work History</a>
            <a className={activeId === "education" ? 'active' : ''} href="#education" style={{ '--line-length': '105px' } as React.CSSProperties}>Education</a>

        </div>  
    )
}

export default Contents