import { faGitAlt, faGithub, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const About = () => {
    
        const [letterClass, setLetterClass] = useState('text-animate')
      

useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <> 
         <div className='container about-page'>
         <span className="tags top-tag">&lt;/div&gt;</span>
        <br/>
        <span className="tags second-top">&lt;body&gt;</span>
            <div className='text-zone'> 
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['A', 'b', 'o','u','t',' ','m','e']}
                        idx = {15}
                    />
                    
                    
                </h1>
                <p> I am a Computer Science student in my Senior year
                    at Villanova University with an interest
                    in coding, cybersecurity, web development,
                    app development, and Business opportunities. I am a consistently achieving
                    student and always strive to learn new technologies.  
                </p>
                <p> 
                    I am a hard-working, motivated, and trusted asset to
                    any team. I love working in groups and combining ideas to
                    achieve project goals. 
                    I'm currently seeking any offers for full-time positions in 
                    the IT industry with emphasis on development,Cybersecurity, or Business.
                </p>
               

            </div>
            <br/>
            <span className="tags bottom-tags">&lt;/body&gt;</span>
            <br/>
            <span className=" tags bottom-tag-html">&lt;/div&gt;</span>
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>    
                        <FontAwesomeIcon icon={faReact} color ="#5ED4F4"/>
                    </div>
                    <div className='face2'>    
                        <FontAwesomeIcon icon={faPython} color ="#1573a9"/>
                    </div>
                    <div className='face3'>    
                        <FontAwesomeIcon icon={faJava} color ="#76b5c5"/>
                    </div>
                    <div className='face4'>    
                        <FontAwesomeIcon icon={faJsSquare} color ="#EFD81D"/>
                    </div>
                    <div className='face5'>    
                        <FontAwesomeIcon icon={faGithub} color ="White"/>
                    </div>
                    <div className='face6'>    
                        <FontAwesomeIcon icon={faHtml5} color ="#F06529"/>
                    </div>
                    
                </div>


            </div>
         </div>
         <Loader type= "pacman"/>
        </>
    )
}
export default About