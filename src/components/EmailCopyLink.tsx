import {useState} from "react";
import "./emailcopylink.css"
import emailIMG from "../../public/email.svg";
function EmailCopyLink() {
    const email = "ben.cmaa@gmail.com";
    const [showToolTip, setShowToolTip] = useState(false);
    
    const handleClick = async () => {
        try {
        await navigator.clipboard.writeText(email);
        setShowToolTip(true);
        setTimeout(() => {
            setShowToolTip(false);
        }, 1000);
    } catch(error) {
            console.error("Failed to copy email", error);
        }
    }; 
    
    return (
        <>
            <div className="ecl-cont">
            <button  className="ecl-button" onClick={handleClick}><img className="ecl-logo" src={emailIMG} alt="Email Logo"/></button>
    {showToolTip && <p className="tooltip">Copied!</p>}
            </div>
    </>
            )
}

export default EmailCopyLink