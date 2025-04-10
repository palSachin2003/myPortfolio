'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Tailwind CSS</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div>
        <h3 className='text-lg font-semibold'>Viva Collage Virar</h3>
        <ul className='list-disc pl-2'>
          <li>BSc - Information Technology - 2022 </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <div>
        <h3 className='text-lg font-semibold'>TryCatch Training Institute</h3>
        <ul className='list-disc pl-4'>
          <li>MERN Stack Development</li>
        </ul>
      </div>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* <div className='rounded-xl overflow-hidden h-[500px] w-full border'> */}
        <Image src='/images/about-image.png' width={500} height={500} />
        {/* </div> */}
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Next, Node.js, Express, ,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
