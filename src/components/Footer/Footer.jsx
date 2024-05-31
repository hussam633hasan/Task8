import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faBehance } from "@fortawesome/free-brands-svg-icons/faBehance"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-part1">
                <a href="https://www.focal-x.com">
                    <img src='./img/focal X agency logo_files/focal_X_agency_logo-removebg-preview-removebg-preview.png' alt="focal X agency" className="img-logo-footer" />
                </a>
                <span className="footer-span1">.agency</span>
                <h4>Head Office</h4>
                <p>Syria - Latakia - grh2+hjx35.5199518</p>
                <p> © 2021 - 2023 focal X L.L.C All Right Reserved</p>
            </div>
            <div className="footer-part2">
                <div>
                    <h4>Sales</h4>
                    <p>contact@focal-x.com +963 953 666 056</p>
                    <h4>Public Relations</h4>
                    <p>pr@focal-x.com +963 953 666 052</p>
                </div>
                <div>
                    <h4>Customer Support</h4>
                    <p>info@focal-x.com +963 953 666 054</p>
                    <h4>Human Resources</h4>
                    <p>hr@focal-x.com</p>
                </div>
                <div>
                    <h4>Useful Links</h4>
                    <p>Clients & Partners</p>
                    <p>Check Certificat ID</p>
                    <p>Check for employee</p>
                    <p>Our Brand ID</p>
                    <p>guidlines</p>
                </div>
                <div>
                    <h2>Keep In Touch</h2>
                <span className="footer-span2">
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
                </div>
            </div>
        </footer>
    )
}
