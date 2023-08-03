import Loader from 'react-loaders'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
const Home = () => {

    return (
        <>
        <div class="home-page">
         <div class="typewriter">
            <h1>Hi, I'm Joey an aspiring coder</h1>
            <h2>Experience: </h2> 
            <h3>Python, Java, C... </h3>
            <h4>Javascript, React, HTML  </h4>
            <Link to = "/contact"> <span><button class='glowing-btn'><span class='glowing-txt'>C<span class='faulty-letter'></span>ONTACT ME</span></button></span></Link>

            </div>
        </div>
        {/* <Loader type="pacman"/> */}
        </>
    )
}

export default Home