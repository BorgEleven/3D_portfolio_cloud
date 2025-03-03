import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { skills, experiences } from '../constants/index.js'
import CTA from '../components/CTA.jsx';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I&apos;m <span className='blue-gradient_text font-semibold
        drop-shadow'>David</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-2xl font-semibold text-slate-500'>
        <p>
          Student at high school, I am curios about game development. For now mostly I play a lot of games and learn about 
          how to make them. I also learn how to make 
          simple game engines and maps.</p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Platforms</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center
              items-center'>
                <img src={skill.imageUrl} alt={skill.name} 
                className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>My Gaming Records </h3>
        <div className='mt-5 flex flex-col gap-3 text-2xl font-semibold text-slate-500'>
          <p>My pro level 
           in various games include reaching Diamond rank in Fortnite, 
           achieving a top 500 position in Overwatch, and completing all quests in 
           The Witcher 3. I am constantly striving to improve my skills and take on new 
           challenges in the gaming world.Here is rundown:</p>
        </div>
        <div className='mt-12 flex'>
           <VerticalTimeline>
             {experiences.map((experience, index) => (
               <VerticalTimelineElement
                 key={experience.company_name}
                 date={experience.date}
                 iconStyle={{ background: experience.iconBg }}
                 icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                 }
                  contentStyle={{
                    borderBottom:'8px',
                    borderStyle:'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: '0 0 0 4px #f3f4f6',
                  }}

               >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}</h3>
                    <p className='text-black-500 font-medium text-base' 
                      style={{margin:0}}>
                      {experience.company_name}</p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index ) => (
                    <li key={`experience-point-${index}`} 
                    className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
               </VerticalTimelineElement>
             ))}
           </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About