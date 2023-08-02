import { useEffect, useState } from 'react'
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
                    the IT industry with emphasis on coding or cybersecurity.
                </p>
                <p>
                    
                </p>
            </div>
        </div>
    )
}
export default About