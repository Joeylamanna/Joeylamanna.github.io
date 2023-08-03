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
            <div className='text-zone'> 
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['A', 'b', 'o','u','t',' ','m','e']}
                        idx = {15}
                    />
                    
                    
                </h1>
                <p> I am a Computer Science student in my junior year
                    at Villanova University with an interest
                    in coding, cybersecurity, web development,
                    and app development. I am a hard-working
                    student and always strive to learn new technologies.  
                </p>
                <p> 
                    I am a hard-working, motivated, and consistent asset to
                    any team. I love working in teams and combining ideas to
                    achieve completing projects. 
                    I'm currently seeking any offers for internship positions in 
                    the IT industry with emphasis on development or cybersecurity.
                </p>
               

            </div>

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
         {/* <Loader type= "pacman"/> */}
        </>
    )
}
export default About