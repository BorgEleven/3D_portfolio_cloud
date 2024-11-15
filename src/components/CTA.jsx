import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='text-2xl font-bold blue-gradient_text'>
            Curios about my skills?<br className='sm:block hidden'/>
            I am constantly striving to improve my skills and take on new 
            challenges in the gaming world. If you have a project in mind, or just want to say hi, 
            feel free to get in touch.
        </p>
        <Link to="/contact" className='btn'>
          Contact 
        </Link>
    </section>
  )
}

export default CTA