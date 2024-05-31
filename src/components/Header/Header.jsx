import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faBehance } from "@fortawesome/free-brands-svg-icons/faBehance"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"


export default function Header() {
    return (
        <div className="header" id="Home">
            <div className="top-header">
                <div className="header-text">
                    <h1 className="header-title">Hey !! Mario still here, But don’t forget that</h1>
                    <p>At focal X agency, we are working to build somthing different.</p>
                    <p>Here you’ll have a group of creative people who specialize in:</p>
                    <p>Branding, Digital Marketing, Web/App Development, Ui/Ux</p>
                    <p>Content creation, Graphic design, Social media and More........</p>
                    <p>So you can take a tour in our website, OR just Press Start :)</p>
                </div>
                <img src="./img/focal X agency logo_files/pattren.png" className="pattren" />
            </div>
            <div className="bottom-header">
                <span className="header-span1">
                    <a href="https://www.facebook.com/focal.x.agency/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2xl" style={{ color: "#ffffff", }} />
                    </a>
                    <a href="https://www.Instagram.com/focal.x.agency" target="_blank">
                        <FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{ color: "#ffffff", }} />
                    </a>
                    <a href="https://twitter.com/focal_x_agency" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{ color: "#ffffff", }} />
                    </a>
                    <a href="https://www.behance.net/focal-x-agency" target="_blank">
                        <FontAwesomeIcon icon={faBehance} size="2xl" style={{ color: "#ffffff", }} />
                    </a>
                    <a href="https://www.linkedin.com/company/focal-x-agency" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#ffffff", }} />
                    </a>
                </span>
                <span className="header-span2">
                    <p> 2021 - 2022 focal X agency All Right Reserved</p>
                </span>
                <img src="./img/focal X agency logo_files/gameBoy-min.png" className="gameBoy" />
                <img src="./img/focal X agency logo_files/gamefor-mobile.png" className="gameBoy-mobile" />
                <img src="https://www.focal-x.com/assets/img/home/fotter.svg" className="bottom" alt="" />
                <img src="./img/focal X agency logo_files/footer-mobile.png" className="bottom-mobile" alt="" />
                <img src="https://www.focal-x.com/assets/img/home/pressStart.svg" className="pressStart" alt="" />
            </div>
        </div>
    )
}
