import "./badge.css"

interface BadgeProps {
    children: string;
}

function Badge({children}: BadgeProps) {
    return (
    <p className="badge-style">{children}</p>
    )
}

export default Badge