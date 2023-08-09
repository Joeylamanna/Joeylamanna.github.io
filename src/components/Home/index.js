import Loader from 'react-loaders'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
const Home = () => {

    return (
        <>
        <div class="container home-page ">
         <div class="typewriter">
         <span className="tags top-tag">&lt;/div&gt;</span>
        <br/>
        <span className="tags second-top">&lt;body&gt;</span>
        
            <h1>Hi, I'm Joey an aspiring coder</h1>
            <h2>Experience: </h2> 
            <h3>Python, Java, C... </h3>
            <h4>Javascript, React, HTML  </h4>
            <Link to = "/contact"> <span><button class='glowing-btn'><span class='glowing-txt'>C<span class='faulty-letter'></span>ONTACT ME</span></button></span></Link>
            <br/>
            <span className="tags bottom-tags">&lt;/body&gt;</span>
            <br/>
            <span className=" tags bottom-tag-html">&lt;/div&gt;</span>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home