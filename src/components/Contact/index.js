import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am interested in full time opportunities in Technology and Business. 
          <br/>
          <br/>
            Email: jlamanna@villanova.edu.
            <br/>
            <br/>
            Phone: 862-241-9804
            </p>
             
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
