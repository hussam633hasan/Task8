import { useState } from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons"



export default function Navbar() {


    const [ShowSidebar, setShowSidebar] = useState(true)

    function HandlShowSidebar() {
        
        setShowSidebar(!ShowSidebar)
    }

    return (
        <nav>
            <div className={ShowSidebar ? "Navbar" : "sidebar"}>
                <div className={ShowSidebar ? "logo" : "logo-sidebar"}>
                    <a href="https://www.focal-x.com">
                        <img src='https://www.focal-x.com/assets/img/home/logo.svg' alt="" className="img-logo" />
                    </a>
                    <h4>Digital marketing agency</h4>
                </div>
                <div className={ShowSidebar ? "links" : "links-sidebar"}>
                    <a href="#Home">Home</a>
                    <a href="#Services">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#Hosting">Clients & Partners</a>
                    <a href="#">X Academy</a>
                    <a href="#">About Us</a>
                    <a href="#footer">Let's Talk</a>
                </div>
                <button onClick={HandlShowSidebar} className={ShowSidebar ? "icon-bars" : "Xmark-icon"}>
                    {ShowSidebar ? <FontAwesomeIcon icon={faBarsStaggered} flip="horizontal" size="2xl" style={{ color: "#f19a04", }} /> : <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#fff", }} />}
                </button>
            </div>

        </nav>
    )
}
