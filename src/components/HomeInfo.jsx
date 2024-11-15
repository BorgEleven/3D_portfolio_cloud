import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5' >
            Hi, I&apos;m <span className='font-semibold'>David</span> 👋
            <br />
            Gamer & student from
            <span className='font-semibold'> Zagreb, Croatia</span> 
        </h1>
    ),
    2: (
        <h1>
            <InfoBox 
                text="I&apos;m a student at the high school of 
                electrical engineering and computing in Zagreb, Croatia."
                link="/about"
                btnText="See more about me"
            />
        </h1>
    ),
    3: (
        <h1>
            <InfoBox 
                 text="I play Fortnite, Minecraft, CoD, and many other games.
                    Curious about my gaming setup? Check it out!
                 "
                 link="/projects"
                 btnText="Visit my Twitch channel"
            />
        </h1>
    ),
    4: (
        <h1>
            <InfoBox 
                 text="Want to chellenge me in some of the games I play?
                    Let&apos;s connect and play together! 
                 "
                 link="/contact"
                 btnText="Brave enought to challenge me?"
            />
        </h1>
    )
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
    
  
}

export default HomeInfo