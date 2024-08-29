import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/JoeyPCLogo.png'
import LogoSubtitle from '../../assets/images/Joey Lamanna.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to = '/'>
            <img src = {LogoS} alt ="logo" />
            <img className='sub-logo' src = {LogoSubtitle} alt ="logo" />
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname="active" to= "/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className="about-link" to= "/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className= "contact-link" to= "/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className= "portfolio-link" to= "/portfolio">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target= "blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/joseph-lamanna-59018220b/"
                >
                    <FontAwesomeIcon icon = {faLinkedin} color= "#4d4d4e"/>
                </a>
                <a
                target= "blank"
                rel="noreferrer"
                href="https://github.com/Joeylamanna"
                >
                    <FontAwesomeIcon icon = {faGithub} color= "#4d4d4e"/>
                </a>
                <a
                target= "blank"
                rel="noreferrer"
                href="https://leetcode.com/JoeyLamanna/"
                >
                    <FontAwesomeIcon icon = {faCode} color= "#4d4d4e"/>
                </a>
                <a
                target= "blank"
                rel="noreferrer"
                href="https://www.hackerrank.com/jlamanna?hr_r=1"
                >
                    <FontAwesomeIcon icon = {faHackerrank} color= "#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
    )

export default Sidebar