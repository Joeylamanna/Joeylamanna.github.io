import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import SocialConnect from '/Users/joeylamanna/react-portfolio/src/assets/images/SocialConnect.png';
import fitnessapp from '/Users/joeylamanna/react-portfolio/src/assets/images/fitnessapp.png';
import Blackjack from '/Users/joeylamanna/react-portfolio/src/assets/images/Blackjack.png';
import craps from '/Users/joeylamanna/react-portfolio/src/assets/images/Craps.png';
import bingo from '/Users/joeylamanna/react-portfolio/src/assets/images/bingo.png';
import sql from '/Users/joeylamanna/react-portfolio/src/assets/images/sql.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './index.scss';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const projects = [
        {
            title: 'Social Connect',
            description: 'A social media aggregator that allows the user to see all of their accounts in one place. Currently only supporting Instagram API with plans to expand to other platforms and more feature. View your posts, keep up with the latest comments, see what days you posted, and see your recent like totals.',
            images: [SocialConnect],
            githubLink: 'https://github.com/CSC4700-Spring2024-Org/csc4700-team-project-socialconnect' // Replace with actual link
        },
        {
            title: 'Fitness App',
            description: 'This Fitness App is a mobile Flutter application compatible on IOS and Android that allows users to achieve their fitness goals. With intuitive workout customization, users can easily add, edit, remove, and keep track of workouts.',
            images: [fitnessapp],
            githubLink: 'https://github.com/Joeylamanna/trainingApp' // Replace with actual link
        },
        {
            title: 'Yankees SQL Database',
            description: 'This is a group project where we made a New York Yankees database made in SQL.',
            images: [sql],
            githubLink: 'https://github.com/Joeylamanna/MLB-Databases-Project' // Replace with actual link
        },
        {
            title: 'Bingo Verifier',
            description: 'Bingo Verifier is a program coded in 4 different languages: C, Java, Python, and Lisp. The goal of each project was to take in an input of strings that had to verify whether or not a valid bingo was present.',
            images: [bingo],
            githubLink: 'https://github.com/Joeylamanna/BingoVerifier' // Replace with actual link
        },
        {
            title: 'Blackjack',
            description: 'BlackJack is a Java game that runs in the terminal for your IDE of choice that mimics the same experience of playing Blackjack.',
            images: [Blackjack],
            githubLink: 'https://github.com/Joeylamanna/Blackjack' // Replace with actual link
        },
        {
            title: 'Craps Game',
            description: 'Craps is a game developed in Java that simulates the pass line bet in craps.',
            images: [craps],
            githubLink: 'https://github.com/Joeylamanna/Craps' // Replace with actual link
        }
    ];

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'e', 'r', 's', 'o', 'n', 'a', 'l', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>

                    <div className="portfolio-container">
                        {projects.map((project, index) => (
                            <div className="project" key={index}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="media">
                                    <div className="images-row">
                                        {project.images.map((image, idx) => (
                                            <img key={idx} src={image} alt={`${project.title} - ${idx + 1}`} />
                                        ))}
                                    </div>
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                                            <FontAwesomeIcon icon = {faGithub} color= "#4d4d4e"/>                                            View on GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
